let nav = document.querySelector("nav");
let ul = document.querySelector("navUl");

const scrollNav = () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        nav.style.background = "#134038b3";
        navUl.style.padding = "1%";
    } else {
        nav.style.background = "transparent";
        navUl.style.padding = "3.7%";
        
    }
};

window.addEventListener("scroll", scrollNav);