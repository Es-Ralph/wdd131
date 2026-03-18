const menuBtn = document.getElementById("menu");
const nav = document.getElementById("nav");

// Toggle menu
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");

  // Change icon
  if (nav.classList.contains("open")) {
    menuBtn.textContent = "✖";
  } else {
    menuBtn.textContent = "☰";
  }
});

// Footer dynamic content
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;