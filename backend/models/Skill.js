import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  iconName: { type: String, required: true }, // Name of the React icon, e.g., 'FaHtml5'
  category: { type: String, default: "core" }
}, { timestamps: true });

export default mongoose.model("Skill", SkillSchema);
