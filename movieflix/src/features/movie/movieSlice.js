import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMovies } from "../../services/movie";

const initialState = {
  status: "idle",
  loader: false,
  popularMovieList: [],
  topRatedMovieList: [],
  trendingMovieList: [],
  horrorMovieList: [],
  upcomingMovieList: [],
  selectedVideo: {},
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
  reducers: {
    handleSelectedVideo: (state, action) => {
      localStorage.setItem(
        "selected__video__codemancers",
        JSON.stringify(action.payload)
      );
      return {
        ...state,
        selectedVideo: action.payload,
      };
    },
  },
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

export const { handleSelectedVideo } = movieSlice.actions;
export default movieSlice.reducer;
