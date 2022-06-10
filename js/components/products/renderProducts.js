import { displayMessage } from "../../messages/displayMessage.js";
import { getUsername } from "../../utils/storage.js";
import { baseUrlImg } from "../../settings/api.js";

export function renderProducts(productsToRender) {
  const productContainer = document.querySelector(".container-product");

  const userName = getUsername();
  let link = "";

  if (productsToRender.length === 0) {
    return displayMessage(
      "feedback",
      "No products matches your search...",
      ".container-product"
    );
  }

  productContainer.innerHTML = "";

  if (userName) {
    link = "edit.html";
  }

  if (!userName) {
    link = "detail.html";
  }

  productsToRender.forEach(function (product) {
    productContainer.innerHTML += ` <div class="product">
                                      <div class="product-image"> 
                                        <img src="${baseUrlImg}${product.image.url}" alt="Image of ${product.title}"> 
                                      </div>
                                      <div class="product-info"> 
                                        <h3 class="product-title">${product.title}</h3>
                                        <span class="product-price">Price: ${product.price}</span>
                                        <a href="${link}?id=${product.id}">
                                            <div class="product-button">more info</div>
                                        </a>
                                      </div>
                                   </div> `;
  });
}
