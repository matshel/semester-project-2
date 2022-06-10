export default function countStorage() {
  const cartQuantity = document.querySelector(".cart-quantity");

  if (localStorage["shoppingcart"]) {
    const totalItems = JSON.parse(localStorage["shoppingcart"]).length;
    cartQuantity.innerHTML = totalItems;
  } else {
    cartQuantity.innerHTML = "0";
  }
}
