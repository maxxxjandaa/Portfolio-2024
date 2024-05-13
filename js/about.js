// Mobile

const mobileNavBtn = document.getElementById("btn-mobile-navBtn");
const navMobile = document.querySelector(".header-nav");
const ulNav = document.querySelector(".mobile-nav-ul");
const menuIconOpen = document.querySelector(".menu-icon-open");
const menuIconClose = document.querySelector(".menu-icon-close");

const themeBtnMobile = document.getElementById("btn-mobile-theme");

function navigateTo(url) {
  // Přidejte třídu na body, která spustí animaci fade-out
  document.body.classList.add("fade-out");

  // Počkejte 300 milisekund (0.3 sekundy) a přejděte na novou stránku
  setTimeout(function () {
    window.location.href = url;
  }, 300);
}

const themeBtn = document.getElementById("theme-button");

themeBtn.addEventListener("click", () => {
  window.alert("Upssss tato funkce není zatím dostupná");
});

// Mobile section

mobileNavBtn.addEventListener("click", () => {
  navMobile.classList.toggle("showNavMobile");
  menuIconClose.classList.toggle("menuiconclose");
  menuIconOpen.classList.toggle("menuiconopen");
});

themeBtnMobile.addEventListener("click", () => {
  window.alert("Upssss tato funkce není zatím dostupná");
});
