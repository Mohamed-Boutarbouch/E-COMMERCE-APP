import { createAsyncThunk } from '@reduxjs/toolkit';

import { axios } from './axiosClient';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/products');
    return response.data;
  } catch (error) {
    throw thunkAPI.rejectWithValue({
      error: error.message,
    });
  }
});

export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw thunkAPI.rejectWithValue({
        error: error.message,
      });
    }
  },
);
