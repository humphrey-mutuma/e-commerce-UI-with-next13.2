import { Schema, model, models } from "mongoose";

// create a user schema
const sizeSchema = new Schema({
  name: { type: String, required: true },
  inStock: { type: Boolean, required: true },
});

export default models.Size || model("Size", sizeSchema);
