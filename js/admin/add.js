import displayMessage from "../components/common/displayMessage.js";
import createMenu from "../components/common/createMenu.js";
import { getToken } from "../utils/storage.js";
import { baseUrl } from "../settings/api.js";

const token = getToken();

if (!token) {
  location.href = "/";
}

createMenu();

const form = document.querySelector("form");
// const image = document.querySelector("#image");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  // const imageValue = image.value;
  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();

  console.log("priceValue", priceValue);

  if (
    // imageValue.length === 0 ||
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0
  ) {
    return displayMessage(
      "warning",
      "Forgot something? Please supply proper values",
      ".message-container"
    );
  }

  addProduct(titleValue, priceValue, descriptionValue);
}

async function addProduct(title, price, description) {
  const url = baseUrl + "products";

  const data = JSON.stringify({
    // image: image,
    title: title,
    price: price,
    description: description,
  });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage("success", "Product created", ".message-container");
      form.reset();
    }

    if (json.error) {
      displayMessage("error", json.message, ".message-container");
    }

    console.log(json);
  } catch (error) {
    console.log(error);
    displayMessage("error", "An error occurred", ".message-container");
  }
}
