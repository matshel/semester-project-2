import { getUsername } from "../../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
  const { pathname } = document.location;

  const container = document.querySelector(".menu-container");

  const username = getUsername();

  let authLink = `<a href="/admin/login.html" class="${
    pathname === "/admin/login.html" ? "active" : ""
  }">Login</a>`;

  if (username) {
    authLink = `<a href="/admin/add.html" class="${
      pathname === "admin/add.html" ? "active" : ""
    }">Add</a>
                         
                    <button id="logout">Logout ${username}</button>`;
  }

  let home = "";

  if (username) {
    home = `<a href="/admin/index.html" class="${
      pathname === "/admin/index.html" || pathname === "/admin/index.html"
        ? "active"
        : ""
    }">Edit</a>`;
  } else {
    home = `<a href="../index.html" class="${
      pathname === "../index.html" || pathname === "../index.html"
        ? "active"
        : ""
    }">Home</a>`;
  }

  container.innerHTML = `<div class="menu">
                            <span>${home}</span>
                            <span> ${authLink}</span>    
                        </div>`;

  logoutButton();
}
