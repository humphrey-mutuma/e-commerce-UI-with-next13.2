import { Schema, model, models } from "mongoose";

// create a user schema
const colorSchema = new Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  selectedClass: { type: String, required: true },
});

export default models.Color || model("Color", colorSchema);
