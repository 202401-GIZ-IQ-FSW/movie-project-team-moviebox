const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Access API key from .env file
const BASE_URL = 'https://api.themoviedb.org/3'


 export async function fetchGenres() {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error("Failed to fetch genres");
    
    const { genres } = await response.json();
    return genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
} 

export async function fetchLatestMovies() {
  try {
    const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch latest movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching latest movies:', error);
    return [];
  }
}

export async function fetchRandomMovieFromLatest() {
  try {
    const latestMovies = await fetchLatestMovies();
    if (latestMovies.length === 0) {
      throw new Error('No movies available');
    }
    const randomIndex = Math.floor(Math.random() * latestMovies.length);
    return latestMovies[randomIndex];
  } catch (error) {
    console.error('Error fetching random movie from latest:', error);
    return null;
  }
}

