import React from "react"
import Image from "next/image"
import Link from "next/link"

const MoviesCard = ({ movie }) => {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div key={movie.id} className="card w-50">
        <div class="da relative flex flex-col justify-center overflow-hidden bg-gray-50">
          <div class="absolute inset-0 bg-center dark:bg-black"></div>
          <div class="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div class="hover:cursor-pointer z-10 overflow-hidden rounded-xl border border-gray-200 opacity-60 group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
                class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100"
                alt={movie.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 ">
              <h1 class="font-serif text-md font-bold text-white shadow-xl">
                {movie.title}
              </h1>
              <h1 class="text-sm font-light text-gray-200 shadow-xl">
                Rate: {movie.vote_average}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MoviesCard
