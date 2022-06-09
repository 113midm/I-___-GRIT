// Typinganimation
let no = 0;
setInterval(function () {
  $('.main-page>.section>.center .middle-txt').attr('data-index', ++no % 3);
}, 3000);

// sidebar
$(".main-page > .section > .side > .side-bar > button").mouseenter(function () {
  $(".main-page>.section>.side>.side-bar>.side-menu").addClass("active");
  $(this).addClass("active");
});
$(".main-page>.section>.side>.side-bar>.side-menu").mouseleave(function () {
  $(this).removeClass("active");
  $(".main-page > .section > .side > .side-bar > button").removeClass("active");
});

AOS.init();