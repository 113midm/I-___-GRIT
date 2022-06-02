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

AOS.init();
MainPage_init();
AmPage_init();