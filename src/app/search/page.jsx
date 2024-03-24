"use client"
import React, { useState, useEffect } from "react"
import { fetchMoviesBySearchQuery, fetchActorsByQuery } from "@/services/apiService"
import { useSearchParams } from "next/navigation"

function SearchResults() {
  const [movies, setMovies] = useState([])
  const [actors, setActors] = useState([])
  const searchParams = useSearchParams()
  const query = searchParams.get("q")

  useEffect(() => {
    const fetchData = async () => {
      if (!query.trim()) {
        setMovies([])
        setActors([])
        return
      }

      try {
        // Fetch movies based on the search query
        const movieResults = await fetchMoviesBySearchQuery(query)
        setMovies(movieResults)
      } catch (error) {
        console.error("Error searching for movies:", error)
        setMovies([])
      }

      try {
        // Fetch actors based on the search query
        const actorResults = await fetchActorsByQuery(query)
        setActors(actorResults)
      } catch (error) {
        console.error("Error searching for actors:", error)
        setActors([])
      }
    }

    fetchData()
  }, [query])

  return (
    <div>
      <div>
        <h2>Movies</h2>
        {movies.length > 0 ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        ) : (
          <p>No movies found</p>
        )}

        <h2>Actors</h2>
        {actors.length > 0 ? (
          <ul>
            {actors.map((actor) => (
              <li key={actor.id}>{actor.name}</li>
            ))}
          </ul>
        ) : (
          <p>No actors found</p>
        )}
      </div>
    </div>
  )
}

export default SearchResults
