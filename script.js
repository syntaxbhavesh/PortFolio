/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

});

/* ==========================================
   CLOSE MENU AFTER CLICK
========================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});

/* ==========================================
   HEADER SHADOW
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   TESTIMONIAL SLIDER
========================================== */

const track = document.querySelector(".testimonial-track");

if (track) {

    const cards = [...track.children];

    if (cards.length > 1) {

        cards.forEach(card => {

            track.appendChild(card.cloneNode(true));

        });

        let index = 0;

        const cardWidth = cards[0].offsetWidth + 30;

        function slideTestimonials() {

            index++;

            track.style.transition = "transform .6s ease";

            track.style.transform =
                `translateX(-${index * cardWidth}px)`;

            if (index >= cards.length) {

                setTimeout(() => {

                    track.style.transition = "none";

                    track.style.transform = "translateX(0px)";

                    index = 0;

                }, 650);

            }

        }

        let slider = setInterval(slideTestimonials, 4000);

        track.addEventListener("mouseenter", () => {

            clearInterval(slider);

        });

        track.addEventListener("mouseleave", () => {

            slider = setInterval(slideTestimonials, 4000);

        });

    }

}

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
    ".service-card, .project, .testimonial-card, .stat-box, .hero-content, .hero-image"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";

    observer.observe(item);

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        window.scrollTo({

            top: target.offsetTop - 80,

            behavior: "smooth"

        });

    });

});

/* ==========================================
   HERO FLOAT EFFECT
========================================== */

const badge = document.querySelector(".hire-badge");

window.addEventListener("mousemove", (e) => {

    if (!badge) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    badge.style.transform = `translate(${x}px, ${y}px)`;

});

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".circle-btn, .hello-btn").forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        const size = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        ripple.style.width = ripple.style.height = size + "px";

        ripple.style.left =
            e.clientX -
            this.getBoundingClientRect().left -
            size / 2 +
            "px";

        ripple.style.top =
            e.clientY -
            this.getBoundingClientRect().top -
            size / 2 +
            "px";

        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.35)";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple .6s linear";
        ripple.style.pointerEvents = "none";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ==========================================
   RIPPLE KEYFRAME
========================================== */

const style = document.createElement("style");

style.innerHTML = `
@keyframes ripple{
    to{
        transform:scale(4);
        opacity:0;
    }
}
.circle-btn,
.hello-btn{
    overflow:hidden;
    position:relative;
}
`;

document.head.appendChild(style);

/* ==========================================
   END
========================================== */