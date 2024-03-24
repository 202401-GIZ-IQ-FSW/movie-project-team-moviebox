"use client"
import React, { useRef, useState } from "react"
import Thumbnail from "../Thumbnail/Thumbnail"

const Row = ({ movies, title }) => {
  const rowRef = useRef(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction) => {
    setIsMoved(true)

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <div className="lg:h-60 h-40 space-y-0.5 md:space-y-2 lg:space-y-3">
      <h2 className="w-56 cursor-pointer text-lg font-semibold transition duration-200 md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <div
          onClick={() => handleClick("left")}
          className={`absolute top-1/2 -translate-y-1/2 left-2 z-40 m-auto cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && "hidden"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <div
          ref={rowRef}
          className="flex scrollbar-hide items-center overflow-x-auto space-x-0.5 md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <div
          onClick={() => handleClick("right")}
          className="absolute top-1/2 -translate-y-1/2 right-2 z-40 m-auto cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Row
