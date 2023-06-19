let openBtn = document.querySelector(".navbar__btn_burger");
let closeBtn = document.querySelector(".burger_menu__btn-close");
let burgerMenu = document.querySelector(".burger__menu");

openBtn.addEventListener("click", () => {
  burgerMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  burgerMenu.style.display = "none";
});
