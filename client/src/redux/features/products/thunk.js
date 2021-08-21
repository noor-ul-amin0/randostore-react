import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get("/items");
    return data;
  }
);
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const { data } = await axios.post("/items", product);
    return data;
  }
);
