document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");

    hamburger.setAttribute(
      "aria-expanded",
      hamburger.classList.contains("active")
    );
  });

  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("active") &&
      !hamburger.contains(e.target) &&
      !navLinks.contains(e.target)
    ) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
});
