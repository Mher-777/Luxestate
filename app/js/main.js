$(function () {
    let a = 0;
    $(window).scroll(function () {
        var oTop = $('.our-company__statistics').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.our-company__number').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }

                    });
            });
            a = 1;
        }
    });

    $('.agents__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'ease-in',
        speed: 400,
        autoplay: true,
        autoplaySpeed: 1200,
        centerPadding: '0',
        pauseOnHover: true,
        rows: 0,
        
    });

    $('.appartments__item').slice(0, 6).show();
    $('.appartments__bottom-btn').on('click', function (e) {
        e.preventDefault();
        $('.appartments__item:hidden').slice(0, 3).slideDown();
    });

})