import { NextResponse } from "next/server";
import { connectToDB } from "../../../../libs/connectionMongodb";
import { Event } from "../../../../libs/models";

export async function GET(req, res){

    connectToDB();
    const events = await Event.find();
    return NextResponse.json({events});

}

export async function POST(req, res){

  //  if(req.methode === 'POST'){} ***Utiliser ce code si le nom de la fonction n'a pas le nom l'API (GET, POST, DELETE)
    try{

        connectToDB();
        const {title, description, date, place, img, alt} = await req.json();   

        await Event.create({title, description, date, place, img, alt})
       // const event = new Event({title, description, date, place, img, alt});  ** Autre methode pour creer un evenement
        // await event.save();

        return NextResponse.json({message : "Evenement créé"});

    }catch(error){
        console.log("Erreur lors de la creation d'un evenement", error)
    }
}

export async function DELETE(req, res){
   
    const id = req.nextURL.searchParams.get("id");
    connectToDB();
    await Event.findByIdAndDelete(id);
    return NextResponse.json({message : "Evenement supprimé"},{status:200});

}
