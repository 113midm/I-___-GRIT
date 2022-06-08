//새로고침 했을 때 페이지 맨 위로 올라가기
history.scrollRestoration = "manual"

function personalPage_init() {
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

    $(".do-page>.section").css("height", "1070vh");
  });

  $(window).scroll(function () {
    let scroll_top = $(this).scrollTop();
    // console.log(scroll_top);

    //personal-typography 타이핑 효과
    if (scroll_top >= 3200) {
      $(".do-page>.section>.container>.contents-box>.personal>.inner>.typography>p:not(.inter)").addClass("active");
      $(".do-page>.section>.container>.contents-box>.personal>.inner>.typography>.inter").addClass("active");
    }
  });
}

function appPage_init() {
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

    $(".do-page>.section").css("height", "1461.3vh");

    //app contents 나올 때마다 'on/' 효과
    $(".do-page>.section>.container>.contents-box>.app-renewal>.inner>.intro>.title>.on>span").animate({
      left: "42px"
    }, 500);
    $(".do-page>.section>.container>.contents-box>.app-renewal>.inner>.intro>.title>div:last-child>img:last-child").animate({
      opacity: '1'
    }, 500);
    $(".do-page>.section>.container>.contents-box>.web-renewal>.inner>.intro>.intro-title>svg:last-child").css("opacity", "0");
  });

  $(window).scroll(function () {
    let scroll_top = $(this).scrollTop();
    //app-logo 배경 펼쳐지는 효과
    if (scroll_top >= 3100) {
      $(".do-page>.section>.container>.contents-box>.app-renewal>.inner>.logo-system>.logo-system-bg>img").addClass("active");
    }

    //app-typography 타이핑 효과
    if (scroll_top >= 4220) {
      $(".do-page>.section>.container>.contents-box>.app-renewal>.inner>.typography>.typography-title").addClass("active");
    }
  });
}

function webPage_init() {
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

    $(".do-page>.section").css("height", "945vh");

    //web contents 나올 때마다 로고 색 변하는 효과
    $(".do-page>.section>.container>.contents-box>.web-renewal>.inner>.intro>.intro-title>svg:last-child").animate({
      opacity: "1"
    }, 500);
  });

  $(window).scroll(function () {
    let scroll_top = $(this).scrollTop();
    //web-overview 박스 테두리 그리는 효과
    if (scroll_top >= 300) {
      $(".do-page>.section>.container>.contents-box>.web-renewal>.inner>.overview>.box").addClass("active");
    }
  });
}

function clonePage_init() {
  //메인 메뉴 clone 눌렀을 때, 해당 contents 나오기
  $(".do-page>.section>.container>.menu-box>.inner>ul>.clone").click(function () {

    //메인 메뉴 active
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    //다른 메인 메뉴들 자손들 active 제거
    $(this).siblings().find(".active").removeClass("active");
    //첫 번째 서브 메뉴(서울공예박물관)에 active 추가
    $(this).find("li:first-child").addClass("active");

    //서브 메뉴들 active
    let $cloneList = $(this).find('li');
    $cloneList.click(function () {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    });

    //clone contents에 active 추가
    let $clone = $(".do-page>.section>.container>.contents-box>.clone-coding");
    $clone.siblings().removeClass("active");
    $clone.addClass("active");

    $(".do-page>.section").css("height", "790vh");

    //clone-portfolio 보러가기 버튼에 마우스 올리면 이미지 변화
    $(".do-page .clone-coding .portfolio").mouseenter(function () {
      $(this).find('img').attr('src', 'image/do/clone-coding/do_clone_gidea-portfolio.svg');
    });
    $(".do-page .clone-coding .portfolio").mouseleave(function () {
      $(this).find('img').attr('src', 'image/do/personal/do_personal-portfolio.svg');
    });
  });

  $(window).scroll(function () {
    let scroll_top = $(this).scrollTop();
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
}

personalPage_init();
appPage_init();
webPage_init();
clonePage_init();
AOS.init();