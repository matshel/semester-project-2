import { getShoppingCart } from "../../utils/storage.js";
import { baseUrl, baseUrlImg } from "../../settings/api.js";
import countStorage from "../../utils/cartCount.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  console.log("error in 'id' if statement");
}

export const productUrl = baseUrl + "products/" + id;

export function createDetails(details) {
  document.title = `Nordic Chair | ${details.title}`;

  const detailsBreadcrumb = document.querySelector(".breadcrumb");
  detailsBreadcrumb.innerHTML = `Product > ${details.title}`;

  const detailsImage = document.querySelector(".detail-image");
  detailsImage.src = details.image.url;
  detailsImage.alt = details.title;
  detailsImage.innerHTML = `
                            <img src="${baseUrlImg}${detailsImage.src}" alt="${detailsImage.alt}"/>
                            `;

  const detailsTitle = document.querySelector(".details__title");
  detailsTitle.innerHTML = details.title;

  const detailsPrice = document.querySelector(".details__price");
  detailsPrice.innerHTML = "$" + details.price;

  const detailsDesc = document.querySelector(".details__description");
  detailsDesc.innerHTML = details.description;

  const detailsBtn = document.querySelector(".details__btn");
  detailsBtn.dataset.id = details.id;
  detailsBtn.dataset.title = details.title;
  detailsBtn.dataset.description = details.description;
  detailsBtn.dataset.price = details.price;
  detailsBtn.dataset.image = `http://localhost:1337${details.image.url}`;
  detailsBtn.dataset.url = `./detail.html?id=${details.id}`;

  const addToCartBtn = document.querySelectorAll(".details__btn");

  addToCartBtn.forEach((button) => {
    button.addEventListener("click", handleAddToCartClick);
  });

  function handleAddToCartClick() {
    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image;
    const description = this.dataset.description;
    const url = this.dataset.url;

    const currentCart = getShoppingCart();

    const productExists = currentCart.find(function (cart) {
      return cart.id === id;
    });

    if (!productExists) {
      const product = {
        id: id,
        title: title,
        price: price,
        image: image,
        description: description,
        url: url,
      };

      currentCart.push(product);
      saveItems(currentCart);
    } else {
      const newCarts = currentCart.filter((cart) => cart.id !== id);
      saveItems(newCarts);
    }
  }

  function saveItems(carts) {
    localStorage.setItem("shoppingcart", JSON.stringify(carts));
    countStorage();
  }
}
