"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import {
  fetchMoviesByGenre,
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchLatestMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
} from "@/services/apiService"
import MoviesCard from "@/components/MoviesCard/MoviesCard"
import Link from "next/link"

function Movies() {
  const [movies, setMovies] = useState([])
  const [moviesCategory, setMoviesCategory] = useState("")
  const searchParams = useSearchParams()

  useEffect(() => {
    async function fetchData() {
      try {
        let moviesData = []
        let categoryChoice = ""

        const category = searchParams.get("category")
        const genre = searchParams.get("genre")
        const id = searchParams.get("id")

        if (category) {
          switch (category) {
            case "top-rated":
              moviesData = await fetchTopRatedMovies()
              categoryChoice = "Top Rated"
              break
            case "popular":
              moviesData = await fetchPopularMovies()
              categoryChoice = "Popular"
              break
            case "latest":
              moviesData = await fetchLatestMovies()
              categoryChoice = "Latest"
              break
            case "now-playing":
              moviesData = await fetchNowPlayingMovies()
              categoryChoice = "Now Playing"
              break
            case "upcoming":
              moviesData = await fetchUpcomingMovies()
              categoryChoice = "Upcoming"
              break
            default:
              moviesData = await fetchTopRatedMovies()
              categoryChoice = "Top Rated"
              break
          }
        } else if (genre) {
          moviesData = await fetchMoviesByGenre(id)
          categoryChoice = `Genre: ${genre}`
        }

        setMovies(moviesData)
        setMoviesCategory(categoryChoice)
      } catch (error) {
        console.error("Error fetching movies:", error)
      }
    }

    fetchData()
  }, [searchParams])

  return (
    <div>
      <main className="container mx-auto w-3/4 my-16">
        {/* src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} */}
        <h1 className="text-4xl font-bold">{moviesCategory}</h1>
        <hr className="h-px mt-4 mb-8 bg-gray-200 border-0 dark:bg-orange-700" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
          {movies.map((movie) => {
            return(
                <MoviesCard key={movie.id} movie={movie}/> 
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Movies
