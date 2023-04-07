import User from "@/backend/models/userModel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      // @route   GET /user
      // @desc    Get all users properties
      // @access  Public

      try {
        const user = await User.findById(id);
        if (!user) {
          return res.status(400).json({ message: "Something went wrong!" });
        }
        return res.status(200).json({ data: user });
      } catch (error) {
        return res.status(400).json({ message: "Something went wrong!" });
      }
      break;

    default:
      return res.status(400).json({ message: "Something went wrong!" });

      break;
  }
}
