import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authRequest } from '../hooks/requestMethod';

// 제품 추가 비동기 액션 생성
export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (product, { rejectWithValue }) => {
    try {
      const response = await authRequest.post('/products', product);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

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
