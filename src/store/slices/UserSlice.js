import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// =========================
// Async Thunks
// =========================

// Login User
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await api.post("/users/login", { username, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return res.data;
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Terjadi kesalahan";
      return rejectWithValue(message);
    }
  }
);

// Logout User
export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return null;
});

// Register User
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await api.post("/users/register", { username, password });
      // Simpan token & user jika ada di response
      if (res.data.token && res.data.user) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
      return res.data;
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Gagal mendaftar";
      return rejectWithValue(message);
    }
  }
);

// Initial State
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

// Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserFromStorage: (state) => {
      state.user = JSON.parse(localStorage.getItem("user")) || null;
      state.token = localStorage.getItem("token") || null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ===== LOGIN =====
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // ===== LOGOUT =====
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.error = null;
      })

      // ===== REGISTER =====
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload.user && action.payload.token) {
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setUserFromStorage } = userSlice.actions;
export default userSlice.reducer;
