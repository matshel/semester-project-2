import { getShoppingCart } from "../../utils/storage.js";
import { displayMessage } from "../../messages/displayMessage.js";

export function createShoppingCart() {
  const shoppingCart = getShoppingCart();
  const cartContainer = document.querySelector(".test-container");

  cartContainer.innerHTML = "";

  if (shoppingCart.length === 0) {
    displayMessage("feedback", "Your cart is empty", ".test-container");
  }

  shoppingCart.forEach(function (product) {
    cartContainer.innerHTML += `<div class="cart-container">
                                    <div class="cart-container-image">
                                      <img src=" ${product.image} " />
                                      <a href="${product.url}" class="">
                                        <span>View Product</span><i class=""></i>
                                      </a>
                                    </div>
                                    <div class="cart-container-info">
                                      <span class="">${product.title}</span>
                                      <span class="">$${product.price}</span>
                                    </div>
                                </div>`;
  });

  /* cart total price */
  const totalPriceContainer = document.querySelector(".container-total");

  let totalPrice = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    let price = parseFloat(shoppingCart[i].price);

    totalPrice += price;
  }

  const rounded = Math.round((totalPrice + Number.EPSILON) * 100) / 100;
  totalPriceContainer.innerHTML = `<div class="cart-total">
                                    <span>Cart total:</span>
                                    <span>$${rounded}</span>
                                  </div>`;
}
