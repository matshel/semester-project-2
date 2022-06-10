import { getUsername } from "../../utils/storage.js";
import { baseUrlImg } from "../../settings/api.js";

export function renderFeaturedProducts(productsToRender) {
  const productContainer = document.querySelector(".container-featured");

  const userName = getUsername();
  let link = "";

  productContainer.innerHTML = "";

  if (userName) {
    link = "edit.html";
  }

  if (!userName) {
    link = "detail.html";
  }

  productsToRender.forEach(function (product) {
    if (product.featured) {
      productContainer.innerHTML += ` <div class="product-featured">
                                        <div class="product-featured-image"> 
                                          <img src="${baseUrlImg}${product.image.url}" alt="Image of ${product.title}"> 
                                        </div>
                                        <div class="product-featured-info"> 
                                          <h4 class="product-featured-title">${product.title}</h4>
                                          <span class="product-featured-price">Price: $${product.price}</span>
                                          <a href="${link}?id=${product.id}">
                                            <div class="product-featured-button">more info</div>
                                          </a>
                                        </div>
                                   </div> `;
    }
  });
}
