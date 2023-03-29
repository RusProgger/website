const hamburger = document.querySelector(".mobile-menu");
const burgerMenu = document.querySelector(".menu__list");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    burgerMenu.classList.toggle("active");
})