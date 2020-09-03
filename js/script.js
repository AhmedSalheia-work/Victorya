$(document).ready(function (){

    $(window).on('scroll',function (){
        if ($(window).innerWidth() <= 769)
        {
            if ($(window).scrollTop() >= window.innerHeight)
            {
                $('nav:nth-child(1)').addClass('scroll');
            }else {
                $('nav:nth-child(1)').removeClass('scroll');
            }
        }
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30
    });

});