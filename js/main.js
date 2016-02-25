 $(document).ready(function () {
          $("#portfolio").hide();
          $("#about").hide();
          $("#team").hide();
          $("#pricing").hide();
          $("#services").hide();
          $("#contact").hide();
        });

        $('.mini-logo').click(function(){
          $("#header").slideDown(500);
          $("#portfolio").slideUp(1000);
          $("#about").slideUp(1000);
          $("#team").slideUp(1000);
          $("#pricing").slideUp(1000);
          $("#services").slideUp(1000);
          $("#contact").slideUp(1000);
          $burger.removeClass('inverse');
          $mini_logo.removeClass('inverse');
        });

        $menuLeft = $('.pushmenu-left');
        $burger = $('.menu-symbol');
        $mini_logo = $('.mini-logo');
        
        $burger.click(function() {
          $(this).toggleClass('active');
          $('.pushmenu-push').toggleClass('pushmenu-push-toright');
          $menuLeft.toggleClass('pushmenu-open');
        });

        $("#home-menu").click(function(){
          $("#header").slideDown(500);
          $("#portfolio").slideUp(1000);
          $("#about").slideUp(1000);
          $("#team").slideUp(1000);
          $("#pricing").slideUp(1000);
          $("#services").slideUp(1000);
          $("#contact").slideUp(1000);
          $('.pushmenu-push').toggleClass('pushmenu-push-toright');
          $menuLeft.toggleClass('pushmenu-open');
          $burger.removeClass('inverse');
          $mini_logo.removeClass('inverse');
          $burger.toggleClass('active');
        });

        $("#about-menu").click(function(){
          $("#header").slideUp(1000);
          $("#portfolio").slideUp(1000);
          $("#about").slideDown(500);
          $("#team").slideUp(1000);
          $("#pricing").slideUp(1000);
          $("#services").slideUp(1000);
          $("#contact").slideUp(1000);
          $('.pushmenu-push').toggleClass('pushmenu-push-toright');
          $menuLeft.toggleClass('pushmenu-open');
          $burger.addClass('inverse');
          $mini_logo.addClass('inverse');
          $burger.toggleClass('active');
        });

        $("#services-menu").click(function(){
          $("#header").slideUp(1000);
          $("#portfolio").slideUp(1000);
          $("#about").slideUp(1000);
          $("#team").slideUp(1000);
          $("#pricing").slideUp(1000);
          $("#services").slideDown(500);
          $("#contact").slideUp(1000);
          $('.pushmenu-push').toggleClass('pushmenu-push-toright');
          $menuLeft.toggleClass('pushmenu-open');
          $burger.addClass('inverse');
          $mini_logo.addClass('inverse');
          $burger.toggleClass('active');
        });

        $("#portfolio-menu").click(function(){
          $("#header").slideUp(1000);
          $("#portfolio").slideDown(500);
          $("#about").slideUp(1000);
          $("#team").slideUp(1000);
          $("#pricing").slideUp(1000);
          $("#services").slideUp(1000);
          $("#contact").slideUp(1000);
          $('.pushmenu-push').toggleClass('pushmenu-push-toright');
          $menuLeft.toggleClass('pushmenu-open');
          $burger.addClass('inverse');
          $mini_logo.addClass('inverse');
          $burger.toggleClass('active');
        });

        $("#pricing-menu").click(function(){
          $("#header").slideUp(1000);
          $("#portfolio").slideUp(1000);
          $("#about").slideUp(1000);
          $("#team").slideUp(1000);
          $("#pricing").slideDown(500);
          $("#services").slideUp(1000);
          $("#contact").slideUp(1000);
          $('.pushmenu-push').toggleClass('pushmenu-push-toright');
          $menuLeft.toggleClass('pushmenu-open');
          $burger.addClass('inverse');
          $mini_logo.addClass('inverse');
          $burger.toggleClass('active');
        });

        $("#contact-menu").click(function(){
          $("#header").slideUp(1000);
          $("#portfolio").slideUp(1000);
          $("#about").slideUp(1000);
          $("#team").slideUp(1000);
          $("#pricing").slideUp(1000);
          $("#services").slideUp(1000);
          $("#contact").slideDown(500);
          $('.pushmenu-push').toggleClass('pushmenu-push-toright');
          $menuLeft.toggleClass('pushmenu-open');
          $burger.addClass('inverse');
          $mini_logo.addClass('inverse');
          $burger.toggleClass('active');
        });

        $(".contact-menu").click(function(){
          $("#header").slideUp(1000);
          $("#portfolio").slideUp(1000);
          $("#about").slideUp(1000);
          $("#team").slideUp(1000);
          $("#pricing").slideUp(1000);
          $("#services").slideUp(1000);
          $("#contact").slideDown(500);
          $burger.addClass('inverse');
          $mini_logo.addClass('inverse');
        });