let nav = document.querySelector("nav");
let ul = document.querySelector("navUl");
let buttonBackToTop = document.getElementById("backToTop");

const scrollFunction = () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        nav.style.background = "#134038b3";
        navUl.style.padding = "1%";
        buttonBackToTop.style.display = "block";
    } else {
        nav.style.background = "transparent";
        navUl.style.padding = "3.7%";
        buttonBackToTop.style.display = "none";
    }
};

    const getToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }


window.addEventListener("scroll", scrollFunction);
buttonBackToTop.addEventListener("click", getToTop);