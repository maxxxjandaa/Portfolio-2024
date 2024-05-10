// Animace scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Animace scroll special

const observer02 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("doIt");
    } else {
      entry.target.classList.remove("doIt");
    }
  });
});

const hiddenProcetBar = document.querySelectorAll(".doDoIt");
hiddenProcetBar.forEach((el) => observer02.observe(el));
