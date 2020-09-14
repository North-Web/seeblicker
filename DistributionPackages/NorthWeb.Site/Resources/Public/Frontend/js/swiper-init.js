var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    autoplay: {
        delay: 7000,
    },
    coverflowEffect: {
        rotate: 0,
        stretch: -120,
        depth: 300,
        modifier: 2,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        992: {
            slidesPerView: 2,
        },
    }
});
$(function () {
    $('.swiperText').matchHeight({
        byRow: false,
        property: 'height',
        target: null,
        remove: false
    });
});