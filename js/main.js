$(document).ready(function() {
    $("#btn-toggle").click(function(e) {
        $(this).toggleClass("fa-times fa-bars");
        $("nav.menu").toggleClass("active");
    });

    $(".sl-banner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: $('.btn_prev3'),
        nextArrow: $('.btn_next3'),
    });

    $(".slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: $('.btn_prev'),
        nextArrow: $('.btn_next'),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]

    });
    $(".slider2").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: $('.btn_prev2'),
        nextArrow: $('.btn_next2'),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]

    });
});