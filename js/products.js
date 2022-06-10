import { fetchAPI } from "./utils/fetchAPI.js";
import { productsUrl } from "./settings/api.js";
import { renderProducts } from "./components/products/renderProducts.js";
import { searchProducts } from "./components/products/searchProducts.js";
import navigation from "./navigation.js";
import countStorage from "./utils/cartCount.js";

fetchAPI(renderProducts, productsUrl);
fetchAPI(searchProducts, productsUrl);
countStorage();
navigation();
