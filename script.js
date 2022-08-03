const tombol = document.querySelector("input");
const disable = document.querySelector(".disable");
const screen = document.querySelector(".container");
tombol.addEventListener("click", function () {
  screen.classList.toggle("siang");
});
