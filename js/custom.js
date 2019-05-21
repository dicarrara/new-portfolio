!(function($) {
  "use strict";

  //make overflow visible
  function showDelay() {
    $("body").delay(350)
      
  }
    //scroll, add if it more than 50 px from the top
    function stickyNav() {
      $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
          $(".sticky").addClass("stickyadd");
        } else {
          $(".sticky").removeClass("stickyadd");
        }
      });
    }
    //make it scroll smooth
    function smoothScroll() {
      $(".navbar-nav a, .scroll_down a").on("click", function(event) {
        var $anchor = $(this);
        $("html, body")
          .animate(
            {
              scrollTop: $($anchor.attr("href")).offset().top - 0
            },
            1000,            
          );
        event.preventDefault();
      });
    }
    //ScrollSpy
    function navSpyScroll() {
      $("#navbarCollapse").scrollspy({
        offset: 20
      });
    }
   
    //Typed Text
    function initTypedText() {
      $(".element").each(function() {
        var $this = $(this);
        $this.typed({
          strings: $this.attr("data-elements").split(","),
          typeSpeed: 100,
          backDelay: 2000,
        });
      });
    }
    
    function init() {
      showDelay();
      stickyNav();
      smoothScroll();
      navSpyScroll();
      initTypedText();
    }

    init();
    //init
    
})(window.jQuery)
 