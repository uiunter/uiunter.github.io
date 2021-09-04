
// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         infinite: true,
//         speed: 1200,
//         slidesToShow: 1,
//         //adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',
//         responsive: [
//             {
//               breakpoint: 992,
//               settings: {
//                     dots: true,
//                     arrows: false
//               }
//             }
//         ]
//       });
// });

const slider = tns({
    container: '.carousel__inner',
    controls: false,
    nav: false,
    items: 1,
    slideBy: 'page',
    autoPlay: false,
  });

  document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };

  document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };

  $(document).ready(function(){

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)',
       function() {
        $(this)
          .addClass('catalog__tab_active').siblings()
          .removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content')
          .removeClass('catalog__content_active').eq($(this).index())
          .addClass('catalog__content_active');
      });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i)
                .toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i)
                .toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut();
    });

    $('.overlay').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut();
    });

    $('.button_mini').on('click', function() {
        $('.overlay, #order').fadeIn();
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle')
            .eq(i).text());
        });
    });
      
});