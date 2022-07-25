var menu = $('.navbar').offset().top;
$(window).scroll(function(){
    var scroll = $(this).scrollTop();


    if(scroll > menu){
        $('.navbar').addClass('menu_fix');
    }

    else{
        $('.navbar').removeClass('menu_fix');
    }
});

$(function(){
     // banner-slider
     $('.main_banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      });
      //   about-slider
    $('.about_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
      });
       // counter-up 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
     //   slider
     $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '.left_arrow',
        nextArrow: '.right_arrow',
      });
})