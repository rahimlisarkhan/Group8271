import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../../services/movie";

function Movies() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resData = await getMovies();
      console.log(resData);

      setData(resData.Search);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <hr />

      {data?.map((movie) => (
        <div key={movie.imdbID}>
          <img width={150} src={movie.Poster} />
          <h4>{movie.Title}</h4>
          <h4>{movie.Year}</h4>
          <button onClick={() => navigate("/movies/" + movie.imdbID)}>
            Read more
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Movies;
