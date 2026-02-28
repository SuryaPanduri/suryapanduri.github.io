document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = this.getAttribute("href");

      if (target === "#" || !document.querySelector(target)) return;

      e.preventDefault();

      document.querySelector(target).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Case Study Toggle (Accordion)
  document.querySelectorAll(".case-toggle").forEach(btn => {
    btn.addEventListener("click", () => {

      const card = btn.closest(".case-card");
      const isActive = card.classList.contains("active");

      // Close all cards
      document.querySelectorAll(".case-card").forEach(c => {
        c.classList.remove("active");
        const button = c.querySelector(".case-toggle");
        if (button) {
          button.innerHTML = `View Case Study <i class="fa-solid fa-chevron-down"></i>`;
        }
      });

      // Open clicked card
      if (!isActive) {
        card.classList.add("active");
        btn.innerHTML = `Hide Details <i class="fa-solid fa-chevron-down"></i>`;
      }

    });
  });

});