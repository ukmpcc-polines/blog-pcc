// Library
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";

// Components
import useDarkMode from "../featured/useDarkMode";

// Fetch API
import useAxios from "../../utils/useAxios";

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();

  const { posts: categories } = useAxios(
    `${process.env.REACT_APP_API_URL}/categories`
  );
  const [keyword, setKeyword] = useState("");
  const [offCanvas, setOffCanvas] = useState(false);
  const [search, setSearch] = useState(false);

  let history = useHistory();

  function doSearch(e) {
    e.preventDefault();
    history.push({
      pathname: "/search",
      search: `?title=${keyword}`,
    });
  }

  return (
    <nav className="h-24 py-6 font-patrick bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white overflow-hidden relative transition-all duration-500">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="w-3/12 flex justify-center md:hidden">
            <button
              onClick={() => {
                setOffCanvas(!offCanvas);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current text-black dark:text-white"
              >
                <g opacity="0.4">
                  <path
                    d="M3 12H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="w-6/12 flex justify-center md:w-2/12 md:justify-start">
            <Link to="/" className="hover:underline text-xl">
              UKM PCC
            </Link>
          </div>
          <div className="w-3/12 flex justify-center md:hidden">
            <button
              onClick={() => {
                setSearch(!search);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current text-black dark:text-white"
              >
                <g opacity="0.4">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div
            className={` w-full h-full bg-gray-50 z-10 dark:bg-gray-800 fixed left-0 py-5 px-10 md:w-6/12 md:static md:p-0 transition-all duration-500
            ${offCanvas ? "top-0" : `-top-full`}
            `}
          >
            <button
              onClick={() => {
                setOffCanvas(!offCanvas);
              }}
              className="absolute top-5 right-5 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col py-10 tracking-wide space-y-4 md:space-x-10 md:space-y-0 md:flex-row md:py-2 md:items-center text-lg z-50">
              <li className="text-gray-400 underline uppercase text-lg md:hidden">
                Kategori
              </li>
              {categories.map((category, key) => {
                return (
                  <li key={key}>
                    <Link
                      className="hover:underline capitalize"
                      to={`/category/${category.name}`}
                      onClick={() => setOffCanvas(!offCanvas)}
                    >
                      {category.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={`absolute w-full px-5 transition-all duration-500 md:w-4/12 md:static md:px-0 md:flex md:justify-center md:space-x-4 ${
              search ? `right-0` : `-right-full`
            }`}
          >
            <button
              onClick={() => {
                setSearch(!search);
              }}
              className="absolute top-2 right-7 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <form onSubmit={doSearch}>
              <input
                className="md:rounded-full w-full rounded-lg bg-gray-200 placeholder-gray-800 dark:bg-gray-700 dark:placeholder-gray-200  px-2 py-2 icon-search pl-8"
                type="text"
                name="search"
                id="search"
                placeholder="Search Title..."
                autoComplete="off"
                required
                onChange={(e) => setKeyword(e.target.value)}
              />
            </form>
            <span
              onClick={() => setTheme(colorTheme)}
              className="hidden md:block cursor-pointer animate-pulse"
            >
              {colorTheme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
