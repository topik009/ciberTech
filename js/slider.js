document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 4000,
    pauseOnHover: false,
    arrows: false,
    }).mount();
});
