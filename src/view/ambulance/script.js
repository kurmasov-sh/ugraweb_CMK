$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1364: {
                items: 3,
            }
        },
        margin: 40,
        nav: true,
        navText: ['<span class="gallery__arrow-l"><img src="/src/img/f-arrow-r.svg" alt=""></span>', '<span class="gallery__arrow-r"><img src="/src/img/f-arrow-r.svg" alt=""></span>']
    });
    let a = $('.owl-nav');
    let top = $('.gallery__top');
    top.append(a);
});
