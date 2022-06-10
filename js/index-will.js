$(window).ready(function(){
  setTimeout(function(){
    $("#will-loading").fadeOut();
    $("html, body").css({
      'overflow-y': 'auto',
      'overflow-x': 'hidden'
    });
  }, 2100);
});

AOS.init();
const swiper = new Swiper('.swiper', {
  mousewheel: true,
  speed : 1000,
});