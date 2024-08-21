document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var backgroundMusic = document.getElementById('background-music');
    var temporaryMusic = document.getElementById('temporary-music');

    // Reproduce la música inicial cuando se carga la página
    if (backgroundMusic) {
        backgroundMusic.play();
    }

    // Detiene la música inicial y reproduce la canción temporal cuando se hace clic en un episodio
    document.querySelector('.swiper-container').addEventListener('click', function (event) {
        if (backgroundMusic) {
            backgroundMusic.pause();  // Detiene la música de fondo cuando se hace clic en un episodio
        }
        if (temporaryMusic) {
            temporaryMusic.pause();  // Asegura que la canción temporal se detenga
        }
    });

    // Reproduce la música inicial cuando se hace clic fuera del carousel
    document.addEventListener('click', function (event) {
        var carousel = document.querySelector('.swiper-container');
        if (!carousel.contains(event.target)) {
            if (backgroundMusic) {
                backgroundMusic.play();  // Reanuda la música de fondo cuando se hace clic fuera del carousel
            }
        }
    });
});