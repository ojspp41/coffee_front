// src/redux/productSlice.js
import { createSlice} from '@reduxjs/toolkit';


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
      .addCase(addProduct.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      });
  },
});

export default productSlice.reducer;
