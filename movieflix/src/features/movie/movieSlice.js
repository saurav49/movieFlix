import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { getAllMovies } from "../../services/movie";

const initialState = {
  status: "idle",
  loader: false,
  popularMoviesList: [],
  totRatedMovieList: [],
  trendingMovieList: [],
  horrorMovieList: [],
  upcomingMovieList: [],
};

export const fetchAllMovie = createAsyncThunk(
  "movie/fetchAllMovie",
  async () => {
    try {
      const response = await getAllMovies();
      return response;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllMovie.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAllMovie.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      Object.keys(action.payload).forEach((key) => {
        if (action.payload[key].status === 200) {
          state[key] = action.payload[key].data;
        }
      });
    },
    [fetchAllMovie.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default movieSlice.reducer;
