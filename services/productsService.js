import http from "./httpService";

const apiEndPoint = "/catalog";

function getProductUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getCatalog() {
  return http.get(apiEndPoint);
}

export function getProduct(id) {
  return http.get(getProductUrl(id));
}

export function deleteProduct(id) {
  return http.delete(getProductUrl(id));
}

export function saveProduct(product) {
  if (product._id) {
    const body = { ...product };
    delete body._id;
    return http.put(getProductUrl(product._id), body);
  }
  return http.post(apiEndPoint, product);
}
