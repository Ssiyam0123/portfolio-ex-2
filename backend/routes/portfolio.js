import express from "express";
import auth from "../middleware/auth.js";
import Profile from "../models/Profile.js";
import Skill from "../models/Skill.js";
import Experience from "../models/Experience.js";
import Project from "../models/Project.js";
import { getDecryptedKey } from "../utils/keys.js";

const router = express.Router();

/* =========================================================================
   PROFILE
   ========================================================================= */

// @route   GET api/portfolio/profile
// @desc    Get profile details
router.get("/profile", async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      // Fallback fallback if no profile exists
      profile = new Profile({
        name: "Esthiyak Ahmmed",
        role: "Frontend Web Developer",
        bio: "Transforming complex ideas into pixel-perfect, interactive web experiences with clean architecture and modern UI design.",
        about: "I am a dedicated Frontend & Full-Stack Engineer focused on building high-performance, modern web applications. Specialized in React.js, Next.js, Node.js, and MongoDB, I transform complex business requirements into intuitive, lightning-fast user interfaces. I take pride in writing clean, maintainable code, optimizing web performance, and delivering seamless digital experiences."
      });
      await profile.save();
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   PUT api/portfolio/profile
// @desc    Update profile details (Admin only)
router.put("/profile", auth, async (req, res) => {
  const { name, role, bio, about, heroImage } = req.body;
  try {
    let profile = await Profile.findOne();
    if (profile) {
      profile.name = name || profile.name;
      profile.role = role || profile.role;
      profile.bio = bio || profile.bio;
      profile.about = about || profile.about;
      if (heroImage !== undefined) profile.heroImage = heroImage;
      await profile.save();
      return res.json(profile);
    }
    profile = new Profile({ name, role, bio, about });
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

/* =========================================================================
   SKILLS
   ========================================================================= */

// @route   GET api/portfolio/skills
// @desc    Get all skills
router.get("/skills", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/portfolio/skills
// @desc    Add a new skill (Admin only)
router.post("/skills", auth, async (req, res) => {
  const { name, iconName, category } = req.body;
  try {
    const newSkill = new Skill({ name, iconName, category });
    await newSkill.save();
    res.json(newSkill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   PUT api/portfolio/skills/:id
// @desc    Update a skill (Admin only)
router.put("/skills/:id", auth, async (req, res) => {
  const { name, iconName, category } = req.body;
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ msg: "Skill not found" });

    skill.name = name || skill.name;
    skill.iconName = iconName || skill.iconName;
    skill.category = category || skill.category;

    await skill.save();
    res.json(skill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   DELETE api/portfolio/skills/:id
// @desc    Delete a skill (Admin only)
router.delete("/skills/:id", auth, async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ msg: "Skill not found" });

    await Skill.findByIdAndDelete(req.params.id);
    res.json({ msg: "Skill removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

/* =========================================================================
   EXPERIENCE
   ========================================================================= */

// @route   GET api/portfolio/experience
// @desc    Get all experiences
router.get("/experience", async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });
    res.json(experiences);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/portfolio/experience
// @desc    Add a new experience (Admin only)
router.post("/experience", auth, async (req, res) => {
  const { job, company, date, responsibilities } = req.body;
  try {
    const newExp = new Experience({ job, company, date, responsibilities });
    await newExp.save();
    res.json(newExp);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   PUT api/portfolio/experience/:id
// @desc    Update an experience (Admin only)
router.put("/experience/:id", auth, async (req, res) => {
  const { job, company, date, responsibilities } = req.body;
  try {
    const exp = await Experience.findById(req.params.id);
    if (!exp) return res.status(404).json({ msg: "Experience not found" });

    exp.job = job || exp.job;
    exp.company = company || exp.company;
    exp.date = date || exp.date;
    exp.responsibilities = responsibilities || exp.responsibilities;

    await exp.save();
    res.json(exp);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   DELETE api/portfolio/experience/:id
// @desc    Delete an experience (Admin only)
router.delete("/experience/:id", auth, async (req, res) => {
  try {
    const exp = await Experience.findById(req.params.id);
    if (!exp) return res.status(404).json({ msg: "Experience not found" });

    await Experience.findByIdAndDelete(req.params.id);
    res.json({ msg: "Experience removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

/* =========================================================================
   PROJECTS
   ========================================================================= */

// @route   GET api/portfolio/projects
// @desc    Get all projects
router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/portfolio/projects
// @desc    Add a new project (Admin only)
router.post("/projects", auth, async (req, res) => {
  const { name, year, image, link, github, description, align } = req.body;
  try {
    const newProj = new Project({ name, year, image, link, github, description, align });
    await newProj.save();
    res.json(newProj);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   PUT api/portfolio/projects/:id
// @desc    Update a project (Admin only)
router.put("/projects/:id", auth, async (req, res) => {
  const { name, year, image, link, github, description, align } = req.body;
  try {
    const proj = await Project.findById(req.params.id);
    if (!proj) return res.status(404).json({ msg: "Project not found" });

    proj.name = name || proj.name;
    proj.year = year || proj.year;
    proj.image = image || proj.image;
    proj.link = link || proj.link;
    if (github !== undefined) proj.github = github;
    if (description !== undefined) proj.description = description;
    proj.align = align || proj.align;

    await proj.save();
    res.json(proj);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   DELETE api/portfolio/projects/:id
// @desc    Delete a project (Admin only)
router.delete("/projects/:id", auth, async (req, res) => {
  try {
    const proj = await Project.findById(req.params.id);
    if (!proj) return res.status(404).json({ msg: "Project not found" });

    await Project.findByIdAndDelete(req.params.id);
    res.json({ msg: "Project removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/portfolio/emailjs-keys
// @desc    Get decrypted EmailJS keys (Public)
router.get("/emailjs-keys", async (req, res) => {
  try {
    const serviceKey = await getDecryptedKey("VITE_SERVICE_KEY");
    const templateKey = await getDecryptedKey("VITE_TEMPLATE_KEY");
    const publicKey = await getDecryptedKey("VITE_PUBLIC_KEY");
    res.json({ serviceKey, templateKey, publicKey });
  } catch (err) {
    console.error("Error retrieving EmailJS keys:", err);
    res.status(500).send("Server error");
  }
});

export default router;
