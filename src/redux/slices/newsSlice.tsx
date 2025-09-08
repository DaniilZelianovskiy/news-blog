import { createSlice } from "@reduxjs/toolkit";
import { getNews, getNewsInfo } from "../thunks/newsThunk";
import type { RootState } from "../store/store";

type TnewsList = {
  authors: { name: string }[];
  id: number;
  image_url: string;
  title: string;
  url: string;
  published_at: string;
  summary: string;
};

type TinitialState = {
  newsList: TnewsList[];
  newsInfo: TnewsList | null;
  next: string | null;
  previous: string | null;
};

const initialState: TinitialState = {
  newsList: [],
  newsInfo: null,
  next: null,
  previous: null,
};

export const blogsSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.newsList = action.payload.results;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    });

    builder.addCase(getNewsInfo.fulfilled, (state, action) => {
      state.newsInfo = action.payload;
    });
  },
});

export const selectNewsList = (state: RootState) => state.news.newsList;
export const selectNewsInfo = (state: RootState) => state.news.newsInfo;
export const selectNext = (state: RootState) => state.news.next;
export const selectPrevious = (state: RootState) => state.news.previous;

export default blogsSlice.reducer;
