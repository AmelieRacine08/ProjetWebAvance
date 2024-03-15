import { connectToDB } from "../../../../../libs/connectionMongoDB";
import { Event } from "../../../../../libs/models";

export async function GET(req, res) {
  const { id } = params;
  connectToDB();

  const events = await Event.findOne({ _id: id });
  return NextResponse.json({ events }, { status: 200 });
}

export async function PUT(req, { params }) {
  const { id } = params;
  connectToDB();
  const {
    title: title,
    description: description,
    date: date,
    place: place,
    img: img,
    alt: alt,
  } = await req.json();

  const events = await Event.findByIdAndUpdate(id, {
    title,
    description,
    date,
    place,
    img,
    alt,
  });
  return NextResponse.json({ message: "Evenement modifie" }, { status: 200 });
}
