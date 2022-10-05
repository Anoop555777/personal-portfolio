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

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    else if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
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
  e.preventDefault();
  const href = e.target.getAttribute("href");

  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

// const scrolldown = document.querySelector(".btn--outline");
// scrolldown.addEventListener("click", function (e) {
//   e.preventDefault();
//   const href = e.target.getAttribute("href");

//   document.querySelector(href).scrollIntoView({
//     behavior: "smooth",
//   });
// });

// const headerIcon = document.querySelector(".header__icon");
// headerIcon.addEventListener("click", function (e) {
//   e.preventDefault();

//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

const allSection = document.querySelectorAll(".section");

const observerSectionCallback = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const observerSectionOptions = {
  root: null,
  threshold: 0.2,
};

const sectionObserver = new IntersectionObserver(
  observerSectionCallback,
  observerSectionOptions
);

allSection.forEach((section) => {
  section.classList.add("section--hidden");

  sectionObserver.observe(section);
});

const nav = document.querySelector(".navigation__nav");
const checklist = document.querySelector(".navigation__checkbox");
nav.addEventListener("click", function (e) {
  if (e.target.classList.contains("navigation__link")) {
    checklist.checked = false;
  }
});
