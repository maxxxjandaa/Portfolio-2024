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
