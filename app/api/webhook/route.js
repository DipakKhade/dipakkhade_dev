import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("this is req----------", req);

  return NextResponse.json(
    { massage: "message sent succesfully" },
    { status: 200 },
  );
}
