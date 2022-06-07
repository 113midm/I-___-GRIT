function DoPage_init() {

  //스크롤 효과
  $(window).scroll(function () {
    let scroll_top = $(this).scrollTop();
    console.log(scroll_top);

    //personal-typography 타이핑 효과
    if (scroll_top >= 3200) {
      $(".do-page>.section>.container>.contents-box>.personal>.inner>.typography>p:not(.inter)").addClass("active");
      $(".do-page>.section>.container>.contents-box>.personal>.inner>.typography>.inter").addClass("active");
    }

    //app-logo 배경 펼쳐지는 효과
    if (scroll_top >= 3100) {
      $(".do-page>.section>.container>.contents-box>.app-renewal>.inner>.logo-system>.logo-system-bg>img").addClass("active");
    }

    //app-typography 타이핑 효과
    if (scroll_top >= 4220) {
      $(".do-page>.section>.container>.contents-box>.app-renewal>.inner>.typography>.typography-title").addClass("active");
    }

    //web-overview 박스 테두리 그리는 효과
    if (scroll_top >= 300) {
      $(".do-page>.section>.container>.contents-box>.web-renewal>.inner>.overview>.box").addClass("active");
    }

    if (scroll_top >= 1600) {
      $("#tenxten>.tenxten-header>.skew-box").addClass("active");
    }

    if (scroll_top >= 3700) {
      $("#gidea>.gidea-header>.skew-box").addClass("active");
    }

    if (scroll_top >= 5400) {
      $("#wavve>.wavve-header>.skew-box").addClass("active");
    }
  });

  //to-top button
  $(".do-page>.section>.container>.contents-box>div>.inner>.to-top-btn>.to-top").click(function () {
    $("html, body").animate({
        scrollTop: 0
      },
      500
    );
  });

  //메인 메뉴 personal 눌렀을 때, 해당 contents 나오기
  $(".do-page>.section>.container>.menu-box>.inner>ul>.personal").click(function () {

    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    //서브 메뉴에도 active 추가
    $(this).siblings().find(".active").removeClass("active");
    $(this).find("li").addClass("active");

    //personal contents에 active 추가
    let $personal = $(".do-page>.section>.container>.contents-box>.personal");
    $personal.siblings().removeClass("active");
    $personal.addClass("active");
  });

  //메인 메뉴 app 눌렀을 때, 해당 contents 나오기
  $(".do-page>.section>.container>.menu-box>.inner>ul>.app").click(function () {

    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    //서브 메뉴에도 active 추가
    $(this).siblings().find(".active").removeClass("active");
    $(this).find("li").addClass("active");

    //app contents에 active 추가
    let $appRenewal = $(".do-page>.section>.container>.contents-box>.app-renewal");
    $appRenewal.siblings().removeClass("active");
    $appRenewal.addClass("active");

    //app contents 나올 때마다 'on/' 효과
    $(".do-page>.section>.container>.contents-box>.app-renewal>.inner>.intro>.title>.on>span").animate({
      left: "42px"
    }, 500);
    $(".do-page>.section>.container>.contents-box>.app-renewal>.inner>.intro>.title>div:last-child>img:last-child").animate({
      opacity: '1'
    }, 500);
    $(".do-page>.section>.container>.contents-box>.web-renewal>.inner>.intro>.intro-title>svg:last-child").css("opacity", "0");
  });

  //메인 메뉴 web 눌렀을 때, 해당 contents 나오기
  $(".do-page>.section>.container>.menu-box>.inner>ul>.web").click(function () {

    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    //서브 메뉴에도 active 추가
    $(this).siblings().find(".active").removeClass("active");
    $(this).find("li").addClass("active");

    //web contents에 active 추가
    let $webRenewal = $(".do-page>.section>.container>.contents-box>.web-renewal");
    $webRenewal.siblings().removeClass("active");
    $webRenewal.addClass("active");

    //web contents 나올 때마다 로고 색 변하는 효과
    $(".do-page>.section>.container>.contents-box>.web-renewal>.inner>.intro>.intro-title>svg:last-child").animate({
      opacity: "1"
    }, 500);
  });

  //메인 메뉴 clone 눌렀을 때, 해당 contents 나오기
  $(".do-page>.section>.container>.menu-box>.inner>ul>.clone").click(function () {

    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    //첫 번째 서브 메뉴(서울공예박물관)에도 active 추가
    $(this).siblings().find(".active").removeClass("active");
    $(this).find("li:first-child").addClass("active");

    //clone contents에 active 추가
    let $clone = $(".do-page>.section>.container>.contents-box>.clone-coding");
    $clone.siblings().removeClass("active");
    $clone.addClass("active");

    let $cloneList = $(this).find('li');

    $cloneList.click(function () {
      let $first = $(".do-page>.section>.container>.menu-box>.inner>ul>.clone>ul>li:first-child");
      $first.removeClass("active");

      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    });
  });

  //clone-portfolio 보러가기 버튼에 마우스 올리면 이미지 변화
  $(".do-page .clone-coding .portfolio").mouseenter(function () {
    $(this).find('img').attr('src', 'image/do/clone-coding/do_clone_gidea-portfolio.svg');
  });
  $(".do-page .clone-coding .portfolio").mouseleave(function () {
    $(this).find('img').attr('src', 'image/do/personal/do_personal-portfolio.svg');
  });
}

AOS.init();
DoPage_init();