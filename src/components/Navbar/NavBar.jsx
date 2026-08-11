import "./NavBar.css";
import netflix from "../../assets/netflix.svg";
import searchIcon from "../../assets/greatstack/search_icon.svg";
import bellIcon from "../../assets/greatstack/bell_icon.svg";
import kidsLogo from "../../assets/kids logo.png";
import avatar from "../../assets/user logo.png";
import dropDown from "../../assets/greatstack/caret_icon.svg";

function NavBar() {
  return (
    <div className="navbar">
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
        <img src={searchIcon} alt="Search" className="search" />
        <img src={bellIcon} alt="notification" className="Notification" />
        <div className="children">
          <img src={kidsLogo} alt="Children" />
          <p>Children</p>
        </div>
        <div className="profile">
          <img src={avatar} alt="Avatar" />
          <img src={dropDown} alt="Avatar" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
