import { publicRequest } from './requestMethod.js';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authRequest } from './requestMethod.js';

export const addProduct = createAsyncThunk('product/addProduct', async (product, thunkAPI) => {
  try {
    const response = await authRequest.post('/api/products', product, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// 로그인 API 호출 함수
export const login = async (dispatch, user) => {
  // 로그인 시작 액션 디스패치
  dispatch(loginStart());
  try {
    // 로그인 API 호출
    const response = await publicRequest.post('/auth/login', user);
    // 로그인 성공 액션 디스패치
    dispatch(loginSuccess(response.data));
    localStorage.setItem("token", response.data.token);
  } catch (err) {
    // 로그인 실패 액션 디스패치
    dispatch(loginFailure());
  }
};
