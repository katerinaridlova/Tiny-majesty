/* =========================================================
   LIGHTBOX – GALERIE FOTOGRAFIÍ
   ========================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const galleryImages = Array.from(
    document.querySelectorAll(".gallery-lightbox-image")
);

let currentImageIndex = 0;


/* OTEVŘENÍ */

galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentImageIndex = index;

        openLightbox();

    });

});


function openLightbox() {

    if (!galleryImages.length) return;

    const image = galleryImages[currentImageIndex];

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* ZAVŘENÍ */

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


lightboxClose.addEventListener("click", closeLightbox);


/* PŘEDCHOZÍ */

lightboxPrev.addEventListener("click", () => {

    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }

    openLightbox();

});


/* DALŠÍ */

lightboxNext.addEventListener("click", () => {

    currentImageIndex++;

    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }

    openLightbox();

});


/* KLIK MIMO FOTOGRAFII */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


/* KLÁVESNICE */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowLeft") {
        lightboxPrev.click();
    }

    if (event.key === "ArrowRight") {
        lightboxNext.click();
    }

});
