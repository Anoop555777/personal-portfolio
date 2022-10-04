const header = document.querySelector(".header");
const mainNav = document.querySelector(".main-nav");
const headingLogo = document.querySelector(".heading__logo");
const sectionHero = document.querySelector(".section-hero");

const handerHover = function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    const targetElement = [
      ...e.target.closest(".main-nav-list").children,
    ].filter((el) => el.firstElementChild !== e.target);

    targetElement.forEach((el) => (el.style.opacity = this));
    headingLogo.style.opacity = this;
  }
};

mainNav.addEventListener("mouseover", handerHover.bind(0.5));

mainNav.addEventListener("mouseout", handerHover.bind(1));

mainNav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("main-nav-link")) {
    const href = e.target.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    else {
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  }
});

const navSize = getComputedStyle(header).height;

const observerCallback = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navSize}`,
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

observer.observe(sectionHero);

const swapSkill = document.querySelectorAll(".skill-grid");

const skillObserverCallback = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.add("swap");

  observer.unobserve(entry.target);
};

const skillObserverOptions = {
  root: null,
  threshold: 1,
};

const skillsObserver = new IntersectionObserver(
  skillObserverCallback,
  skillObserverOptions
);

swapSkill.forEach((skill) => skillsObserver.observe(skill));

const scrollUp = document.querySelector(".footer__icon");
scrollUp.addEventListener("click", function (e) {
  const href = e.target.getAttribute("href");
  console.log(href);

  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
