import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Access API key from .env file
const BASE_URL = 'https://api.themoviedb.org/3'

async function getSingleMovieById(movieId){
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=production_companies`, {
    method: "GET"
  })
  return response.json()
}

async function getMainActorsById(movieId){
  const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`, {
    method: "GET"
  })
  const data = response.json()
  return data
}

async function getRelatedMovies(movieId){
  const response = await fetch(`${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`, {
    method: "GET"
  })
  const data = response.json()
  return data
}

async function getMovieTrailer(movieId){
  const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`, {
    method: "GET"
  })
  const data = response.json()
  return data
}


async function SingleMovies({ params: { singleMovieID } }) {
  const movie = await getSingleMovieById(singleMovieID)
  const productionCompanies = movie.production_companies || [];
    const productionCompanyLogos = productionCompanies.map(company => ({
      name: company.name,
      logo: `https://image.tmdb.org/t/p/original${company.logo_path}`
    }));
  const actors = await getMainActorsById(movie.id)
  const mainActors = actors.cast.slice(0, 5)
  const movies = await getRelatedMovies(movie.id)
  const relatedMovies = movies.results.slice(0, 5)
  const trailer = await getMovieTrailer(movie.id)
  const MovieTrailer = trailer.results.find(video => video.type === 'Trailer');


  const average = movie.vote_average
  const rating = average.toFixed(1)
  return (
    <div className="">
      {movie && movie.backdrop_path && (
        <div className="top-0 left-0 w-full h-[95vh] z-0">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            layout="fill"
            objectFit="cover"
            className="blur-sm"
          />
        </div>
      )}

      {/* Poster image */}
      <div className="container mx-auto w-3/4">
        <div className="grid lg:grid-cols-3 grid-cols-1 -mt-80 card glass">
          <div className="z-10 col-span-1">
            <div className="">
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={400}
                height={400}
                objectFit="cover"
                className=""
              />
            </div>
          </div>

          <div className="z-10 mt-20 col-span-2 lg:w-full lg:pr-10 ml-10  mb-10"><div className='w-3/4 '>
            <h1 className="text-4xl font-bold mb-5">{movie.title}</h1>
            <div className="flex lg:flex-row lg:justify-between flex-col mb-5">
              <div className="text-sm">
                {movie.release_date} | {movie.runtime} mins |{" "}
                {movie.spoken_languages.map((lang) => lang.iso_639_1)}
              </div>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <p className="ml-3">
                  {rating}/10 | {movie.vote_count} votes
                </p>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              {movie.genres.map((genre) => (
                <div key={genre.id} className="badge badge-outline rounded-2xl m-1">
                  {genre.name}
                </div>
              ))}
            </div>

            <div className="divider"></div>
            <div className='space-y-3'>
              <p><span className='font-semibold'>Overview: </span>{movie.overview}</p>
              <div className='flex justify-start'>
              {productionCompanyLogos.map(company => (
              <div key={company.name}>
                <div className='pr-5 py-5'>
                  <p className='mb-3 text-sm'>{company.name}</p>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={100}
                    height={100}
                    objectFit="cover"
                    className=""
                  />
                </div>
              </div>
            ))}
              </div>
            </div></div>
          </div>
        </div>
      </div>

      <section className="container mx-auto w-3/4 mt-16">
        <h1 className="text-4xl font-bold">Main Actors</h1>
        <hr className="h-px mt-4 mb-8 bg-gray-200 border-0 dark:bg-orange-700" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
        {mainActors.map((actor) => <div key={actor.id}>
          <div>
          <Image
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width={400}
                height={400}
                objectFit="cover"
                className=""
              />
          </div>
        </div>)}
        </div>
      </section>

      <section className="container mx-auto w-3/4 mt-16">
        <h1 className="text-4xl font-bold">Related Movies</h1>
        <hr className="h-px mt-4 mb-8 bg-gray-200 border-0 dark:bg-orange-700" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
        {relatedMovies.map((movie) => <div key={movie.id}>
          <Link href={`/movies/${movie.id}`}>
          <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.name}
                width={400}
                height={400}
                objectFit="cover"
                className=""
              />
          </Link>
        </div>)}
        </div>
      </section>

      <section className="container mx-auto w-3/4 my-16">
        <h1 className="text-4xl font-bold">Trailer</h1>
        <hr className="h-px mt-4 mb-8 bg-gray-200 border-0 dark:bg-orange-700" />
        <div>
          <iframe
          title="movie-trailer"
          className='w-full'
          height="415"
          src={`https://www.youtube.com/embed/${MovieTrailer.key}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        </div>
      </section>
    </div>
  )
}

export default SingleMovies
