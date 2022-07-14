$(document).ready(function(){
    $(".cart").mouseover(function(){
      $(".llogo").css({"color":"#AB7B60","transform-origin":"20px 12px","transform":"rotate(360deg)","transition":"transform 0.8s"});
    });
    $(".cart").mouseout(function(){
      $(".llogo").css({"color":"#102a42","transform":"rotate(-0deg)","transition":"transform 1.3s"});
    });
    $(".login").mouseover(function(){
      $(".logo").css({"color":"#AB7B60","transform":"rotate(360deg)","transition":"transform 0.8s"});
    });
    $(".login").mouseout(function(){
      $(".logo").css({"color":"#102a42","transform-origin":"19px ","transform":"rotate(-0deg)","transition":"transform 1.3s"});
    });

    // navbar brand logo
    $(".navbar-brand-logo").mouseover(function(){
      $(".navbar-brand-logo").css({"width":"185px","transition":"width 0.3s"});
    });
    $(".navbar-brand-logo").mouseout(function(){
      $(".navbar-brand-logo").css({"width":"175px","transition":"width 0.3s"});
    });

    // button
    $(".my-btn").mouseover(function(){
      $(".my-btn").css({"background":"#d1b6a8","color":"#102a42","transition":"background-color 0.5s, color 0.5s","font-weight":"initial"});
    });
    $(".my-btn").mouseout(function(){
      $(".my-btn").css({"background":"#AB7B60","color":"white","transition":"background-color 0.5s, color 0.5s","font-weight":"initial"});
    });

    // comfort title
    $(".comfort-title").mouseover(function(){
      $(".comfort-title").css({"letter-spacing":"8px","transition":"letter-spacing 0.6s"});
    });
    $(".comfort-title").mouseout(function(){
      $(".comfort-title").css({"letter-spacing":"2px","transition":"letter-spacing 0.6s"});
    });

    // transform picture
    $(".p1").mouseover(function(){
      $(".p1").css({"transform":"scale(1.2)","border-radius":"3px","transition":"transform 0.4s, border-radius 0.4s"});
    });
    $(".p1").mouseout(function(){
      $(".p1").css({"transform":"scale(1)","border-radius":"0px","transition":"transform 0.4s, border-radius 0.4s"});
    });
    $(".p2").mouseover(function(){
        $(".p2").css({"transform":"scale(1.3)","border-radius":"3px","transition":"transform 0.4s, border-radius 0.4s"});
    });
    $(".p2").mouseout(function(){
        $(".p2").css({"transform":"scale(1)","border-radius":"0px","transition":"transform 0.4s, border-radius 0.4s"});
    });
    $(".p3").mouseover(function(){
        $(".p3").css({"transform":"scale(1.4)","border-radius":"3px","transition":"transform 0.4s, border-radius 0.4s"});
    });
    $(".p3").mouseout(function(){
        $(".p3").css({"transform":"scale(1)","border-radius":"0px","transition":"transform 0.4s, border-radius 0.4s"});
    });
    $(".right-home-2").mouseover(function(){
        $(".right-home-2").css({"margin-left":"20px","margin-right":"20px","margin-top":"35px","margin-bottom":"30px","border-radius":"3px","transition":"border-radius 0.4s,margin 0.4s"});
    });
    $(".right-home-2").mouseout(function(){
        $(".right-home-2").css({"margin-left":"20px","margin-right":"20px","margin-top":"20px","margin-bottom":"20px","border-radius":"0px","transition":"border-radius 0.4s,margin 0.4s"});
    });

    // three images
    $(".thr-ho1").mouseover(function(){
      $(".thr-ho1").css({"background":"#00000063 none repeat scroll 0% 0%","transition":"background 1s"});
      $(".search1").css({"opacity":"1","transition":"opacity 1s"});
    });
    $(".thr-ho1").mouseout(function(){
      $(".thr-ho1").css({"background":"none","transition":"background 1s"});
      $(".search1").css({"opacity":"0","transition":"opacity 1s"});
    });
    $(".thr-ho2").mouseover(function(){
      $(".thr-ho2").css({"background":"#00000063 none repeat scroll 0% 0%","transition":"background 1s"});
      $(".search2").css({"opacity":"1","transition":"opacity 1s"});
    });
    $(".thr-ho2").mouseout(function(){
      $(".thr-ho2").css({"background":"none","transition":"background 1s"});
      $(".search2").css({"opacity":"0","transition":"opacity 1s"});
    });
    $(".thr-ho3").mouseover(function(){
      $(".thr-ho3").css({"background":"#00000063 none repeat scroll 0% 0%","transition":"background 1s"});
      $(".search3").css({"opacity":"1","transition":"opacity 1s"});
    });
    $(".thr-ho3").mouseout(function(){
      $(".thr-ho3").css({"background":"none","transition":"background 1s"});
      $(".search3").css({"opacity":"0","transition":"opacity 1s"});
    });
  });


// owl carousel
  $('.owl-carousel').owlCarousel({
    nav: false, // Show next and prev buttons 
            items: 1,
            smartSpeed: 15000,
            dotsSpeed: 1000,
            dots:false,
            dragEndSpeed: 1000,
            singleItem: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            pagination: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: false,
            loop: true,
            afterAction: function (el) {
                //remove class active
                this
                    .$owlItems
                    .removeClass('active')

                //add class active
                this
                    .$owlItems //owl internal $ object containing items
                    .eq(this.currentItem + 1)
                    .addClass('active')
            }
    
  })

// aos
AOS.init();
