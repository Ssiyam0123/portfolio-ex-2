import ApiKey from "../models/ApiKey.js";
import { decrypt } from "./crypto.js";

/**
 * Dynamically resolves a key from the MongoDB ApiKey collection.
 * Falls back to process.env if not found or empty.
 * @param {string} keyName The name of the API key
 * @returns {Promise<string>} The decrypted value of the key
 */
export async function getDecryptedKey(keyName) {
  try {
    const record = await ApiKey.findOne({ key: keyName });
    if (record && record.value) {
      const decryptedVal = decrypt(record.value);
      if (decryptedVal) return decryptedVal;
    }
  } catch (error) {
    console.error(`Error resolving ApiKey for ${keyName}:`, error);
  }

  // Fallback to process.env
  return process.env[keyName] || "";
}
