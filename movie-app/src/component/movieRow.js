import React, { Component } from "react";

const imgPath = "https://image.tmdb.org/t/p/w1280/";

function MovieRow({ data }) {
  const { title, poster_path, overview, id } = data;

  const handleInfo = () => {
    window.location.href = "https://www.themoviedb.org/movie/" + id;
  };
  return (
    <div className="movie">
      <img src={imgPath + poster_path} />
      <div className="movie-info">
        <h3>{title}</h3>
      </div>

      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
        <button onClick={handleInfo} className="info-btn">
          More Info
        </button>
      </div>
    </div>
  );
}

export default MovieRow;
