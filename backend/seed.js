import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import Admin from "./models/Admin.js";
import Profile from "./models/Profile.js";
import Skill from "./models/Skill.js";
import Experience from "./models/Experience.js";
import Project from "./models/Project.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";

const skills = [
  { name: "HTML", iconName: "FaHtml5", category: "frontend" },
  { name: "CSS", iconName: "FaCss3Alt", category: "frontend" },
  { name: "TailwindCSS", iconName: "RiTailwindCssFill", category: "frontend" },
  { name: "JavaScript", iconName: "IoLogoJavascript", category: "frontend" },
  { name: "ReactJS", iconName: "FaReact", category: "frontend" },
  { name: "NodeJS", iconName: "FaNodeJs", category: "backend" },
  { name: "ExpressJS", iconName: "SiExpress", category: "backend" },
  { name: "MongoDB", iconName: "SiMongodb", category: "backend" },
  { name: "NextJS", iconName: "SiNextdotjs", category: "frontend" },
  { name: "Git", iconName: "FaGitAlt", category: "tools" },
  { name: "GitHub", iconName: "FaGithub", category: "tools" }
];

const experiences = [
  {
    job: "Front-End Developer",
    company: "Alex Apps",
    date: "2022 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience."
    ]
  },
  {
    job: "Course Instructor",
    company: "Nucamp",
    date: "2023 - Present",
    responsibilities: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey."
    ]
  },
  {
    job: "Course Instructor",
    company: "Sprints",
    date: "2024 - Present",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies."
    ]
  }
];

const projects = [
  {
    name: "Clothing E-Commerce",
    year: "2025",
    description: "A modern, full-featured e-commerce platform for fashion with product filtering, cart management, and seamless checkout experience.",
    align: "left",
    image: "/images/clothing-ecommerce.jpg",
    link: "https://github.com",
    github: "https://github.com"
  },
  {
    name: "Chat Z",
    year: "2025",
    description: "A real-time messaging web application featuring instant chat rooms, active user status, and a sleek, responsive chat interface.",
    align: "right",
    image: "/images/chatz-app.jpg",
    link: "https://github.com",
    github: "https://github.com"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB for seeding...");

    // Clear existing data
    await Admin.deleteMany({});
    await Profile.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});
    await Project.deleteMany({});

    // 1. Create Admin
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash("admin123", salt);
    const admin = new Admin({
      username: "admin",
      passwordHash
    });
    await admin.save();
    console.log("Admin seeded successfully (User: admin, Pass: admin123)");

    // 2. Create Profile
    const profile = new Profile({
      name: "Esthiyak Ahmmed",
      role: "Frontend Web Developer",
      bio: "Transforming complex ideas into pixel-perfect, interactive web experiences with clean architecture and modern UI design.",
      about: "I am a dedicated Frontend & Full-Stack Engineer focused on building high-performance, modern web applications. Specialized in React.js, Next.js, Node.js, and MongoDB, I transform complex business requirements into intuitive, lightning-fast user interfaces. I take pride in writing clean, maintainable code, optimizing web performance, and delivering seamless digital experiences."
    });
    await profile.save();
    console.log("Profile seeded successfully");

    // 3. Create Skills
    await Skill.insertMany(skills);
    console.log("Skills seeded successfully");

    // 4. Create Experiences
    await Experience.insertMany(experiences);
    console.log("Experiences seeded successfully");

    // 5. Create Projects
    await Project.insertMany(projects);
    console.log("Projects seeded successfully");

    console.log("Database Seeding Completed!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedDB();
