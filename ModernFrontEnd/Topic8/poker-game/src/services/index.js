import axios from "axios";

const baseUrl = "https://deckofcardsapi.com/api/deck/";

export const getShuffleCards = async () => {
  try {
    const res = await axios({ method: "GET", url: baseUrl + "new/shuffle" });

    const data = res.data;
    return data;
  } catch (err) {}
};

export const getCard = async (deck_id, params) => {
  try {
    const data = await axios({
      method: "GET",
      url: baseUrl + `${deck_id}/draw/`,
      params,
    });

    return data;
  } catch (err) {
    console.log("err", err);
  }
};
