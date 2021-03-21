let nav = document.querySelector("nav");
let ul = document.querySelector("navUl");
let buttonBackToTop = document.getElementById("backToTop");
let buttonMobile = document.getElementById("mobileButton");
let links = document.querySelectorAll("nav ul li a");

const scrollFunction = () => {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    nav.classList.add("bg");
    buttonBackToTop.style.display = "block";
  } else {
    nav.classList.remove("bg");
    buttonBackToTop.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

window.addEventListener("scroll", scrollFunction);
buttonBackToTop.addEventListener("click", getToTop);
buttonMobile.addEventListener("click", mobMenu);
