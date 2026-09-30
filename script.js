// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {

  nav.classList.toggle("open");

});


// ================= CLOSE MENU =================

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    nav.classList.remove("open");

  });

});


// ================= DEMO BUTTON =================

function showDemoMessage() {

  const toast = document.getElementById("toast");

  toast.classList.add("show");

  setTimeout(function () {

    toast.classList.remove("show");

  }, 3500);

}


// ================= SCROLL ANIMATION =================

const sections = document.querySelectorAll(
  ".experience-grid, .large-image, .program-card, .statement-content, .contact-box"
);


const observer = new IntersectionObserver(

  function (entries) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },

  {
    threshold: 0.15
  }

);


sections.forEach(function (section) {

  section.classList.add("reveal");

  observer.observe(section);

});
