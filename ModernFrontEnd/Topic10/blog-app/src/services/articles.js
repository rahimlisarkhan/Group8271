import { instanceAxios } from "../helpers/instanceAxios";

export const getBlogs = async () => {
  const response = await instanceAxios({ method: "GET", url: "posts" });
  return response;
};

export const getBlogId = async (id) => {
  const response = await instanceAxios({ method: "GET", url: "posts/" + id });
  return response;
};
