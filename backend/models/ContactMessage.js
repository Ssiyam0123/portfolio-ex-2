import mongoose from "mongoose";

const ContactMessageSchema = new mongoose.Schema({
  from_name: { type: String, required: true },
  from_email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("ContactMessage", ContactMessageSchema);
