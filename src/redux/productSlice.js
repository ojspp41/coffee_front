import { createSlice } from '@reduxjs/toolkit';
import { addProduct } from '../hooks/apiCall';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.isFetching = true;
        state.error = false;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isFetching = false;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload || true;
      });
  },
});

export default productSlice.reducer;
