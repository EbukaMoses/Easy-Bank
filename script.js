const open = document.querySelector(".open-hamburger");
const close = document.querySelector(".close-hamburger");
const nav = document.querySelector(".nav");

close.addEventListener("click", function () {
    nav.classList.remove("block");
    open.classList.remove("none");
    close.classList.remove("block");
});

open.addEventListener("click", function () {
  nav.classList.add("block");
  open.classList.add("none");
  close.classList.add("block");
});
