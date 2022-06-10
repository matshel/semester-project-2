const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function saveUser(user) {
  saveToStorage(userKey, user);
}

export function removeUser() {
  localStorage.removeItem("user");
}

export function getUsername() {
  const user = getFromStorage(userKey);

  if (user) {
    return user.username;
  }

  return null;
}

export function clearStorage() {
  localStorage.clear();
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
}

// get shopping cart items from storage
export function getShoppingCart() {
  const shoppingCart = localStorage.getItem("shoppingcart");

  if (shoppingCart === null) {
    return [];
  } else {
    return JSON.parse(shoppingCart);
  }
}
