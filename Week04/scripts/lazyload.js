document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img.lazy");

    const loadImage = (img) => {
        img.src = img.getAttribute("data-src");

        img.onload = () => {
            img.classList.add("loaded"); // triggers fade effect
        };
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(img => {
        observer.observe(img);
    });
});