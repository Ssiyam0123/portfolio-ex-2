import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  job: { type: String, required: true },
  company: { type: String, required: true },
  date: { type: String, required: true },
  responsibilities: [{ type: String }]
}, { timestamps: true });

export default mongoose.model("Experience", ExperienceSchema);
