
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

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Access API key from .env file
const BASE_URL = 'https://api.themoviedb.org/3'

async function getMoviesByGenre(genreId){
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`,{
    method: "GET"
  });

  return response.json()
}
async function getLatestMovies(){
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`, {
    method: "GET"
  });
  return response.json()
}

async function getTopRatedMovies(){
  const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`, {
    method: "GET"
  });
  return response.json()
}

async function getPopularMovies(){
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`, {
    method: "GET"
  });
  return response.json()
}

async function getNowPlayingMovies(){
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`, {
    method: "GET"
  });
  return response.json()
}

async function getUpcomingMovies(){
  const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`, {
    method: "GET"
  });
  return response.json()
}

async function Movies({searchParams}) {
  let moviesData = []
  let categoryChoice = ""

  const category = searchParams.category
  const genre = searchParams.genre
  const id = searchParams.id

        if (category) {
          switch (category) {
            case "top-rated":
              moviesData = await getTopRatedMovies()
              categoryChoice = "Top Rated"
              break
            case "popular":
              moviesData = await getPopularMovies()
              categoryChoice = "Popular"
              break
            case "latest":
              moviesData = await getLatestMovies()
              categoryChoice = "Latest"
              break
            case "now-playing":
              moviesData = await getNowPlayingMovies()
              categoryChoice = "Now Playing"
              break
            case "upcoming":
              moviesData = await getUpcomingMovies()
              categoryChoice = "Upcoming"
              break
            default:
              moviesData = await getTopRatedMovies()
              categoryChoice = "Top Rated"
              break
          }
        } else if (genre) {
          moviesData = await getMoviesByGenre(id)
          categoryChoice = `Genre: ${genre}`
        }

        const movies = moviesData.results
  /* const [movies, setMovies] = useState([])
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
  }, [searchParams]) */

  return (
    <div>
      <main className="container mx-auto w-3/4 my-16">
        <h1 className="text-4xl font-bold">{categoryChoice}</h1>
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
