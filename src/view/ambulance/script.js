$(document).ready(function(){
    let leftBtn = '<div class="btn-arrow arrow-l"><span></span></div>'
    let rightBtn = '<div class="btn-arrow arrow-r"><span></span></div>'
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
        navText: [leftBtn, rightBtn]
    });
    let a = $('.owl-nav');
    let top = $('.slider__top');
    top.append(a);
});
