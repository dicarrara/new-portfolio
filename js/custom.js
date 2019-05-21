!(function($) {
  "use strict";

  var myPortfolio = function() {};

  //make overflow visible
  (myPortfolio.prototype.showDelay = function() {
    $("body")
      .delay(350)
      
  }),
    //scroll, add if it more than 50 px from the top
    (myPortfolio.prototype.stickyNav = function() {
      $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
          $(".sticky").addClass("stickyadd");
        } else {
          $(".sticky").removeClass("stickyadd");
        }
      });
    }),
    //make it scroll smooth
    (myPortfolio.prototype.smoothScroll = function() {
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
    }),
    //ScrollSpy
    (myPortfolio.prototype.navSpyScroll = function() {
      $("#navbarCollapse").scrollspy({
        offset: 20
      });
    }),
   
    //Typed Text
    (myPortfolio.prototype.initTypedText = function() {
      $(".element").each(function() {
        var $this = $(this);
        $this.typed({
          strings: $this.attr("data-elements").split(","),
          typeSpeed: 100,
          backDelay: 2000,
        });
      });
    }),
    
    (myPortfolio.prototype.init = function() {
      this.showDelay();
      this.stickyNav();
      this.smoothScroll();
      this.navSpyScroll();
      this.initTypedText();
    }),
    //init
    ($.myPortfolio = new myPortfolio()),
    ($.myPortfolio.Constructor = myPortfolio);
})(window.jQuery),
  //initializing
  (function($) {
    "use strict";
    $.myPortfolio.init();
  })(window.jQuery);
