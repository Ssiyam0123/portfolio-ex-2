import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, default: "#" },
  github: { type: String, default: "#" },
  description: { type: String, default: "" },
  align: { type: String, default: "left" }
}, { timestamps: true });

export default mongoose.model("Project", ProjectSchema);
