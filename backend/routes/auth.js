import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// @route   POST api/auth/login
// @desc    Authenticate admin & get token
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = { id: admin._id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "1d" },
      (err, token) => {
        if (err) throw err;
        res.json({ token, admin: { id: admin._id, username: admin.username } });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/auth/verify
// @desc    Verify current token
router.get("/verify", auth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.adminId).select("-passwordHash");
    res.json({ valid: true, admin });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default router;
