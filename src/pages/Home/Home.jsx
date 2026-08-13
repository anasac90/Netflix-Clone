import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/NavBar";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import heroBanner from "../../assets/greatstack/hero_banner.jpg";
import heroTitle from "../../assets/greatstack/hero_title.png";
import playIcon from "../../assets/greatstack/play_icon.png";
import infoIcon from "../../assets/greatstack/info_icon.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="hero">
        <img src={heroBanner} alt="" className="bannerImg" />
        <div className="heroCaption">
          <img src={heroTitle} alt="" className="captionImg" />
          <p>
            Dicovering his ties to a secret ancient order, a young man living in
            modern Istanbul embarks on quest to save the city from an immortal
            enemy.
          </p>
          <div className="heroBtns">
            <button className="btn">
              <img src={playIcon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={infoIcon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>

      <div className="moreCards">
        <TitleCards title={"New on Netflix"} category={"top_rated"} />
        <TitleCards
          title={"Blockbuster Bollywood Moview"}
          category={"popular"}
        />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
