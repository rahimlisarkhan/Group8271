import axios from "axios";

const url = "https://icanhazdadjoke.com/search";

export const getJokes = async (p) => {
  try {
    const params = {
      limit: 15,
      page: p,
    };

    const res = await axios({
      headers: { Accept: "application/json" },
      method: "GET",
      url,
      params,
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log("err", err);
  }
};
