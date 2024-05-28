//存储token
export function setToken(token) {
  return sessionStorage.setItem("token", token);
}
//读取token

export function getToken() {
  return sessionStorage.getItem("token");
}

//删除token

export function deleteToken() {
  return sessionStorage.removeItem("token");
}
