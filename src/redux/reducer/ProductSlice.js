import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductAPI from "../../api/Product";

export const handleCallProductAPI = createAsyncThunk(
  "products/fetchAllProduct",
  async (action) => {
    const response = await ProductAPI.getAllProduct();
    localStorage.setItem("carts", JSON.stringify(response));
    return response;
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: localStorage.getItem("products") || [],
  extraReducers: {
    [handleCallProductAPI.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { actions, reducer } = ProductSlice;

export default reducer;
