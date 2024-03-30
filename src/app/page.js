"use client"
import { useState, useEffect } from 'react';
import Banner from '@/components/Banner/Banner';
import Row from '@/components/Row/Row';
import {
  fetchLatestMovies, 
  fetchRandomMovieFromLatest,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  fetchPopularMovies
} from '@/services/apiService'


const Page = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);


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

  useEffect(() => {
    fetchTopRatedMovies()
      .then(movies => setTopRatedMovies(movies))
      .catch(error => console.error('Error fetching top-rated movies:', error));
  }, []);

  useEffect(() => {
    fetchNowPlayingMovies()
      .then(movies => setNowPlayingMovies(movies))
      .catch(error => console.error('Error fetching now playing movies:', error));
  }, []);

  useEffect(() => {
    fetchUpcomingMovies() // Fetch upcoming movies
      .then(movies => setUpcomingMovies(movies))
      .catch(error => console.error('Error fetching upcoming movies:', error));
  }, []);

  useEffect(() => {
    fetchPopularMovies()
      .then(data => setPopularMovies(data))
      .catch(error => console.error('Error fetching popular movies:', error));
  }, []);

  return (
    <div>
      <main>
        <Banner latestMovies={latestMovies} randomMovie={randomMovie} />
        <section className='mx-10'>
          <h1 className='text-4xl font-bold'>Welcome.</h1>
          <h2 className='text-lg font-semibold mt-2'>Millions of movies, TV shows and people to discover. Explore now.</h2>
          <hr className="h-px mt-4 mb-8 bg-gray-200 border-0 dark:bg-orange-700" />
          <Row title="Latest Movies" movies={latestMovies} />
          <Row title="Top Rated Movies" movies={topRatedMovies} />
          <Row title="Popular Movies" movies={popularMovies} />
          <Row title="Upcoming Movies" movies={upcomingMovies} />
        </section>
      </main>
    </div>
  );
}

export default Page;
