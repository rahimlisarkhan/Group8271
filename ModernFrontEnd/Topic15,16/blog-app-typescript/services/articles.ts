import { BlogType } from "@/interface/data";
import { instanceAxios } from "@/shared/helpers/instanceAxios";
import { AxiosResponse } from "axios";

const res = {
  config: {},
  headers: {},
  statis: 200,
  data: [],
};

type Params = {
  page?: number;
  q?: string;
};

export const getBlogs = async (
  params?: Params
): Promise<AxiosResponse<BlogType[]>> => {
  const response = await instanceAxios({ method: "GET", url: "posts", params });
  return response;
};

export const getBlogId = async (
  id: BlogType["id"]
): Promise<AxiosResponse<BlogType>> => {
  const response = await instanceAxios({ method: "GET", url: "posts/" + id });
  return response;
};

export const crtBlog = async (data: Omit<BlogType, "id">) => {
  const response = await instanceAxios({ method: "POST", url: "posts", data });
  return response;
};

export const uptBlog = async (id: BlogType["id"], data: BlogType) => {
  const response = await instanceAxios({
    method: "PUT",
    url: "posts/" + id,
    data,
  });
  return response;
};

export const rmvBlogId = async (id: BlogType["id"]) => {
  const response = await instanceAxios({
    method: "DELETE",
    url: "posts/" + id,
  });
  return response;
};
