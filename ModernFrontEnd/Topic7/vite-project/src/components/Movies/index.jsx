import React, { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);

  const handleData = async () => {
    try {
      const res = await fetch(
        "http://www.omdbapi.com/?apikey=a407a7b3&s=movie&limit=100",
        { method: "GET" }
      );

      const data = await res.json();

      setMovies(data.Search);
    } catch (err) {}
  };

  useEffect(() => {
    //?Component Did Mount
    handleData();

    //?Component UnMount
    return () => {
      alert("Yaxsi yol...");
      localStorage.removeItem("name");
    };
  }, []);

  useEffect(() => {
    //?Component Did Update

    console.log("Datalar doldu....");
  }, [movies]);

  console.log("movies", movies);

  //   handleData();

  return (
    <div>
      Movies
      {movies?.map((item) => {
        return (
          <div key={item.imdbID}>
            <img width={100} src={item.Poster} alt={item.Title} />
            <h2>{item.Title}</h2>
            <h3>{item.Year}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
