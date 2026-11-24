//////// -- loader -- /////////

setTimeout(function(){ $('#cooking').fadeOut(); $('body').removeClass('loading'); }, 3000);

(function ($) {
    "use strict";
    

    $('.image-popup-link').magnificPopup({
      type: 'image',
    });
    $('.gallery-popup-link').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });

    // owlCarousel
    $('#customers-testimonials').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        autoplay: true,
        dots:true,
        nav:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        navText: ['<i class="font-icon flaticon-arrows-6 fa-5x"></i>','<i class="font-icon flaticon-arrows fa-5x"></i>'],
    });

    $('#signature-food').owlCarousel( {
        loop: true,
        center: false,
        items: 3,
        margin: 30,
        autoplay: true,
        dots:true,
        nav:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        navText: ['<i class="glyph-icon flaticon-arrows-2"></i>','<i class="glyph-icon flaticon-arrows-1"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 4
            }
        }
    });


    // HOMEPAGE SLIDER
    $('#homeSlider').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        autoplay: true,
        dots:false,
        nav:false,
        autoplayTimeout: 8500,
        smartSpeed: 450
    });

    if($(window).width()>768){

        // fixed header
        $('.navbar-fixed').affix({
          offset: {
            top: 100,
          }
        });
    }
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
    
}(jQuery));






