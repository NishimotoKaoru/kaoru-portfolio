jQuery(function ($) {
    //タイトル背景のスライドショー
    $('.mv-container').bgSwitcher({
        images: ['img/susuki.jpg', 'img/bike_r3.jpg', 'img/kanure.jpg',
            'img/fuji.jpg', 'img/engetujima.jpg', 'img/kisshu.jpg',], // 切り替える背景画像を指定
    });
});

const defaultOptions = {
    // ドットインジケーターの表示
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // 前後スライドボタンを表示
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true, // ループの有効化
}

// デフォルトの表示
const swiper = new Swiper(".sample-swiper .swiper-container", {
    ...defaultOptions,
  });
  
// カバーフローエフェクト
const swiperCoverflow = new Swiper(".sample-swiper-coverflow .swiper-container", {
    ...defaultOptions,

    loop: true, // ループの有効化
    slidesPerView: 1.6, // 表示するスライドの枚数
    centeredSlides: true, // スライドを中央揃えを有効化
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0, // スライドの回転角度
        stretch: 50, // スライドの間隔（px単位）
        depth: 200, // 奥行きの設定（translateをZ方向にpx単位で移動）
        slideShadows: true, // 先頭スライドの影を有効化
    },
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
