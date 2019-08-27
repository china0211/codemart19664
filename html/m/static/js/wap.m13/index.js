
$(document).ready(function() {

  var $navlist = $(".list-container > li");
  var src= $navlist.eq(0).find('.list-arrow').attr('data-img');
  $navlist.eq(0).find('.list-arrow').attr('src',src);
  $('.list-item').eq(0).addClass('cur');
  $("#owl-pro").owlCarousel({
    navigation: true,
    items: 5,
    itemsDesktop: [960, 1],
    itemsDesktopSmall: [720, 1],
    itemsTablet: [600, 1],
    itemsMobile: false
  });
  $("#owl-pro2").owlCarousel({
    navigation: true,
    items: 5,
    itemsDesktop: [960, 1],
    itemsDesktopSmall: [720, 1],
    itemsTablet: [600, 1],
    itemsMobile: false,
    navigationText : ["", ""]
  });
  var top = $('.nav-container').offset().top;
  $(window).on("scroll",function () {
    if($(window).scrollTop() >= top) {
      $('.nav-container').css('position','fixed');
    } else {
      $('.nav-container').css('position','relative');
    }
  });
});
