const scrollUp = () => {
  const upArrow = document.querySelector(".up_arrow");
  const scrollY = window.pageYOffset;
  if (scrollY >= 560) {
    upArrow.classList.add("show_arrow");
  } else {
    upArrow.classList.remove("show_arrow");
  }
};

window.addEventListener("scroll", scrollUp);
