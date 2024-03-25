"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  fetchMoviesByGenre,
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchLatestMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies
 } from '@/services/apiService';

 function Movies() {
  const [movies, setMovies] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchData() {
      try {
        let moviesData = [];

        const category = searchParams.get('category');
        const genre = searchParams.get('genre');
        const id = searchParams.get('id');


        if (category) {
          switch (category) {
            case 'top-rated':
              moviesData = await fetchTopRatedMovies();
              break;
            case 'popular':
              moviesData = await fetchPopularMovies();
              break;
            case 'latest':
              moviesData = await fetchLatestMovies();
              break;
            case 'now-playing':
              moviesData = await fetchNowPlayingMovies();
              break;
            case 'upcoming':
              moviesData = await fetchUpcomingMovies();
              break;
            default:
              moviesData = await fetchTopRatedMovies();
              break;
          }
        }else if (genre) {
          moviesData = await fetchMoviesByGenre(id);
        }

        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchData();
  }, [searchParams]);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;