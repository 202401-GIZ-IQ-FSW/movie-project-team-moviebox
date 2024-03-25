import React from "react"
import ActorCard from "@/components/ActorCard/ActorCard"

function Actors() {
  return (
      <main>
        <section className="mx-10 my-5">
          <h1 className="text-4xl font-bold">Actors.</h1>
          <hr class="h-px mt-4 mb-8 bg-gray-200 border-0 dark:bg-orange-700" />

          <ActorCard/>

        </section>
      </main>
  )
}

export default Actors
