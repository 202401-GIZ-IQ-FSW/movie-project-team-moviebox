import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = async () => {
    router.push(`/search?q=${searchQuery}`);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <label className="input input-bordered rounded-none flex items-center bg-transparent border-2 border-x-0 border-t-0">
              <input
                type="text"
                className="grow w-full max-w-xs"
                placeholder="Search"
                value={searchQuery}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
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
    </>
  )
}

export default SearchBar
