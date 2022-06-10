export function displayMessage(messageType, message, target) {
  const element = document.querySelector(target);

  element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
export function displayMessageFeatured(messageType, message, target) {
  const element = document.querySelector(target);

  element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
