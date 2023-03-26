import { Schema, model, models } from "mongoose";

// create a user schema
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

export default models.User || model("User", userSchema);
