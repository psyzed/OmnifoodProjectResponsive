const yearEl = document.querySelector(".year");
const headerEl = document.querySelector(".header");
const mobileNavBtn = document.querySelector(".btn-mobile-nav");
const allLinks = document.querySelectorAll("a:link");
const heroSectionEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      headerEl.classList.add("sticky-nav");
      heroSectionEl.style.marginTop = "9.6rem";
    } else {
      headerEl.classList.remove("sticky-nav");
      heroSectionEl.style.marginTop = "0";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(document.querySelector(".section-hero"));

mobileNavBtn.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

yearEl.textContent = new Date().getFullYear();

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.remove("nav-open");
  });
});
