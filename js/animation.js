//fadein
const fadeinObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('fadein');
    }
  });
});


const fadeinEl = document.querySelectorAll('.fadein-hidden');
fadeinEl.forEach((el) => fadeinObs.observe(el));

//fadeleft
const fadeleftObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('fadeleft');
    }
  });
});


const fadeleftEl = document.querySelectorAll('.fadeleft-hidden');
fadeleftEl.forEach((el) => fadeleftObs.observe(el));


//faderight
const faderightObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('faderight');
    }
  });
});


const faderightEl = document.querySelectorAll('.faderight-hidden');
faderightEl.forEach((el) => faderightObs.observe(el));




// Lazy Load
const lazyLoadImg = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      var lazyImg = entry.target;
      lazyImg.src = lazyImg.getAttribute("data-lazySrc");
      lazyImg.classList.remove("lazyLoad");
      return 
    }
  });
});


const lazyLoadEl = document.querySelectorAll('img.lazyLoad');
lazyLoadEl.forEach((el) => lazyLoadImg.observe(el));


// Effect on navbar
const navLogo = document.querySelector(".navbar-logo");
const heroTitleObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting !== true) {
      navLogo.classList.add("show");
    } else {
      navLogo.classList.remove("show");
    }
  });
});

const heroTitleEl = document.querySelectorAll(".hero-title");
window.addEventListener("scroll", () => {
  heroTitleEl.forEach((el) => heroTitleObs.observe(el));
});