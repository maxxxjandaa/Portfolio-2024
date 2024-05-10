const btn = document.getElementById("copy-btn");
const wrap = document.getElementById("click");
const beforeBtn = document.getElementById("before-click");

const themeBtn = document.getElementById("theme-button");

const priceMoreBtn = document.getElementById("price-more-btn");

const firstText = document.querySelector(".change-text");
const secondText = document.querySelector("#fun02");
let i = 0;
secondText.style.opacity = 0;

setInterval(() => {
  changeText();
}, 3000);

function changeText() {
  if (i == 0) {
    firstText.style.opacity = 1;
    i++;
  } else if (i == 1) {
    firstText.style.opacity = 0;
    secondText.style.opacity = 1;
    i = 0;
  }
}

function navigateTo(url) {
  // Přidejte třídu na body, která spustí animaci fade-out
  document.body.classList.add("fade-out");

  // Počkejte 300 milisekund (0.3 sekundy) a přejděte na novou stránku
  setTimeout(function () {
    window.location.href = url;
  }, 300);
}

btn.addEventListener("click", () => {
  const textToCopy = "maxmilian.janda@gmail.com"; // ZmÄ›Ĺte na text, kterĂ˝ chcete zkopĂ­rovat

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

themeBtn.addEventListener("click", () => {
  window.alert("Upssss tato funkce není zatím dostupná");
});

priceMoreBtn.addEventListener("click", () => {
  window - alert("Upssss tato funkce není zatím dostupná");
});
