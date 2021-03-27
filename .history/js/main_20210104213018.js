$(function () {
  $(".menu a, .footer__logo, .logo").on("click", function (event) {

    var id = $(this).attr("href");
    var headerHeight = 0;

    if (id == "#about") {

      headerHeight = -90;
      
    } else if (id == "#connection" || id == "#team" || id == "#slider-blog") {

      headerHeight = 100;

    } else if (id == "#package-service" || id == "#school") {

      headerHeight = -100;

    } else {

      headerHeight = 0;

    }

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - headerHeight,
      },
      1500
    );
    return false;
  });

  var scrolled;
  window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 920) {
      $(".menu__btn").addClass("menu__btn--scroll");
      $(".menu__link").css({ color: "#242121", "font-weight": "500" });
      $(".logo path").css({ fill: "#242121" });
      $(".header__top").css({ background: "#fff" });
      $(".header__top").css({ boxShadow: "0 8px 6px -6px grey" });
    }

    if (920 > scrolled) {
      $(".menu__btn").removeClass("menu__btn--scroll");
      $(".menu__link").css({ color: "white", "font-weight": "300" });
      $(".logo path").css({ fill: "white" });
      $(".menu__btn span").css({ backgroundColor: "#fff" });
      $(".header__top").css({ background: "none" });
      $(".header__top").css({ boxShadow: "none" });
    }
    
    // if (6910 < scrolled && scrolled < 7730) {
    //   $(".menu__link").css({ color: "white", "font-weight": "300" });
    //   $(".logo path").css({ fill: "white" });
    // }
  };

  $(".slider-blog__inner").slick({
    dots: true,
    arrows: false,
  });

  $(".menu__btn").on("click", function () {
    $(".header__top-inner").toggleClass("header__top-inner--active");
  });

  var mixer = mixitup(".gallery__content");
});
