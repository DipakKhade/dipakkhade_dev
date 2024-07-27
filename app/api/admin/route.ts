import connecttoMongoDB from "../../../lib/mongodb";
import { NextResponse, NextRequest } from "next/server";
import User from "../../models/users";

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password } = await req.json();

  if (
    email === process.env.ADMINEMAIL &&
    password === process.env.ADMINPASSWORD
  ) {
    await connecttoMongoDB();

    const received = await User.find({});

    return NextResponse.json({
      success: true,
      usermessages: received,
    });
  }

  return NextResponse.json({ success: false });
}
