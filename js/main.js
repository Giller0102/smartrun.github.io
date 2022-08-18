$(document).ready(function(){
    $('.slider_img_wrapper').slick({
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-prev"><img src="img/interactive elements/chevron right solid.png" alt="button"></button>',
        prevArrow: '<button type="button" class="slick-next"><img src="img/interactive elements/chevron left solid.png" alt="button"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }
    );
  });


