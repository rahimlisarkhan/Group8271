import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "http://www.omdbapi.com",
  params: {
    apikey: "a407a7b3",
  },
});

export const getMovies = async () => {
  try {
    const res = await instanceAxios({
      method: "GET",
      params: { s: "movie" },
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieId = async (id) => {
  try {
    const res = await instanceAxios({
      method: "GET",
      params: { i: id },
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
