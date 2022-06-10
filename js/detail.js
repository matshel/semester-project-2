import {
  createDetails,
  productUrl,
} from "./components/products/renderDetails.js";
import { fetchAPI } from "./utils/fetchAPI.js";
import navigation from "./navigation.js";
import countStorage from "./utils/cartCount.js";

fetchAPI(createDetails, productUrl);
navigation();
countStorage();
