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

function AmPage_init() {

  //fullpage
  new fullpage('#fullpage', {
    afterLoad: function (item) {
      addActive(item);
    },
    anchors: ['section1', 'section2', 'section3', 'section4']
  });

  function addActive(item) {
    $(".am-page #fullpage>.section-2.active .contents-box>div").find("span").addClass("active");
    $(".am-page #fullpage>.section-2.active>.line-box").find("div").addClass("active");
    $(".am-page #fullpage>.section-3.active>div>.graph-box>.circle").addClass("active");
    $(".am-page #fullpage>.section-4.active>div>.grit-sub>img").addClass("active");
    $(".am-page #fullpage>.section-5.active>div>.text-box>.right >.line>span").addClass("active");
  }

  //logo description
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

  //to-top
  $(".am-page #fullpage > .section-5 > div > .to-top").mouseenter(function () {
    $(".am-page #fullpage > .section-5 > div > .to-top path").css("transition", "all 0.3s");
    $(".am-page #fullpage > .section-5 > div > .to-top path").attr("fill", "#F8D554");
  });
  $(".am-page #fullpage > .section-5 > div > .to-top").mouseleave(function () {
    $(".am-page #fullpage > .section-5 > div > .to-top path").attr("fill", "#ebecf1");
  });
};

$(window).scroll(function () {
  let scroll_top = $(this).scrollTop();
  console.log(scroll_top);
  if (scroll_top >= 3200) {
    $(".do-page>.section>.container>.contents-box>.personal>.inner>.typography>p:not(.inter)").addClass("active");
    $(".do-page>.section>.container>.contents-box>.personal>.inner>.typography>.inter").addClass("active");
  }

  if (scroll_top >= 3100) {
    $(".do-page>.section>.container>.contents-box>.app-renewal>.inner>.logo-system>.logo-system-bg>img").addClass("active");
  }

  if (scroll_top >= 4220) {
    $(".do-page>.section>.container>.contents-box>.app-renewal>.inner>.typography>.typography-title").addClass("active");
  }

  if (scroll_top >= 300) {
    $(".do-page>.section>.container>.contents-box>.web-renewal>.inner>.overview>.box").addClass("active");
  }
});

$(".do-page>.section>.container>.contents-box>div>.inner>.to-top-btn>.to-top").click(function () {
  $("html, body").animate({
      scrollTop: 0
    },
    500
  );
});

$(".do-page>.section>.container>.menu-box>.inner>ul>.personal").click(function () {

  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  $(this).siblings().find(".active").removeClass("active");
  $(this).find("li").addClass("active");

  let $personal = $(".do-page>.section>.container>.contents-box>.personal");
  $personal.siblings().removeClass("active");
  $personal.addClass("active");

  $(".do-page>.section>.container>.contents-box>.web-renewal>.inner>.intro>.intro-title>svg:last-child").css("opacity", "0");
});

$(".do-page>.section>.container>.menu-box>.inner>ul>.app").click(function () {

  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  $(this).siblings().find(".active").removeClass("active");
  $(this).find("li").addClass("active");

  let $appRenewal = $(".do-page>.section>.container>.contents-box>.app-renewal");
  $appRenewal.siblings().removeClass("active");
  $appRenewal.addClass("active");

  $(".do-page>.section>.container>.contents-box>.app-renewal>.inner>.intro>.title>.on>span").animate({
    left: "42px"
  }, 500);
  $(".do-page>.section>.container>.contents-box>.app-renewal>.inner>.intro>.title>div:last-child>img:last-child").animate({
    opacity: '1'
  }, 500);

  $(".do-page>.section>.container>.contents-box>.web-renewal>.inner>.intro>.intro-title>svg:last-child").css("opacity", "0");
});

$(".do-page>.section>.container>.menu-box>.inner>ul>.web").click(function () {

  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  $(this).siblings().find(".active").removeClass("active");
  $(this).find("li").addClass("active");

  let $webRenewal = $(".do-page>.section>.container>.contents-box>.web-renewal");
  $webRenewal.siblings().removeClass("active");
  $webRenewal.addClass("active");

  $(".do-page>.section>.container>.contents-box>.web-renewal>.inner>.intro>.intro-title>svg:last-child").animate({
    opacity: "1"
  }, 500);
});

$(".do-page>.section>.container>.menu-box>.inner>ul>.clone").click(function () {


  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  $(this).siblings().find(".active").removeClass("active");
  $(this).find("li:first-child").addClass("active");

  let $clone = $(".do-page>.section>.container>.contents-box>.clone-coding");
  $clone.siblings().removeClass("active");
  $clone.addClass("active");

  let $cloneList = $(this).find('li');

  let $first = $(".do-page>.section>.container>.menu-box>.inner>ul>.clone>ul>li:first-child");

  //semoca에 active가 제거되지 않는다!!!!!
  
  // $cloneList.click(function () {

  //   $first.removeClass("active");

  //   $(this).siblings().removeClass("active");
  //   $(this).addClass("active");
  // });
});

$(".do-page>.section>.container>.menu-box>.inner>ul>.clone>ul>li").click(function () {

  let $first = $(".do-page>.section>.container>.menu-box>.inner>ul>.clone>ul>li:first-child");
  $first.removeClass("active");

  $(this).siblings().removeClass("active");
  $(this).addClass("active");
});

$(".do-page .clone-coding .portfolio").mouseenter(function () {
  $(this).find('img').attr('src', 'image/do/clone-coding/do_clone_gidea-portfolio.svg');
});
$(".do-page .clone-coding .portfolio").mouseleave(function () {
  $(this).find('img').attr('src', 'image/do/personal/do_personal-portfolio.svg');
});


AOS.init();
MainPage_init();
AmPage_init();