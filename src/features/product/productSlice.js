import { createSlice } from '@reduxjs/toolkit';

import { fetchProducts } from '../../services/products';

const initialState = {
  products: [],
  value: 0,
  loading: false,
  error: {
    hasError: false,
    message: '',
  },
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // }
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;

      state.loading = false;
      state.error = { hasError: false, message: '' };
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = { hasError: true, message: action.payload.error || action.error.message };
    });
  },
});

export const { increment, decrement } = productSlice.actions;

export default productSlice.reducer;
