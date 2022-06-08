function AmPage_init() {

  //fullpage
  new fullpage('#fullpage', {
    afterLoad: function (item) {
      addActive(item);
    },
    anchors: ['section1', 'section2', 'section3', 'section4']
  });

  //페이지 로드되면 나타는 효과
  function addActive(item) {
    $(".am-page #fullpage>.section-2.active .contents-box>div").find("span").addClass("active");
    $(".am-page #fullpage>.section-2.active>.line-box").find("div").addClass("active");
    $(".am-page #fullpage>.section-3.active>div>.graph-box>.circle").addClass("active");
    $(".am-page #fullpage>.section-4.active>div>.grit-sub>img").addClass("active");
    $(".am-page #fullpage>.section-5.active>div>.text-box>.right >.line>span").addClass("active");
  }

  //로고 종류별로 색깔 바꾸기(마우스 올렸을 때)
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

  //로고 종류별로 색깔 바꾸기(복구)
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
AmPage_init();