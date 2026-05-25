document.addEventListener("DOMContentLoaded", () => {
    
    // Innesca l'effetto di comparsa (Fade-In) degli elementi quando entrano nella visuale
    const fadeElements = document.querySelectorAll(".fade-in");

    const appearanceOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Una volta visibile, smetti di osservarlo per mantenere stabilità
                observer.unobserve(entry.target);
            }
        });
    }, appearanceOptions);

    fadeElements.forEach(element => {
        appearanceObserver.observe(element);
    });

    // Cambia opacità alla Navbar allo scroll per miglior contrasto sui contenuti
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
            navbar.style.backgroundColor = "rgba(2, 6, 23, 0.95)";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.backgroundColor = "rgba(2, 6, 23, 0.85)";
        }
    });
});