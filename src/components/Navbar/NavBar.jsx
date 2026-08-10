import "./NavBar.css";
import { useState, useRef, useEffect } from "react";

function NavBar() {
  const [searchBar, setSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchBar) {
      searchRef.current?.focus();
    }
  }, [searchBar]);

  return (
    <div>
      <div className="navbar">
        <div className="navbarleft">
          <a href="/">
            <img
              src="./src/assets/netflix.svg"
              className="netfliximg"
              alt="Netflix"
            />
          </a>
        </div>

        <div className="navbarright">
          <div className="navbarmenu">
            <div className="navbarmenuitems">
              <div className="home">
                <a href="./">
                  <span>Home</span>
                </a>
              </div>
              <div>
                <a href="./shows">
                  <span>Shows</span>
                </a>
              </div>
              <div>
                <a href="./movies">
                  <span>Movies</span>
                </a>
              </div>
              <div>
                <a href="./games">
                  <span>Games</span>
                </a>
              </div>
              <div>
                <a href="./newspopular">
                  <span>News & Popular</span>
                </a>
              </div>
              <div>
                <a href="./mylist">
                  <span>My List</span>
                </a>
              </div>
              <div>
                <a href="./browsebylanguage">
                  <span>Browse By Language</span>
                </a>
              </div>
            </div>
          </div>
          <div className="searchnavatar">
            <div className="search">
              {!searchBar && (
                <button onClick={() => setSearchBar(true)}>
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="MagnifyingGlassMedium"
                    data-icon-id=":R1al6pjal4iaq:"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    role="img"
                    aria-label="Search"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.38 7.03a9 9 0 1 1 1.41-1.41l5.68 5.67-1.42 1.42z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              )}
              <div className={`searchbar ${searchBar ? "active" : ""}`}>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="MagnifyingGlassMedium"
                    data-icon-id=":r93:"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img"
                    aria-label="Search"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.38 7.03a9 9 0 1 1 1.41-1.41l5.68 5.67-1.42 1.42z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  ref={searchRef}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onBlur={() => {
                    if (searchText === "") {
                      setSearchBar(false);
                    }
                  }}
                  type="text"
                  placeholder="Titles, people, genres"
                  autoFocus
                />

                {searchText !== "" && (
                  <button
                    className="searchClear"
                    onClick={() => {
                      setSearchText("");
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      data-icon="CircleXFillMedium"
                      data-icon-id=":r81:"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      role="img"
                      aria-label="Clear input"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12M6.293 7.707 10.586 12l-4.293 4.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L13.414 12l4.293-4.293-1.414-1.414L12 10.586 7.707 6.293z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div className="notification">
              <button>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  data-icon="BellMedium"
                  data-icon-id=":Rlal7ajal4iaq:"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  role="img"
                  aria-label="Notifications"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M13 4.07A7 7 0 0 1 19 11v4.25q1.58.12 3.1.28l-.2 2a93 93 0 0 0-19.8 0l-.2-2q1.52-.15 3.1-.28V11a7 7 0 0 1 6-6.93V2h2zm4 11.06V11a5 5 0 0 0-10 0v4.13a97 97 0 0 1 10 0m-8.37 4.24C8.66 20.52 10.15 22 12 22s3.34-1.48 3.37-2.63c.01-.22-.2-.37-.42-.37h-5.9c-.23 0-.43.15-.42.37"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="kids">
              <button>
                <img
                  className="childrenlogo"
                  src="./src/assets/kids logo.png"
                  alt=""
                />
                <span className="children">Children</span>
              </button>
            </div>
            <div className="user">
              <div className="avatar">
                <button>
                  <img
                    className="userlogo"
                    src="./src/assets/user logo.png"
                    alt=""
                  />
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="moreuser"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
