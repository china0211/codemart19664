
$(document).ready(function(){

  $('.pageone').addClass('pageactive');

  $('.pageone').click(function(){
    goOne();
  });
  $('.pagetwo').click(function(){
    goTwo();
  });

  $('.page-front').click(function(){
    goOne();
  });
  $('.page-behind').click(function(){
    goTwo();
  });

  function goOne(){
    $('.ninelist-one').show();
    $('.ninelist-two').hide();
    $('.page-li').removeClass('pageactive');
    $('.pageone').addClass('pageactive');
  }
  function goTwo(){
    $('.ninelist-one').hide();
    $('.ninelist-two').show();
    $('.page-li').removeClass('pageactive');
    $('.pagetwo').addClass('pageactive');
  }
});