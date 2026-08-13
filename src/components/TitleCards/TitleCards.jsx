import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cardsData from "../../assets/greatstack/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODA1Njk4NzM1NDcyOTc1ODA0MGMwN2I5ZWVlMzEwOCIsIm5iZiI6MTc4NjU1MzAwOS4xMTgsInN1YiI6IjZhN2NhMmIxYWRkMGUzZDdjZDUwMDdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._aCjxHP66uLGSx6jy6afwD50i38V83_B6T3uHtPN0gE",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();

    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((data) => setApiData(data.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titleCards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="cardList" ref={cardsRef}>
        {apiData
          ? apiData.map((card, index) => {
              return (
                <Link to={`/player/${card.id}`} className="card" key={index}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                    alt=""
                  />
                  <p>{card.title}</p>
                </Link>
              );
            })
          : cardsData.map((card, index) => {
              return (
                <div className="card" key={index}>
                  <img src={card.image} alt="" />
                  <p>{card.name}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default TitleCards;
