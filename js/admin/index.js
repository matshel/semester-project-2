import { renderProducts } from "../components/products/renderProducts.js";
import { searchProducts } from "../components/products/searchProducts.js";

import { baseUrl } from "../settings/api.js";
import displayMessage from "../components/common/displayMessage.js";
import createMenu from "../components/common/createMenu.js";

const productsUrl = baseUrl + "products";

// import from settings

createMenu();

async function getProducts() {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();

    renderProducts(products);
    searchProducts(products);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".container-product");
  }
}

getProducts();
