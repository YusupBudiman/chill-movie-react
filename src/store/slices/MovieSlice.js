import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// fetch all
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/movies");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (movie, { rejectWithValue }) => {
    try {
      const res = await api.post("/movies", movie);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const updateMovie = createAsyncThunk(
  "movies/updateMovie",
  async ({ id, updatedMovie }, { rejectWithValue }) => {
    try {
      const res = await api.put(`/movies/${id}`, updatedMovie);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.delete(`/movies/${id}`);
      // backend returns { id: deleted._id }
      return res.data.id || id;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.unshift(action.payload);
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        const idx = state.movies.findIndex((m) => m._id === action.payload._id);
        if (idx !== -1) state.movies[idx] = action.payload;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter((m) => m._id !== action.payload);
      });
  },
});

export default movieSlice.reducer;
