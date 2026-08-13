import "./NavBar.css";
import netflix from "../../assets/netflix.svg";
import searchIcon from "../../assets/greatstack/search_icon.svg";
import bellIcon from "../../assets/greatstack/bell_icon.svg";
import kidsLogo from "../../assets/kids logo.png";
import avatar from "../../assets/user logo.png";
import dropDown from "../../assets/greatstack/caret_icon.svg";
import { useState, useEffect } from "react";
import { logout } from "../../firebase";

function NavBar() {
  const [signout, setSignout] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={`navbar ${isScroll ? "scrolling" : ""}`}>
      <div className="navbarLeft">
        <img src={netflix} alt="Netflix" />
        <ul>
          <li>Home</li>
          <li>Shows</li>
          <li>Movies</li>
          <li>Games</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbarRight">
        <div className={`search ${isSearch ? "open" : ""}`}>
          <img
            src={searchIcon}
            onClick={() => setIsSearch((prev) => !prev)}
            alt="Search"
            className="searchIcon"
          />
          <input type="text" placeholder="Titles, people, genres" autoFocus />
        </div>
        <img src={bellIcon} alt="notification" className="notiIcon" />
        <div className="children">
          <img src={kidsLogo} alt="Children" className="avatars" />
          <p>Children</p>
        </div>
        <div className="profile" onClick={() => setSignout((prev) => !prev)}>
          <img src={avatar} alt="Avatar" className="avatars" />
          <img src={dropDown} alt="" />
          {signout && (
            <div className="dropdown">
              <p onClick={() => logout()}>Sign out of Netflix</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
