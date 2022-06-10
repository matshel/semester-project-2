import { displayMessage } from "../../messages/displayMessage.js";
import { baseUrlImg, heroUrl } from "../../settings/api.js";

const heroContainer = document.querySelector(".section-hero-image");

export async function getHeroImage() {
  try {
    const response = await fetch(heroUrl);
    const image = await response.json();

    heroContainer.innerHTML = `
    <div class="details-image" style="background-image: url('${baseUrlImg}${image.hero_banner.url}')"></div>
    `;
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".section-hero-image");
  }
}

getHeroImage();
