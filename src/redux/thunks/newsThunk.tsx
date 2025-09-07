import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

export type TnewsThunk = {
  authors: { name: string }[];
  id: number,
  image_url: string,
  title: string,
  url: string,
  published_at: string,
  summary: string,
};

type TnewsResponse = {
  count: number,
  next: string | null,
  previous: string | null,
  results: TnewsThunk[],
};

type TgetThunk = {
  url?: string,
  search?: string,
  ordering?: string,
};

export const getNews = createAsyncThunk<TnewsResponse, TgetThunk>("getBlogs",async ({ url, search, ordering }) => {
    const resp = url ? await axiosInstance.get(url) : await axiosInstance.get("/", {
          params: {
            limit: 9,
            search: search || undefined,
            ordering: ordering || undefined,
          },
        });
    return resp.data;
  }
);

export const getNewsInfo = createAsyncThunk<TnewsThunk, string>("getBlogInfo",async (id: string) => {
    const newsInfoDate = await axiosInstance.get(`/${id}/`);
    return newsInfoDate.data;
  }
);
