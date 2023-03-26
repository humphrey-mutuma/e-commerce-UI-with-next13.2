import dbConnect from "@/backend/config/dbConnect";
import Sneakers from "@/backend/models/sneakerModel";
import { sneakers } from "@/data";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const sneakers_data = await Sneakers.create(sneakers);
        if (!sneakers_data) {
          return res.status(400).json({ message: "Something went wrong!" });
        }
        return res.status(201).json({ data: sneakers_data });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    default:
      return res.status(400).json({ success: false });

      break;
  }
}
