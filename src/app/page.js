// page.jsx
"use client"
import { useState, useEffect } from 'react';
import {fetchLatestMovies, fetchRandomMovieFromLatest} from '@/services/apiService'

const Page = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    fetchLatestMovies()
      .then(data => setLatestMovies(data))
      .catch(error => console.error('Error fetching latest movies:', error));
  }, []);

  useEffect(() => {
    if (latestMovies.length > 0) {
      fetchRandomMovieFromLatest()
        .then(movie => setRandomMovie(movie))
        .catch(error => console.error('Error fetching random movie:', error));
    }
  }, [latestMovies]);

  return (
    <div>
      <h1>Latest Movies</h1>
      {latestMovies && latestMovies.length > 0 ? (
        <ul>
        {latestMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      ) : (
        <p>Loading...</p>
      )}
      <h1>Latest Movies</h1>
      {latestMovies && latestMovies.length > 0 ? (
        <ul>
        {latestMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      ) : (
        <p>Loading...</p>
      )}

<h1>Random Movie from Latest</h1>
      {randomMovie ? (
        <div>
          <h2>{randomMovie.title}</h2>
          <p>{randomMovie.overview}</p>
        </div>
      ) : (
        <p>Loading random movie...</p>
      )}
    </div>
  );
}

export default Page;
