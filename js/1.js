 // [+/- num product ]*/
   
    $(function(){
        $('.btn-num-product-up').click(function (e) {
        var numProduct = Number($(this).prev().val()); // lấy giá trị của thàng truoc no va chuyen ve dang so
        $(this).prev().val(numProduct + 1); //tang gia tri thang input  
    });
    $('.btn-num-product-down').click(function (e) {
        var numProduct = Number($(this).next().val());
        if (numProduct > 0) {
            $(this).next().val(numProduct - 1);
        }
    });
    $('.big-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.small-img'
    });
    $('.small-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.big-img',
        nextArrow: '<button class="next-slick2 "><i class="fas fa-angle-right"></i></button>',
        prevArrow: '<button class="prev-slick2"><i class="fas fa-angle-left"></i></button>',
        focusOnSelect: true,
    });

$('.range').slick({
  dots: true,
  infinite: false,
  speed: 300,
  nextArrow: '<button class="next-slick2 "><i class="fas fa-angle-right"></i></button>',
        prevArrow: '<button class="prev-slick2"><i class="fas fa-angle-left"></i></button>',
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  

});
  $('.results > .tutor-content').hide();

            $('div.tags').find('input:checkbox').live('click', function () {
                $('.results > .tutor-content').hide();
                $('div.tags').find('input:checked').each(function () {
                    $('.results > .tutor-content.' + $(this).attr('rel')).show();
                });
            });
  $('.results > .tutor-content').hide();

            $('div.tags').find('input:checkbox').live('click', function () {
                $('.results > .tutor-content').hide();
                $('div.tags').find('input:checked').each(function () {
                    $('.results > .tutor-content.' + $(this).attr('rel')).show();
                });
            });
    
    })



















