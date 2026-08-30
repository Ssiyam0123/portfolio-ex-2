import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";
const NEW_PASSWORD = "admin123";

async function resetAdminPassword() {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(MONGODB_URI);
    
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(NEW_PASSWORD, salt);
    
    // Find or create admin user
    const admin = await Admin.findOneAndUpdate(
      { username: "admin" },
      { username: "admin", passwordHash },
      { upsert: true, new: true }
    );
    
    console.log(`\n=========================================`);
    console.log(`✅ Admin password reset successful!`);
    console.log(`   Username: admin`);
    console.log(`   Password: ${NEW_PASSWORD}`);
    console.log(`=========================================\n`);
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Reset failed:", error);
    process.exit(1);
  }
}

resetAdminPassword();
