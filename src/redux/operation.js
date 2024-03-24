import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65fcfea69fc4425c6530f49e.mockapi.io";

export const fetchCatalog = createAsyncThunk(
  "catalog/featchAllAdvert",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`/adverts`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
