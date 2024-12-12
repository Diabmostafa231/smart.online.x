const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true, // Corrected typo
        clickable: true,
    },
    autoplay: {
        delay: 2500
    }, // Added missing comma
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

