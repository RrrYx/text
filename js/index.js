$(function () {
    $('.infomation').on('mouseover mouseleave', function (e) {
        if (e.type == 'mouseover') {
            $(this).children('.in').show();
        } else if (e.type == 'mouseleave') {
            $(this).children('.in').hide();
        }
    })
    
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        speed: 2000,
        loop: true,
        observer: true,
        observeParents: true,
        autoplayDisableOnInteraction: false,
        autoplay: 1500
    });

    $(".section").children().hide();
    var h = window.innerHeight || document.documentElement.clientHeight;
    if (h >= $(".section").eq(0).offset().top) {
        $(".section").eq(0).children().show();
    }
    $(window).on(' pageshow resize scroll', function () {
        var w = $(window).scrollTop();
        $(".section").each(function () {
            if (w >= $(this).offset().top - h + 10) {
                $(this).children().stop().fadeIn(500);
            }
        });
    })
    $("#xchange").click(function () {
        $('.pright li').each(function () {
            var xleft = $(this).position().left;
            var l = $(this).children("div.content").length - 1;
            if (xleft == "-" + l * 620) {
                $(this).animate({
                    left: "0"
                });
            } else {
                $(this).animate({
                    left: xleft - 620
                });
            }
        })
    })
    var oLi = $('.nav-category').find('li');
    oLi.hover(function () {
        $(this).find('span').stop().animate({
            bottom: 0
        }, 200)
    }, function () {
        var h = $(this).find('span').height();
        $(this).find('span').stop().animate({
            bottom: -h
        }, 200);
    })
    var c = document.documentElement.clientWidth;
    var b = document.documentElement.clientWidth / 2 - 600;
    $(".link_m").width(c);
    $(".link_m").css({
        "right": '-' + b + 'px'
    });
    $(".flink").hover(function () {
        $('.link_m').show();
        $(this).addClass("cur");
    }, function () {
        $('.link_m').hide();
        $(".flink").removeClass("cur");
    })
    $(".close-ad").on("click", function () {
        $(".right-bt-ad").fadeOut();
    })
    $(".table-cell img").on("click", function () {
        window.location.href = $(".table-cell a").attr("href");
    });
});