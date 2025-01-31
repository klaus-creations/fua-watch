import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  trendTime: "day",
};

const trendTime = createSlice({
  name: "trendTime",
  initialState,
  reducers: {
    changeTrendTime: (state, action) => {
      state.trendTime = action.payload;
    },
  },
});

export default trendTime.reducer;
export const { changeTrendTime } = trendTime.actions;
