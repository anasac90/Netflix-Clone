import "./Player.css";
import backIcon from "../../assets/greatstack/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Player = () => {
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const { id } = useParams();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODA1Njk4NzM1NDcyOTc1ODA0MGMwN2I5ZWVlMzEwOCIsIm5iZiI6MTc4NjU1MzAwOS4xMTgsInN1YiI6IjZhN2NhMmIxYWRkMGUzZDdjZDUwMDdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._aCjxHP66uLGSx6jy6afwD50i38V83_B6T3uHtPN0gE",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    )
      .then((res) => res.json())
      .then((data) => setApiData(data.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <Link to={`/`}>
        <img src={backIcon} alt="" />
      </Link>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        width="90%"
        height="90%"
        frameborder="0"
        title="Trailer"
        allowFullScreen
      ></iframe>
      <div className="playerInfo">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
