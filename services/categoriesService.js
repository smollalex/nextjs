import http from "./httpService";

const apiEndPoint = "/categories";

export function getCategories() {
  return http.get(apiEndPoint);
}

export const categories = getCategories();
