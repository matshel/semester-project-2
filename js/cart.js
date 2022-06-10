import countStorage from "./utils/cartCount.js";
import navigation from "./navigation.js";
import { createShoppingCart } from "./components/products/renderCart.js";

createShoppingCart();
countStorage();
navigation();
