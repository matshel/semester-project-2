import { displayMessage } from "../messages/displayMessage.js";

export async function fetchAPI(renderFunction, url) {
  try {
    const response = await fetch(url);
    const JSON = await response.json();
    const result = JSON;

    renderFunction(result);
  } catch (error) {
    console.log(error);
    displayMessage(
      "error",
      "There was an error loading products",
      ".container-error"
    );
  }
}
