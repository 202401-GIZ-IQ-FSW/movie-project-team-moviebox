import React from "react"
import Image from "next/image"
import Link from "next/link"

const Banner = ({ randomMovie }) => {
  return (
    <div>
      <div className="top-0 left-0 -z-10 h-[95vh] w-full">
        {randomMovie && randomMovie.backdrop_path && (
          <Image
            src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
            alt={randomMovie.title}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      {randomMovie && ( // Ensure randomMovie is not null
        <div className="drop-shadow-md space-y-2 py-16 md:space-y-4 absolute lg:top-1/2 top-3/4 left-4 transform -translate-y-1/2 text-left lg:pl-16 ">
          <h1 className="[text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-white text-2xl md:text-4xl lg:text-7xl font-bold">
            {randomMovie.title || randomMovie.name || randomMovie.original_name}
          </h1>
          <p className="[text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] max-w-sm text-sm md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl ">
            {randomMovie.overview}
          </p>
          <div className="space-x-3 ">
            <button className="btn glass bg-red-800">Play</button>
            <Link href={`/movies/${randomMovie.id}`}><button className="btn btn-neutral">Discover</button></Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Banner
