import React from "react"
import Image from "next/image"
import Link from "next/link"

const Thumbnail = ({ movie }) => {
  // Check if movie object exists and if backdrop_path or poster_path is available
  if (!movie || (!movie.backdrop_path && !movie.poster_path)) {
    // Return a placeholder or null if movie data is not available
    return null
  }

  return (
    <Link href={`/movies/${movie.id}`}>
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 hover:scale-90">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title}
        layout="fill"
        objectFit="cover"
        className="rounded-sm object-cover md:rounded"
      />
    </div></Link>
  )
}

export default Thumbnail
