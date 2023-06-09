import { Schema, model, models } from "mongoose";

// create a user schema
const sneakerSchema = new Schema(
  {
    // addedBy: {
    //   type: Schema.Types.ObjectId,
    //   required: [true, "user is required!"],
    //   ref: "User",
    // },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    highlights: { type: [String], required: true },
    details: {
      material: { type: String, required: true },
      sole: { type: String, required: true },
      closure: { type: String, required: true },
      origin: { type: String, required: true },
    },
    images: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

export default models.Sneaker || model("Sneaker", sneakerSchema);
