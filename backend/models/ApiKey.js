import mongoose from "mongoose";

const ApiKeySchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: { type: String, required: true } // Encrypted value
}, { timestamps: true });

export default mongoose.model("ApiKey", ApiKeySchema);
