import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  shortcode: String,
  longUrl: String,
  createdAt: { type: Date, default: Date.now() },
});

export const Url = mongoose.model("url", userSchema);
