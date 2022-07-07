const btn = document.querySelector(".menu__btn__responsive");
const nav = document.querySelector(".menu__list");

const crearItem = () => {
  const sobreMi = document.querySelector("#menu__list__item__sobremi");
  const menuParent = document.querySelector(".menu__list");

  const li = document.createElement("li");
  li.classList.add("menu__list__item");
  li.textContent = "Maximiliano Montaña - MENU";

  menuParent.insertBefore(li, sobreMi);
};

window.addEventListener("load", () => {
  if (screen.width <= 480) crearItem();
});

btn.addEventListener("click", () => {
  nav.classList.toggle("menu__list__animacion");
});
