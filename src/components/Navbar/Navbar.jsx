"use client"

import React from "react"
import logo from "../../../public/images/logo.png"
import Image from "next/image"
import { fetchGenres } from "@/services/apiService"
import { useState, useEffect } from "react"
import Link from "next/link"

function Navbar() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function loadGenres() {
      const genresData = await fetchGenres(); // Fetch genres using the function from apiservice.js
      setGenres(genresData);
    }

    loadGenres();
  }, []);

  return (
    <>
      <div className="navbar bg-base-100 py-4 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-base-200 rounded-box dropdown-content w-52 max-h-fit overflow-y-auto"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a>Movies</a>
                <ul className="p-2">
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
              </li>
              <li>
                <a>Genre</a>
                <ul className="p-2">
                {genres.map((genre) => (
                    <li key={genre.id}>
                      <a>{genre.name}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
              <Link href="/actors">Actors</Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <Image src={logo} width={160} height={130} alt="logo image" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
        <div className="navbar-end">
          <label className="input input-bordered flex items-center ">
            <input
              type="text"
              className="grow w-full max-w-xs"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
    </>
  )
}

export default Navbar
