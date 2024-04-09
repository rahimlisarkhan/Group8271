import { instanceAxios } from "../helpers/instanceAxios";

export const getBlogs = async () => {
  const response = await instanceAxios({ method: "GET", url: "posts" });
  return response;
};

export const getBlogId = async (id) => {
  const response = await instanceAxios({ method: "GET", url: "posts/" + id });
  return response;
};

export const crtBlog = async (data) => {
  const response = await instanceAxios({ method: "POST", url: "posts", data });
  return response;
};

export const uptBlog = async (id, data) => {
  const response = await instanceAxios({
    method: "PUT",
    url: "posts/" + id,
    data,
  });
  return response;
};

export const rmvBlogId = async (id) => {
  const response = await instanceAxios({
    method: "DELETE",
    url: "posts/" + id,
  });
  return response;
};
