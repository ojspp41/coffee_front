import axios from 'axios';

// API 요청의 기본 URL 설정
const BASE_URL = "http://localhost:8000/api";

// 인증이 필요 없는 공용 API 요청을 위한 Axios 인스턴스 생성
export const publicRequest = axios.create({
  baseURL: BASE_URL, // 모든 요청에 대해 기본 URL 설정
});

// 인증이 필요한 API 요청을 위한 Axios 인스턴스 생성
export const authRequest = axios.create({
  baseURL: BASE_URL,         // 모든 요청에 대해 기본 URL 설정
  withCredentials: true,     // 요청과 함께 자격 증명(쿠키, 인증 헤더 등)을 보냄
});
