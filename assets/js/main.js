  // make the navbar's background color change when scrolling
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $("#header_frame").addClass("bg-change");
      $("#header_frame").removeClass("menu");
      $("#header_frame").removeClass("navbar-dark");
      $("#header_frame").addClass("navbar-light");
    } else {
      $("#header_frame").removeClass("bg-change");
      $("#header_frame").addClass("menu");
      $("#header_frame").addClass("navbar-dark");
      $("#header_frame").removeClass("navbar-light");
    }
  });
//change logo image when scrolling
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $("#logo_img").attr("src", "assets/images/logo/logo_black_bg.png");
    } else {
      $("#logo_img").attr("src", "assets/images/logo/logo_white_bg.png");
    }
  });