import crypto from "crypto";

const ALGORITHM = "aes-256-cbc";
const IV_LENGTH = 16; // AES IV size is always 16 bytes

// Derive a 32-byte key from the JWT_SECRET using SHA-256
const getEncryptionKey = () => {
  const secret = process.env.JWT_SECRET || "fallback_secret_key_123_portfolio";
  return crypto.createHash("sha256").update(secret).digest();
};

// Encrypt plain text to IV + EncryptedHex format
export function encrypt(text) {
  if (!text) return "";
  try {
    const iv = crypto.randomBytes(IV_LENGTH);
    const key = getEncryptionKey();
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
    
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    
    // Format: iv:encryptedText
    return `${iv.toString("hex")}:${encrypted}`;
  } catch (error) {
    console.error("Encryption error:", error);
    throw new Error("Encryption failed");
  }
}

// Decrypt IV + EncryptedHex format back to plain text
export function decrypt(text) {
  if (!text) return "";
  try {
    const parts = text.split(":");
    if (parts.length !== 2) {
      throw new Error("Invalid encrypted format");
    }
    
    const iv = Buffer.from(parts[0], "hex");
    const encryptedText = Buffer.from(parts[1], "hex");
    const key = getEncryptionKey();
    
    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");
    
    return decrypted;
  } catch (error) {
    console.error("Decryption error:", error);
    return ""; // Return empty string or handle fallback safely
  }
}
