import { fetchMoviesBySearchQuery, fetchActorsByQuery } from "@/services/apiService"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import ActorCard from '@/components/ActorCard/ActorCard'
import Image from "next/image"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Access API key from .env file
const BASE_URL = 'https://api.themoviedb.org/3'

async function getMoviesBySearchQuery(query){
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`, {
    method: "GET"
  });
  return response.json()
}

async function getActorsByQuery(query){
  const response = await fetch(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(query)}`, {
    method: "GET"
  });
  return response.json()
}

async function SearchResults({searchParams}) {
  const query = searchParams.q
  const getMovies = await getMoviesBySearchQuery(query)
  const movies = getMovies.results
  const actors = await fetchActorsByQuery(query)

  /* const [movies, setMovies] = useState([])
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
  }, [query]) */

  return (
    <div>
      <div className="container mx-auto w-3/4 my-16">
        <h1 className="text-4xl font-bold">Movies</h1>
        <hr className="h-px mt-4 mb-8 bg-gray-200 border-0 dark:bg-orange-700" />
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {movies.map((movie) => (
              <div key={movie.id}>
                <Link href={`/movies/${movie.id}`}>
                  <div className="flex flex-wrap gap-5 items-center justify-center ">
                  <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class="h-90 w-60">
          <Image
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            width={400}
            height={400}
            alt="Img"
          />
        </div>
                  </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No movies found</p>
        )}
        <div></div>
        <h1 className="text-4xl font-bold mt-10">Actors</h1>
        <hr className="h-px mt-4 mb-8 bg-gray-200 border-0 dark:bg-orange-700" />
        {actors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {actors.map((actor) => (
              <ActorCard key={actor.id} actor={actor} />
            ))}
          </div>
        ) : (
          <p>No actors found</p>
        )}
      </div>
    </div>
  )
}

export default SearchResults
