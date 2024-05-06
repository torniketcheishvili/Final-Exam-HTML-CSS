let burger = document.querySelector(".burger");
let xmark = document.querySelector(".xmark");
let mobileMenu = document.querySelector(".header_nav");
burger.addEventListener("click", () => {
  burger.style.display = "none";
  xmark.style.display = "block";
  mobileMenu.classList.add("show");
});
xmark.addEventListener("click", () => {
  burger.style.display = "block";
  xmark.style.display = "none";
  mobileMenu.classList.remove("show");
});
