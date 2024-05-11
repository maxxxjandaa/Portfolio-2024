const btn = document.getElementById("copy-btn");
const wrap = document.getElementById("click");
const beforeBtn = document.getElementById("before-click");

const submitBtn = document.getElementById("submit");

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

btn.addEventListener("click", () => {
  const textToCopy = "info@maxjanda.cz"; // ZmÄ›Ĺte na text, kterĂ˝ chcete zkopĂ­rovat

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      doSomething();
    })
    .catch((error) => {
      console.error("NepodaĹ™ilo se zkopĂ­rovat text: ", error);
      alert("Jejda něco se nepodařilo");
    });

  wrap.style.display = "flex";
  beforeBtn.style.display = "none";
  btn.style.backgroundColor = "rgba(15, 138, 81, 0.21)";

  function doSomething() {
    setTimeout(function () {
      wrap.style.display = "none";
      beforeBtn.style.display = "flex";
      btn.style.backgroundColor = "transparent";
    }, 2500);
  }
});
