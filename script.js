// DARK / LIGHT MODE
function toggleTheme() {
    document.body.classList.toggle("light");
}

// SCROLL REVEAL
function revealOnScroll() {
    let elements = document.querySelectorAll(".reveal");

    for (let el of elements) {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
