import { NextResponse } from "next/server";
import User from "../../models/users";
import connecttoMongoDB from "../../../lib/mongodb";


export async function POST(req) {
  const {email , subject , message } = await req.json();

  await connecttoMongoDB();

  await User.create({ email , subject , message});

  return NextResponse.json({ massage: "message sent succesfully" }, { status: 200 });
}



