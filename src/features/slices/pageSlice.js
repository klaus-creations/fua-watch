import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  artists: 1,
  trending: 1,
  popularMoviesTv: 4,
  topRated: 1,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setArtistsPage: (state, action) => {
      state.artists = action.payload;
    },
    setTrendingPage: (state, action) => {
      state.trending = action.payload;
    },
    setPopularMoviesTVPage: (state, action) => {
      state.popularMoviesTv = action.payload;
    },
    setTopRatedPage: (state, action) => {
      state.topRated = action.payload;
    },
  },
});

export default pageSlice.reducer;
export const {
  setArtistsPage,
  setTrendingPage,
  setPopularMoviesTVPage,
  setTopRatedPage,
} = pageSlice.actions;
