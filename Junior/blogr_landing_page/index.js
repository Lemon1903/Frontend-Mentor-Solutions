const menu = document.getElementById("menu");
const navbar = document.getElementById("nav");
const navlinks = document.querySelectorAll(".nav-link");

let activeLink = null;

menu.onclick = () => {
  let isActive = menu.classList.toggle("show-navbar");
  navbar.classList.toggle("show-navbar");

  if (!isActive && activeLink) {
    activeLink.classList.remove("show-dropdown");
    activeLink = null;
  }
};

navlinks.forEach((link) => {
  link.onclick = () => {
    if (activeLink && link !== activeLink) {
      activeLink.classList.remove("show-dropdown");
    }

    activeLink = link;
    activeLink.classList.toggle("show-dropdown");
  };
});
