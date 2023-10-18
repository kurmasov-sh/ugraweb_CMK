$(document).ready(function () {
    var block_search = $('.header-search');
    var icon_search = $('.main-search__icon');
    var block_tel = $('.header-top__tel');
    $(document).click(function (e) {
        if ($(e.target).closest(".header-search").length || $(e.target).closest(".main-search__icon").length) {
            block_tel.hide();
            block_search.css('display', 'flex');
            icon_search.hide();
            return;
        }

        block_tel.show();
        block_search.hide();
        icon_search.show();
    });

    var btn_block_phone = $('.header-line__title');
    var block_hidden = $('.header-line__hidden');
    btn_block_phone.click(function () {
        block_hidden.slideToggle(300);
        btn_block_phone.toggleClass('arrow-b');
        return false;
    });
})