function MainPage_init() {
  // Typinganimation
  let no = 0;
  setInterval(function () {
    $('.main-page>.section>.center .middle-txt').attr('data-index', ++no % 3);
  }, 3000);

  // sidebar
  $(".main-page > .section > .side > .side-bar > button").mouseenter(function () {
    $(".main-page>.section>.side>.side-bar>.side-menu").addClass("active");
    $(this).addClass("active");
    $(".main-page .header_menu>ul").css("opacity", "0");
    $(".main-page>.section>.center>.txt-animation-box").css("opacity", "0");
  });
  $(".main-page>.section>.side>.side-bar>.side-menu").mouseleave(function () {
    $(this).removeClass("active");
    $(".main-page > .section > .side > .side-bar > button").removeClass("active");
    $(".main-page .header_menu>ul").css("opacity", "1");
    $(".main-page>.section>.center>.txt-animation-box").css("opacity", "1");
  });
};

AOS.init();
MainPage_init();