let no = 0;
setInterval(function () {
  $('.main-page>.section>.center .middle-txt').attr('data-index', ++no % 3);
}, 3000);

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

new fullpage('#fullpage');

AOS.init();

$(".am-page #fullpage>.section-4 > div > .grit-sub > .logo-box > .text-box > div").mouseenter(function () {
  $this = $(this);
  $this.css("color", "#f8d554");

  if (!$this.hasClass("expansion")) {
    $this.css("border-bottom", "3px solid #f8d554");
  } else {
    $this.css("border-top", "3px solid #f8d554");
  }

  if ($this.hasClass("basic")) {
    $(".am-page #fullpage>.section-4 > div > .grit-sub > .logo-box > .logo > .basic > path").attr('fill', '#F8D554');
  } else if ($this.hasClass("turtle")) {
    $(".am-page #fullpage>.section-4 > div > .grit-sub > .logo-box > .logo > .turtle > path").attr('fill', '#F8D554');
  } else {
    $(".am-page #fullpage>.section-4 > div > .grit-sub > .logo-box > .logo path").attr('fill', '#F8D554');
  }
});

$(".am-page #fullpage>.section-4 > div > .grit-sub > .logo-box > .text-box > div").mouseleave(function () {
  $this = $(this);
  $this.css("color", "#ebecf1");
  if (!$this.hasClass("expansion")) {
    $this.css("border-bottom", "3px solid #ebecf1");
  } else {
    $this.css("border-top", "3px solid #ebecf1");
  }

  if ($this.hasClass("basic")) {
    $(".am-page #fullpage>.section-4 > div > .grit-sub > .logo-box > .logo > .basic > path").attr('fill', '#ebecf1');
  } else if ($this.hasClass("turtle")) {
    $(".am-page #fullpage>.section-4 > div > .grit-sub > .logo-box > .logo > .turtle > path").attr('fill', '#ebecf1');
  } else {
    $(".am-page #fullpage>.section-4 > div > .grit-sub > .logo-box > .logo path").attr('fill', '#ebecf1');
  }
});