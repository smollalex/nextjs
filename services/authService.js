import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndPoint = "/auth";
const tokenKey = "token";

if (typeof window !== 'undefined') {
  console.log('we are running on the client')
  http.setJwt(getJwt());
} else {
  console.log('we are running on the server');
}

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout(jwt) {
  if (typeof window !== 'undefined') {
    console.log('we are running on the client')
    localStorage.removeItem(tokenKey);
   } else {
    console.log('we are running on the server');
  }
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem("token");
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
