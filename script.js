/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
        navbar.style.padding = "15px 8%";
    } else {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
        navbar.style.padding = "20px 8%";
    }

    lastScroll = currentScroll;
});


/* ================= SMOOTH FADE-IN ON SCROLL ================= */

const sections = document.querySelectorAll(".section");

const reveal = () => {
    const triggerPoint = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", reveal);

/* Initial hidden state */
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
});


/* ================= ACTIVE NAV LINK ================= */

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


/* ================= CONTACT FORM INTERACTION ================= */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("✨ Thank you! Your message has been sent.");

    form.reset();
});


/* ================= SMOOTH BUTTON SCROLL ================= */

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});
