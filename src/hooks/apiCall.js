import { publicRequest, authRequest } from './requestMethod.js';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 제품 추가를 위한 비동기 작업
export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (productData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/api/products/', productData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
// 로그인 API 호출 함수
export const login = async (dispatch, user) => {
  // 로그인 시작 액션 디스패치
  dispatch(loginStart());
  try {
    // 로그인 API 호출
    const response = await publicRequest.post('/auth/login', user);
    // 로그인 성공 액션 디스패치
    dispatch(loginSuccess(response.data));
    localStorage.setItem('token', response.data.token);
  } catch (err) {
    // 로그인 실패 액션 디스패치
    dispatch(loginFailure());
  }
};
