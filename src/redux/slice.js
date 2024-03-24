import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "./operation";

const initialState = {
  catalog: [],
  favorites: [],
  isLoading: false,
  itemsPerPage: 4,
  error: null,
  currentPage: 1,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    changeFavorite(state, action) {
      const isFavorite = state.favorites.filter(
        (catalog) => catalog._id === action.payload._id
      );
      if (isFavorite.length > 0) {
        state.favorites = state.favorites.filter(
          (catalog) => catalog._id !== action.payload._id
        );

        return;
      }
      state.favorites.push({ ...action.payload });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.catalog = action.payload;
        state.error = null;
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;

export const { setPage, changeFavorite } = catalogSlice.actions;
