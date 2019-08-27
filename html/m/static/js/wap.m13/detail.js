$(document).ready(function() {
  $("#owl-pro2").owlCarousel({
    navigation: true,
    items: 3,
    itemsDesktop: [960, 3],
    itemsDesktopSmall: [720, 3],
    itemsTablet: [600, 3],
    itemsMobile: false,
    navigationText : ["", ""]
  });
  $('.pimg img').on('click',function(){
    var src=$(this).attr('src');
    $('.details-bigpic').attr('src',src)
  });
});