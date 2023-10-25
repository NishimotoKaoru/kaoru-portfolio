jQuery(function ($) {
    //�^�C�g���w�i�̃X���C�h�V���[
    $('.mv-container').bgSwitcher({
        images: ['img/susuki.jpg', 'img/bike_r3.jpg', 'img/kanure.jpg',
            'img/fuji.jpg', 'img/engetujima.jpg', 'img/kisshu.jpg',], // �؂�ւ���w�i�摜���w��
    });
});

$(function () {

    //�y�[�W���X�N���[��
    var navHeight = $(".header").outerHeight();

    $('a[href^="#"]').on("click", function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - navHeight;
        $("html, body").animate({ scrollTop: position, }, 300, "swing");
        return false;
    });

    //�y�[�W�g�b�v
    $("#js-page-top").on("click", function () {
        $("body,html").animate({ scrollTop: 0, }, 300);
        return false;
    });

});