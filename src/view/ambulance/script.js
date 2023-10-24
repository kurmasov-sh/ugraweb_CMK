$(document).ready(function(){
    let leftBtn = '<svg class="slider__arrow-l" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M3.75 15L26.25 15L3.75 15ZM26.25 15L15.625 25.625L26.25 15ZM26.25 15L15.625 4.375L26.25 15Z" fill="#597D69"/>\n' +
        '<path d="M3.75 15L26.25 15M26.25 15L15.625 25.625M26.25 15L15.625 4.375" stroke="#597D69" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n'
    let rightBtn = '<svg class="slider__arrow-r" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M3.75 15L26.25 15L3.75 15ZM26.25 15L15.625 25.625L26.25 15ZM26.25 15L15.625 4.375L26.25 15Z" fill="#597D69"/>\n' +
        '<path d="M3.75 15L26.25 15M26.25 15L15.625 25.625M26.25 15L15.625 4.375" stroke="#597D69" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n'
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
