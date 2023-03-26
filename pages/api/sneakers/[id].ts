import dbConnect from "@/backend/config/dbConnect";
import Sneakers from "@/backend/models/sneakerModel";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const sneakers_data = await Sneakers.findById(id).lean();
        if (!sneakers_data) {
          return res.status(400).json({ message: "Something went wrong!" });
        }
        return res.status(200).json(sneakers_data);
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    default:
      return res.status(400).json({ success: false });

      break;
  }
}
