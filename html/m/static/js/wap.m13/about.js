/**
 * Created by js on 2017/2/8.
 */

$(document).ready(function() {
  var $navlist = $(".list-container > li");
  var src= $navlist.eq(0).find('.list-arrow').attr('data-img');
  $navlist.eq(1).find('.list-arrow').attr('src',src);
  $('.list-item').eq(1).addClass('cur');
  $("#owl-pro").owlCarousel({
    navigation: true,
    items: 5,
    itemsDesktop: [960, 1],
    itemsDesktopSmall: [720, 1],
    itemsTablet: [600, 1],
    itemsMobile: false
  });
});
