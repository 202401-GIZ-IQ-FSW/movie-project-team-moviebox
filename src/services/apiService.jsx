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

export async function fetchTopRatedMovies() {
  try {
    const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch top-rated movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    return [];
  }
}

export async function fetchPopularMovies() {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch popular movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
}

export async function fetchNowPlayingMovies() {
  try {
    const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch now playing movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    return [];
  }
}

export async function fetchUpcomingMovies() {
  try {
    const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch upcoming movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
}


export async function fetchMoviesByGenre(genreId) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`, );
    if (!response.ok) {
      throw new Error('Failed to fetch movies by genre');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies by genre:', error);
    return [];
  }
}

export async function fetchMoviesBySearchQuery(query){
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Failed to search for movies');
    }
    const data = await response.json();
    return data.results; // Assuming data.results contains an array of movie objects
  } catch (error) {
    console.error('Error searching for movies:', error);
    return [];
  }
}

export async function fetchActorsByQuery(query) {
  try {
    const response = await fetch(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Failed to search for actors');
    }
    const data = await response.json();
    return data.results; // Assuming data.results contains an array of actor objects
  } catch (error) {
    console.error('Error searching for actors:', error);
    return [];
  }
}

export async function fetchAllActors() {
  try {
    const response = await fetch(`${BASE_URL}/person/popular?api_key=${API_KEY}&page=1`);
    if (!response.ok) {
      throw new Error('Failed to fetch actors');
    }
    const data = await response.json();
    return data.results; // Assuming data.results contains an array of actor objects
  } catch (error) {
    console.error('Error fetching actors:', error);
    return [];
  }
}

export async function fetchActorDetails(actorId) {
  try {
    const response = await fetch(`${BASE_URL}/person/${actorId}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch actor details');
    }
    const actorDetails = await response.json();
    return actorDetails;
  } catch (error) {
    console.error('Error fetching actor details:', error);
    return null;
  }
}

