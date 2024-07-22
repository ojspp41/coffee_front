import { publicRequest } from './requestMethod.js';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice.js';

// 로그인 API 호출 함수
export const login = async (dispatch, user) => {
  // 로그인 시작 액션 디스패치
  dispatch(loginStart());
  try {
    // 로그인 API 호출
    const response = await publicRequest.post('/auth/login', user);
    // 로그인 성공 액션 디스패치
    dispatch(loginSuccess(response.data));
  } catch (err) {
    // 로그인 실패 액션 디스패치
    dispatch(loginFailure());
  }
};
