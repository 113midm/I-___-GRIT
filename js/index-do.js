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
    console.log(scroll_top);

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
  //메인 메뉴 clone(li) 눌렀을 때
  $(".do-page>.section>.container>.menu-box>.inner>ul>.clone").click(function () {

    //다른 메인 메뉴들과 그 서브 메뉴들 active 제거
    $(this).siblings().removeClass("active");
    $(this).siblings().find(".active").removeClass("active");

    let $clone = $(".do-page > .section > .container > .contents-box > .clone-coding");
    //다른 contents 제거
    $clone.siblings().removeClass("active");
    //clone contents 나오기
    $clone.addClass("active");

    //clone contents에 맞게 높이 변경
    $(".do-page>.section").css("height", "790vh");
  });

  //메인 메뉴 clone(li) > a 눌렀을 때
  $(".do-page>.section>.container>.menu-box>.inner>ul>.clone > a").click(function () {
    //a의 부모, li에 active 추가
    $(this).parents(".clone").addClass("active");
    //a의 형제 ul의 자손들 중 첫째(semoca)에 active 추가
    $(this).siblings("ul").find(".active").removeClass("active");
    $(this).siblings("ul").find("> li:first-child").addClass("active");
  });

  //메인 메뉴 clone(li) > ul > 서브 메뉴(li) 눌렀을 때
  $(".do-page>.section>.container>.menu-box>.inner>ul>.clone>ul>li").click(function () {
    //클릭한 서브 메뉴 형제들의 active 제거
    $(this).siblings(".active").removeClass("active");
    //클릭한 서브 메뉴에 active 추가
    $(this).addClass("active");
    //클릭한 서브 메뉴의 부모, li에 active 추가
    $(this).parents(".clone").addClass("active");
  });

  //clone-portfolio 보러가기 버튼에 마우스 올리면 이미지 변화
  $(".do-page .clone-coding .portfolio").mouseenter(function () {
    $(this).find('img').attr('src', 'image/do/clone-coding/do_clone_gidea-portfolio.svg');
  });
  $(".do-page .clone-coding .portfolio").mouseleave(function () {
    $(this).find('img').attr('src', 'image/do/personal/do_personal-portfolio.svg');
  });
}

personalPage_init();
appPage_init();
webPage_init();
clonePage_init();
AOS.init();