// Swiper 2 — sempre visível, com layout responsivo
const swiper2 = new Swiper('.swiper-2', {
    loop: true,
    pagination: {
        el: '.swiper-pagination-2',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-custom', // Usando o botão customizado
        prevEl: '.swiper-button-prev-custom', // Usando o botão customizado
    },
    breakpoints: {
        390: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 17,
        },
    },
});

// Swiper 1 — só no mobile, instanciado condicionalmente
let swiper1;

function handleMobileSwiper() {
    if (window.innerWidth <= 768 && !swiper1) {
        swiper1 = new Swiper('.swiper-1', {
            loop: true,
            pagination: {
                el: '.swiper-pagination-1',
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 10,
        });
    } else if (window.innerWidth > 768 && swiper1) {
        swiper1.destroy(true, true);
        swiper1 = null;
    }
}

handleMobileSwiper();
window.addEventListener('resize', handleMobileSwiper);
