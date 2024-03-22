"use client"

import React from "react"
import logo from "../../../public/images/logo.png"
import Image from "next/image"
import { fetchGenres } from "@/services/apiService"
import { useState, useEffect } from "react"
import Link from "next/link"
import SearchBar from "../SearchBar/SearchBar"
import SideBar from "../SideBar/SideBar"

function Navbar() {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    async function loadGenres() {
      const genresData = await fetchGenres() // Fetch genres using the function from apiservice.js
      setGenres(genresData)
    }

    loadGenres()
  }, [])

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="navbar-start">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2">
                <Link href="/">
                  <Image src={logo} width={160} height={130} alt="logo image" />
                </Link>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <details>
                    <summary>Movies</summary>
                    <ul className="p-2 bg-base-200">
                      <li>
                        <a>Top Rate</a>
                      </li>
                      <li>
                        <a>Popular</a>
                      </li>
                      <li>
                        <a>Latest</a>
                      </li>
                      <li>
                        <a>Now Playing</a>
                      </li>
                      <li>
                        <a>Upcoming</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Genre</summary>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-80 max-h-80 overflow-y-auto">
                      {genres.map((genre) => (
                        <li key={genre.id}>
                          <a>{genre.name}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/actors">Actors</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
              <SearchBar />
            </div>
          </div>
          {/* Page content here */}
        </div>
        <SideBar genres={genres} />
      </div>
    </>
  )
}

export default Navbar
