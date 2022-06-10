import { removeUser, removeToken } from "../../utils/storage.js";

export default function logoutButton() {
  const button = document.querySelector("#logout");

  if (button) {
    button.onclick = function () {
      const doLogout = confirm("Are you sure?");

      if (doLogout) {
        removeUser();
        removeToken();
        location.href = "/";
      }
    };
  }
}
