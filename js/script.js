$(window).scroll(function(){
  $scrollamount = $(window).scrollTop()
  if($scrollamount > 200){
    $(".menu").addClass("sticky")
  }else{
    $(".menu").removeClass("sticky")
  }
  if($scrollamount > 1000){
    $(".btop").fadeIn()
  }else{
    $(".btop").fadeOut()
  }
})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },) 
})
// banner part 
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    prevArrow: '<i class="fa fa-arrow-circle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-circle-right next" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
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
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding:0,
    prevArrow: '<i class="fa fa-angle-up sprev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-down snext" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
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
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]

  });

  $('.testi-slider .left').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding:0,
    prevArrow: '<i class="fa fa-angle-up sprev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-down snext" aria-hidden="true"></i>',
    asNavFor: '.testi-slider .right-slide'

  });
  $('.testi-slider .right-slide').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding:0,
    arrows:false,
    asNavFor: '.testi-slider .left'
  });
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});