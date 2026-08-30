import express from "express";
import auth from "../middleware/auth.js";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();

// @route   POST api/messages
// @desc    Submit a contact message (Public)
router.post("/", async (req, res) => {
  const { from_name, from_email, message } = req.body;
  if (!from_name || !from_email || !message) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const newMessage = new ContactMessage({
      from_name,
      from_email,
      message
    });
    await newMessage.save();
    res.json({ success: true, msg: "Message saved successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/messages
// @desc    Get all contact messages (Admin only)
router.get("/", auth, async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   DELETE api/messages/:id
// @desc    Delete a contact message (Admin only)
router.delete("/:id", auth, async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ msg: "Message not found" });
    }
    await ContactMessage.findByIdAndDelete(req.params.id);
    res.json({ success: true, msg: "Message deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default router;
