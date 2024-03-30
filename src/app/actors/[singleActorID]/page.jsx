import React from "react";
import EmmaImg from "@/components/OIP.png";
import Image from "next/image";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Access API key from .env file
const BASE_URL = 'https://api.themoviedb.org/3'

async function getActorDetailsById(actorId){
  const response = await fetch(`${BASE_URL}/person/${actorId}?api_key=${API_KEY}`, {
    method: "GET"
  })
  return response.json()
}

export default async function SingleActor({ params: { singleActorID } }) {
  const actor = await getActorDetailsById(singleActorID)
  const gender = actor.gender; // Gender of the actor (1 for female, 2 for male, and 0 for not specified)
  
  // Map numeric gender to string representation
  let genderString;
  switch (gender) {
    case 1:
      genderString = "Female";
      break;
    case 2:
      genderString = "Male";
      break;
    default:
      genderString = "Not specified";
  }
  return (
    <>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content md:flex-row">
          <Image
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
            width={400}
            height={400}
            objectFit="cover"
            className=""
          />
          <div className="m-5">
            <h1 className="text-5xl font-bold">{actor.name}</h1>
            <p className="max-w-screen-md py-6">
              Biography: {actor.biography}
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>Gender: {genderString}</li>
              <li>Birthday: {actor.birthday}</li>
              <li>Popularity: {actor.popularity}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}