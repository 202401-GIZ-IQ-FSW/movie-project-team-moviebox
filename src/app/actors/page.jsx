import React from "react"
import ActorCard from "@/components/ActorCard/ActorCard"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Access API key from .env file
const BASE_URL = 'https://api.themoviedb.org/3'

async function fetchAllActors(){
  const response = await fetch(`${BASE_URL}/person/popular?api_key=${API_KEY}`, {
    method: "GET"
  })
  return response.json()
}

async function Actors() {
  const actors = await fetchAllActors()
  const allActors = actors.results
  console.log(allActors)
  return (
    <main>
      <section className="container mx-auto w-3/4 my-16">
        <h1 className="text-4xl font-bold">Actors.</h1>
        <hr class="h-px mt-4 mb-8 bg-gray-200 border-0 dark:bg-orange-700" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
          {allActors.map((actor) => (
          <ActorCard key={actor.id} actor={actor}/>
        ))}
        </div>
        
      </section>
    </main>
  )
}

export default Actors
