document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenuList = document.getElementById("navMenu").querySelector("ul");

  hamburger.addEventListener("click", () => {
    navMenuList.classList.toggle("show");
  });
});
