let currentSlide = 0; // Indice de la diapositive actuelle

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (slideIndex >= slides.length) {
        currentSlide = 0; // Reviens à la première diapositive
    } else if (slideIndex < 0) {
        currentSlide = slides.length - 1; // Va à la dernière diapositive
    } else {
        currentSlide = slideIndex; // Met à jour l'indice de la diapositive actuelle
    }
    const offset = -currentSlide * 100; // Calcule le décalage pour afficher la diapositive actuelle
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`; // Applique le décalage
}

function moveSlide(n) {
    showSlide(currentSlide + n); // Appelle showSlide avec l'indice mis à jour
}

// Affiche la première diapositive au chargement
showSlide(currentSlide);
