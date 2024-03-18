import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieId } from "../../../services/movie";

function MovieDetail() {
  const navigate = useNavigate();

  const [data, setData] = useState();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const resData = await getMovieId(id);

        console.log("resData", resData);
        setData(resData);
      };

      fetchData();
    }
  }, [id]);

  if (!data)
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );

  return (
    <div>
      <img
        style={{ width: "100%", height: 400, objectFit: "cover" }}
        src={data?.Poster}
      />
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{data?.Title}</h1>
      <h1 style={{ color: "orange" }}>{data?.imdbRating}</h1>

      <hr />

      <h1>{data?.Awards}</h1>
      <h1>{data?.Actors}</h1>
      <h1>{data?.Director}</h1>
      <hr />
    </div>
  );
}

export default MovieDetail;
