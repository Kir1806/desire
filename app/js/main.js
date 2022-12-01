$(function () {
    $('.header__button').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close')
    });
    
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close')
    })


    $('.header__button-menu').on('click', function() {
        $('.menu').toggleClass('menu--open')
    });
    
    // $('.rightside-menu__close').on('click', function() {
    //     $('.rightside-menu').addClass('rightside-menu--close')
    // })
    
    $('.top__slider').slick({// настройка slick
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });
    $('.contact-slider').slick({// настройка slick
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
    });
    $('.article-slider__box').slick({// настройка slick
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="./images/arrow-slide-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="./images/arrow-slide-right.svg" alt="arrow-right"></button>'
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });

})