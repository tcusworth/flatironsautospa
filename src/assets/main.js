const header = document.querySelector("[data-header]");
const slides = Array.from(document.querySelectorAll(".hero-slide"));
const revealItems = Array.from(document.querySelectorAll(".reveal"));
const contactForm = document.querySelector("[data-contact-form]");

const syncHeader = () => {
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 16 || header.dataset.solidHeader === "true");
  }
};

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

if (slides.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("is-active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("is-active");
  }, 5200);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -70px 0px"
  }
);

revealItems.forEach((item) => observer.observe(item));

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const status = contactForm.querySelector("[data-form-status]");
    const button = contactForm.querySelector("button[type=submit]");
    const name = contactForm.elements.name.value.trim();
    const say = (text) => {
      if (status) status.textContent = text;
    };

    if (button) button.disabled = true;
    say("Sending...");

    try {
      // Netlify Forms accepts a urlencoded POST to the form's action.
      const response = await fetch(contactForm.getAttribute("action") || "/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(contactForm)).toString(),
      });
      if (!response.ok) throw new Error(`Form request failed: ${response.status}`);
      contactForm.reset();
      say(`Thanks${name ? `, ${name}` : ""}. We received your request and will be in touch soon.`);
    } catch (error) {
      say("Sorry, that didn't go through. Please call (303) 210-7631 to book.");
    } finally {
      if (button) button.disabled = false;
    }
  });
}
