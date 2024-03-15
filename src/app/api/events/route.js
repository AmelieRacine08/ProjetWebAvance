import { NextResponse } from "next/server";
import { connectToDB } from "../../../../libs/connectionMongoDB";
import { Event } from "../../../../libs/models";

export async function GET(req, res) {
  //return NextResponse.json({ message: "Hello" });
  // console.log(params);
  connectToDB();

  const events = await Event.find();
  return NextResponse.json({ events });
}

export async function POST(req, res) {
  try {
    connectToDB();
    const { title, description, date, place, img, alt } = await req.json();

    await Event.create({ title, description, date, place, img, alt });
    // const events = await Event.find();
    return NextResponse.json({ message: "Event created" });
  } catch (error) {
    console.log("Erreur lors de creastion d'un evenement", error);
  }
}

export async function DELETE(req, res) {
  const id = req.nextUrl.searchParams.get("id");
  connectToDB();
  await Event.findByIdAndDelete(id);
  return NextResponse.json({ message: "event deleted" }, { status: 200 });
}
