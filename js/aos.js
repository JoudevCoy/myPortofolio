window.addEventListener("DOMContentLoaded", () => {
  
  
  //fadein
  const fadeinObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadein');
        entry.target.style.transitionDelay = entry.target.getAttribute("data-aosDelay") + "ms";
      }
      else {
        entry.target.classList.remove('fadein');
      }
    });
  });
  const fadeinEl = document.querySelectorAll('.fadein-hidden');
  fadeinEl.forEach((el) => fadeinObs.observe(el));

  //fadeleft
  const fadeleftObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeleft');
        entry.target.style.transitionDelay = entry.target.getAttribute("data-aosDelay") + "ms";
      }
      else {
        entry.target.classList.remove('fadeleft');
      }
    });
  });
  const fadeleftEl = document.querySelectorAll('.fadeleft-hidden');
  fadeleftEl.forEach((el) => fadeleftObs.observe(el));


  //faderight
  const faderightObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('faderight');
        entry.target.style.transitionDelay = entry.target.getAttribute("data-aosDelay") + "ms";
      }
      else {
        entry.target.classList.remove('faderight');
      }
    });
  });
  const faderightEl = document.querySelectorAll('.faderight-hidden');
  faderightEl.forEach((el) => faderightObs.observe(el));


  //fadebottom
  const fadebottomObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadebottom');
        entry.target.style.transitionDelay = entry.target.getAttribute("data-aosDelay") + "ms";
      }
      else {
        entry.target.classList.remove('fadebottom');
      }
    });
  });
  const fadebottomEl = document.querySelectorAll('.fadebottom-hidden');
  fadebottomEl.forEach((el) => fadebottomObs.observe(el));







  // Lazy Load
  const lazyLoadImg = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        var lazyImg = entry.target;
        lazyImg.src = lazyImg.getAttribute("data-lazySrc");
        lazyImg.classList.remove("lazyLoad");
        return
      }
    });
  });


  const lazyLoadEl = document.querySelectorAll('img.lazyLoad');
  lazyLoadEl.forEach((el) => lazyLoadImg.observe(el));
});