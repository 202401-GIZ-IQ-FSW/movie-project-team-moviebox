import React from 'react'
import Link from 'next/link'
import SearchBar from '../SearchBar/SearchBar'

function SideBar({genres}) {
  return (
    <>
      <div className="drawer-side ">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 flex flex-col overflow-y-auto">
            {/* Sidebar content here */}
            <div>
            <SearchBar />
              
            <li className="mt-4"><Link href="/">Home</Link></li>
            <li><Link href="/actors">Actors</Link></li>
            <li>
              <details open>
                <summary><Link href="/movies">Movies</Link></summary>
                <ul>
                <li><a>Top Rate</a></li>
                <li><a>Popular</a></li>
                <li><a>Latest</a></li>
                <li><a>Now Playing</a></li>
                <li><a>Upcoming</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary><Link href="/movies">Genre</Link></summary>
                <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>
                      <a>{genre.name}</a>
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
