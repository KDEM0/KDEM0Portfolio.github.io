const links = document.querySelectorAll(".navbar a");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        // === Image Popup Logic ===
        const aboutImages = document.querySelectorAll(".about-images .image-placeholder.small img");
        const imagePopup = document.getElementById("image-popup");
        const popupImg = imagePopup.querySelector("img");

        aboutImages.forEach(img => {
            img.addEventListener("click", () => {
                popupImg.src = img.src;
                imagePopup.classList.add("active");
            });
        });

        imagePopup.addEventListener("click", () => {
            imagePopup.classList.remove("active");
        });


        // Remove current active page
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        const targetId = link.getAttribute("data-page");

        pages.forEach(page => {
            if (page.id === targetId) {
                page.classList.add("active", "fade-in");
            } else {
                page.classList.remove("active", "fade-in");
            }
        });
    });
});



// Loading screen removal
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("fade-out");
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 500); // matches CSS fade duration
});



