import { generateKey } from "../utils/generateKey";

const url = "http://api.valantis.store:40000";
const key = generateKey();

const headers = {
  "X-Auth": key,
  "Content-Type": "application/json",
};

const handleBody = (params) => JSON.stringify(params);

export const getIds = async (params) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: handleBody(params),
    });

    const data = await res.json();

    return data.result;
  } catch (err) {}
};

export const getItems = async (params) => {
  try {
    const ids = await getIds(params);

    console.log("ids", ids);

    const res = await fetch(url, {
      method: "POST",
      headers,
      body: handleBody({ action: "get_items", params: { ids } }),
    });

    const data = await res.json();

    return data.result;
  } catch (err) {}
};
