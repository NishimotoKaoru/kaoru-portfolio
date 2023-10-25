jQuery(function ($) {
    //タイトル背景のスライドショー
    $('.mv-container').bgSwitcher({
        images: ['img/susuki.jpg', 'img/bike_r3.jpg', 'img/kanure.jpg',
            'img/fuji.jpg', 'img/engetujima.jpg', 'img/kisshu.jpg',], // 切り替える背景画像を指定
    });
});

$(function () {

    //ページ内スクロール
    var navHeight = $(".header").outerHeight();

    $('a[href^="#"]').on("click", function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - navHeight;
        $("html, body").animate({ scrollTop: position, }, 300, "swing");
        return false;
    });

    //ページトップ
    $("#js-page-top").on("click", function () {
        $("body,html").animate({ scrollTop: 0, }, 300);
        return false;
    });

});