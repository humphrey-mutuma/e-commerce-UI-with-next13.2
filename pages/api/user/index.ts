import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      // @route   GET /user
      // @desc    Get all users properties
      // @access  Public

      try {
        return res.status(200).json({ data: "Hello there" });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    default:
      return res.status(400).json({ success: false });

      break;
  }
}
