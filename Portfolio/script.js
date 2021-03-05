let nav = document.querySelector("nav");
let ul = document.querySelector("navUl");
let buttonBackToTop = document.getElementById("backToTop");

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
      }


window.addEventListener("scroll", scrollFunction);
buttonBackToTop.addEventListener("click", getToTop);