window.onload = () => {
  const menuButton = document.getElementById("menulogo");
  const navMenu = document.querySelector(".mobile-nav__list");
  const menuContainer = document.querySelector(".mobile-nav");

  menuButton.addEventListener("click", () => {
      toggleMenu(menuButton, navMenu, menuContainer);
  });
};

function toggleMenu(menuButton, navMenu, menuContainer) {
  menuButton.classList.toggle("is-active");
  if (menuButton.classList.contains("is-active")) {
      openMenu(menuButton, navMenu, menuContainer);
  } else {
      closeMenu(menuButton, navMenu, menuContainer);
  }
}

function openMenu(menuButton, navMenu, menuContainer) {
  menuContainer.style.display = "block";
  setTimeout(() => {
      menuButton.src = "./assets/images/icon-menu-close.svg";
      navMenu.classList.add("is-active");
      menuContainer.classList.add("is-active");
  }, 1);
}

function closeMenu(menuButton, navMenu, menuContainer) {
  menuButton.src = "./assets/images/icon-menu.svg";
  navMenu.classList.remove("is-active");
  menuContainer.classList.remove("is-active");
  setTimeout(() => {
      menuContainer.style.display = "none";
  }, 250);
}