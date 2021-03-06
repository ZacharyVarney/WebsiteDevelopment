const navSlide = () => {
    const burger = document.querySelector(".burger-button");
    const nav = document.querySelector(".nav-button-container");
    const navLinks = document.querySelectorAll(".nav-button");
    const socialLinks = document.querySelectorAll(".social-link");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `nav-link-fade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        socialLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `social-fade 0.5s ease forwards ${index / 7 + 1.0}s`;
            }
        });

        burger.classList.toggle("toggle");

    });
}

navSlide();