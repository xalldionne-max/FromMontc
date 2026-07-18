const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const memoryBtn = document.getElementById("memoryBtn");

/* OPEN WEBSITE */

openBtn.addEventListener("click", () => {

    music.play();

    /* LOVE + STAR FALLING */

    for (let i = 0; i < 80; i++) {

        const item = document.createElement("div");

        const icons = [
            "💌",
            "🫧",
            "🤍",
            "♡"
        ];

        item.innerHTML =
            icons[Math.floor(Math.random() * icons.length)];

        item.classList.add("falling");

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.fontSize =
            (Math.random() * 20 + 20) + "px";

        item.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 4000);

    }

    /* TRANSITION */

    setTimeout(() => {

        opening.style.opacity = "0";
        opening.style.transition = "1s";

        setTimeout(() => {

            opening.style.display = "none";
            mainContent.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 1000);

    }, 2000);

});

/* MEMORY BUTTON */

memoryBtn.addEventListener("click", () => {

    document.getElementById("memories")
        .scrollIntoView({
            behavior: "smooth"
        });

});

/* MUSIC BUTTON */

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";

    } else {

        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";

    }

});

/* AUTO SLIDER */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 3000);

/* FLOATING HEARTS */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const icons = ["🫧", "♡", "💌"];

    heart.innerHTML =
        icons[Math.floor(Math.random() * icons.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 18 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 8 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);

}

setInterval(createHeart, 700);

/* INITIAL */

showSlide(0);
