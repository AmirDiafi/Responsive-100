/*Global $, documnet, console*/

$(document).ready(function () {
    'use strict';
    // Adjust Slider Height
    var wH     = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
    $('.slider .carousel-item').height(wH - (upperH + navH));

    $(window).resize(function () {
        var wH     = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
        $('.slider .carousel-item').height(wH - (upperH + navH));
        $('.why-us img').height($('.why-us .info').innerHeight());
    })

    // Start Shuffle Images

    $('.featrud-work ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('shuffle') === 'all') {
            $('.shuffle-imgs .shuffle').css({
                opacity: 1
            })
        } else {
            $('.shuffle-imgs .shuffle').css({
                opacity: .1
            });
            $($(this).data('shuffle')).css({
                opacity: 1
            })
        }

    })

    // Start Check Client

    var prev = $('.testimonials .carousel-control-prev'),
        next = $('.testimonials .carousel-control-next'),
        myCheckClient = setInterval(checkClient, 500);

    function checkClient() {
        $('.testimonials .carousel-inner .carousel-item.active').is(':first-of-type') ? next.addClass('active') : next.removeClass('active'); 
        $('.testimonials .carousel-inner .carousel-item.active').is(':last-of-type') ? prev.addClass('active') : prev.removeClass('active');
        if ($('.testimonials .carousel-inner .carousel-item.active').is(':nth-of-type(2)')) {
            next.addClass('active');
            prev.addClass('active')
        } 
        if ($('.testimonials .carousel-inner .carousel-item.active').is(':nth-of-type(3)')) {
            next.addClass('active');
            prev.addClass('active')
        }
    }

    checkClient()

    // start Adjust The Height Of Why Us Content

    $('.why-us img').height($('.why-us .info').innerHeight());
    

    
})