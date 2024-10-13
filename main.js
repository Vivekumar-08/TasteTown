document.querySelector(".menuBtn").addEventListener("click", () => {
    const navBar = document.querySelector(".nav-list");
    navBar.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const navBar = document.querySelector(".nav-list");
        navBar.classList.remove("active");
    });
});
