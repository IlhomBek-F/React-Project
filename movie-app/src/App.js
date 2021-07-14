import React, { useEffect, useState } from "react";
import MovieRow from "./component/movieRow";
import "./App.css";

// Movies API
const ApiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const searchApi =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [arr, setArr] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const data = await fetch(ApiUrl);
    const req = await data.json();

    setArr(req.results);

    console.log(arr);
  };

  const searchHandle = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      fetch(searchApi + search)
        .then((res) => res.json())
        .then((data) => {
          setArr(data.results);
        });
    }

    setSearch("");
  };
  return (
    <>
      <header>
        <input
          value={search}
          onChange={searchHandle}
          type="text"
          placeholder="search"
          className="search"
        />
        <i onClick={handleSubmit} className="fas fa-search"></i>
      </header>
      <div className="movie-container">
        {arr.length > 0 &&
          arr.map((movie) => <MovieRow data={movie} key={movie.id} />)}
      </div>
    </>
  );
}

export default App;
