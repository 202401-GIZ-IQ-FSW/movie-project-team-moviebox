const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Access API key from .env file

export async function fetchGenres() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error("Failed to fetch genres");
    
    const { genres } = await response.json();
    return genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
}