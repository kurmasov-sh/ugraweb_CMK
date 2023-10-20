$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 40,
        nav: true,
        navText: ['<span class="gallery__arrow-l"><img src="/src/img/f-arrow-r.svg" alt=""></span>', '<span class="gallery__arrow-r"><img src="/src/img/f-arrow-r.svg" alt=""></span>']
    });
    let a = $('.owl-nav');
    let top = $('.gallery__top');
    top.append(a);
});
