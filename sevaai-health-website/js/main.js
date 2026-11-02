(() => {
  "use strict";
  const toggle = document.querySelector(".menu");
  const nav = document.querySelector("#nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
    }));
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }
  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, obs) => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); }
    }), { threshold: 0.12 });
    items.forEach(item => observer.observe(item));
  } else items.forEach(item => item.classList.add("visible"));

  const form = document.querySelector("#contact-form");
  const note = document.querySelector("#form-note");
  if (form) form.addEventListener("submit", event => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (!name || !email || !message) { if (note) note.textContent = "Please complete all fields."; return; }
    const recipient = "[EMAIL]"; // Replace with the real inbox in index.html and here.
    const subject = encodeURIComponent("SevaAI Health enquiry from " + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    if (note) note.textContent = "Your email app should open with the message ready to send.";
  });
})();
