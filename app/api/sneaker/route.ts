import dbConnect from "@/backend/config/dbConnect";
import Sneakers from "@/backend/models/sneakerModel";
import { sneakers } from "@/data";


export async function POST(request: Request, response: Response) {
  await dbConnect();
  try {
    const sneakers_data = await Sneakers.create(sneakers);
    if (!sneakers_data) {
      return response.status(400).json({ message: "Something went wrong!" });
    }
  } catch (error) {
    console.log(error);
  }
}
