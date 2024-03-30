import React from 'react'
import Link from 'next/link'
import SearchBar from '../SearchBar/SearchBar'

function SideBar({genres}) {
  return (
    <>
      <div className="drawer-side ">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-black flex flex-col overflow-y-auto">
            {/* Sidebar content here */}
            <div>
            <SearchBar />
              
            <li className="mt-4"><Link href="/">Home</Link></li>
            <li><Link href="/actors">Actors</Link></li>
            <li>
              <details open>
                <summary><Link href="/movies">Movies</Link></summary>
                <ul>
                <li><Link href="/movies?category=top-rated">Top Rated</Link></li>
                <li><Link href="/movies?category=popular">Popular</Link></li>
                <li><Link href="/movies?category=latest">Latest</Link></li>
                <li><Link href="/movies?category=now-playing">Now Playing</Link></li>
                <li><Link href="/movies?category=upcoming">Upcoming</Link></li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary><Link href="/movies">Genre</Link></summary>
                <ul>
                  {genres.map((genre) => (
                    <li key={genre.id}>
                      <Link href={`/movies?genre=${genre.name}&id=${genre.id}`}>{genre.name}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            </div>
          </ul>
        </div>
    </>
  )
}

export default SideBar
