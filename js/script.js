"use strict";

window.addEventListener("load", windowLoad);

function windowLoad() {
  document.body.classList.add("loaded");
}
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const navbarToggler = document.querySelector(".navbar-toggler");

if (header) {
  window.addEventListener("scroll", scroled);
  function scroled() {
    let windowY = window.scrollY;
    let showPosition = 50;
    if (windowY >= showPosition) {
      header.classList.add("scroled");
    } else {
      header.classList.remove("scroled");
    }
  }
}
if (navbarToggler) {
  navbarToggler.addEventListener("click", clickButton);
  function clickButton() {
    document.body.classList.toggle("_lock");
    navbar.classList.toggle("navbar-bg");
  }
}
