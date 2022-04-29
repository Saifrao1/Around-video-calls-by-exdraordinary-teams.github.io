(function () {
  var $last = $(".js-last");
  var $workspace = $(".js-workspace");
  var $socialImages = $(".js-social-images");
  var $free = $(".js-free");
  var $singIn = $(".js-sing-in");
  var $topNav = $(".js-top-nav");

  gsap.registerPlugin(ScrollTrigger);

  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: $workspace,
      start: "top top",
      scrub: 1,
      end: "-20% top",
    },
  });
  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: $last,
      start: "top top",
      scrub: 1,
      end: "-20% top",
    },
  });

  t1.to(".nav_menu a, .in-browser", { color: "rgb(25, 25, 25)" }).to($topNav, {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  });
  t2.to(".nav_menu a, .in-browser", { color: "white" }).to($topNav, {
    backgroundColor: "rgb(25, 25, 25,0.8)",
  });

  t2.to(".line", { height: "40px" }).to(".in-browser", {
    fontSize: "14px",
    textAlign: "center",
    marginLeft: "0px",
    marginBottom: "4px",
  });

  $singIn.mouseenter(function () {
    gsap.to(".line", {
      background:
        "linear-gradient(450deg, rgb(5, 157, 255) 0%,rgb(104, 72, 211) 100%) rgb(222, 222, 222)",
      dutarion: 1,
    });
  });

  $singIn.mouseleave(function () {
    gsap.to(".line", {
      background:
        "linear-gradient(416deg, rgba(5, 157, 255, 0) 0%, rgb(101, 73, 213) 0%, rgb(227, 63, 161) 41%, rgb(246, 79, 86) 61%, rgb(251, 83, 67) 75.23809523809524%, rgb(253, 123, 66) 100%) rgb(222, 222, 222)",
      dutarion: 1,
    });
  });

  $(".workspace").click(function () {
    $(".hero-images").addClass("hero1").removeClass("hero2");
    $(".hotal, .houses").addClass("bk").removeClass("add-color");
    $(this).addClass("add-color");
  });
  $(".hotal").click(function () {
    $(".hero-images").removeClass("hero1 hero2");
    $(".hotal, .workspace, .houses").removeClass("add-color bk");
  });
  $(".houses").click(function () {
    $(".hero-images").addClass("hero2");
    $(".hotal, .workspace").addClass("bk").removeClass("add-color");
    $(this).addClass("add-color");
  });
})();
