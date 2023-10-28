const slider = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        870: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1130: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1380: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
})

const blogSlider = new Swiper('.blog__swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
    },
})
