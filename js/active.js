(function($) {
    "use strict";

    $(document).ready(function($) {

        /* Paralax JS */
        $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });

        /*Responsive Nav*/
        $('ul.nav.navbar-nav li a').on('click', function() {
            $('.navbar-collapse').removeClass('in');
        });

        /* 
         * Owl Carousel Active js 
         */

        /*Slider Owl Carousel Fade JS*/
        $('#midland-slide-wrapper').owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });


        /* estimonial Owl Carousel JS*/
        $('.testimonial-wraper').owlCarousel({
            items: 3,
            nav: true,
            dots: false,
            autoplay: false,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            }
        });


        /* Team Owl Carousel JS*/
        $('.team-wrap').owlCarousel({
            items: 4,
            nav: false,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 4,
                }
            }
        });


        /* About Owl Carousel JS*/
        $('.about-left').owlCarousel({
            items: 1,
            dots: true,
            nav: false,
            autoplay: true,
            loop: true,

        });

        /* Twitter Owl Carousel JS*/
        $('.twitter-content-wrapper').owlCarousel({
            items: 1,
            dots: true,
            nav: false,
            autoplay: false,
            loop: true,
        });

        /*Slider Animation JS*/
        $("#midland-slide-wrapper").on("translate.owl.carousel", function() {
            $("#midland-slide-wrapper h1").removeClass("animated fadeInUp").css("opacity", "0");
            $("#midland-slide-wrapper p").removeClass("animated fadeInUp").css("opacity", "0");
            $("#midland-slide-wrapper .hero-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });

        $("#midland-slide-wrapper").on("translated.owl.carousel", function() {
            $("#midland-slide-wrapper h1").addClass("animated fadeInUp").css("opacity", "1");
            $("#midland-slide-wrapper p").addClass("animated fadeInUp").css("opacity", "1");
            $("#midland-slide-wrapper .hero-btn").addClass("animated fadeInDown").css("opacity", "1");
        });

        /* Counter JS */
        $('.count').counterUp({
            delay: 10,
            time: 1000
        });


        /* Sticky JS */
        $(".header-area").sticky({ topSpacing: 0 });

        /* Smooth Menu JS */
        $('li.smooth-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '50';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutQuart');

            event.preventDefault();
        });

        /* Scrool Animation JS */
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 95
        });

        /* Magnific Popup JS */
        $('.protfolio-btn a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        /* MixItUp JS*/
        $('#protfolio-wrapper').mixItUp();

        /* Accordian JS */
        $('.accordion-toggle').on('click', function() {
            $(this).closest('.panel-group').children().each(function() {
                $(this).find('>.panel-heading').removeClass('active');
            });

            $(this).closest('.panel-heading').toggleClass('active');
        });


        /* Gallery Light Box JS*/
        /*$(document).ready(function(){
			function centerModals(){
			  $('.modal').each(function(i){
				var $clone = $(this).clone().css('display', 'block').appendTo('body');
				var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
				top = top > 0 ? top : 0;
				$clone.remove();
				$(this).find('.modal-content').css("margin-top", top);
			  });
			}
			$('.modal').on('show.bs.modal', centerModals);
			$(window).on('resize', centerModals);
		});*/



        /* Scroll Up JS*/
        $('.scroll-up').fadeOut();
        $(window).scroll(function() {

            if ($(this).scrollTop() > 200) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
        $('.scroll-up').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        /* Google Map JS */
        $(function() {
            $('.map')
                .gmap3({
                    center: [23.810331, 90.412521],
                    zoom: 6,
                    scrollwheel: false,
                })
                .cluster({
                    markers: [
                        { position: [23.810331, 90.412521] },
                    ],
                    cb: function(markers) {
                        if (markers.length > 1) { // 1 marker stay unchanged (because cb returns nothing)
                            if (markers.length < 20) {
                                return {
                                    content: "<div class='cluster cluster-1'>" + markers.length + "</div>",
                                    x: -26,
                                    y: -26
                                };
                            }
                        }
                    }
                });
        });

    });

    jQuery(window).load(function() {
        /* Site Preloader JS */
        $(".midland-preloader-wrapper").fadeOut("500")
    });


}(jQuery));




// Revolution Slider Init 

(function($) {
    "use strict";

    $(document).ready(function() {
        $(".fullscreenbanner").revolution({
            dottedOverlay: "none",
            delay: 8000,
            startwidth: 1170,
            startheight: 600,
            hideThumbs: 200,

            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,

            navigationType: "bullet",
            navigationArrows: "solo",
            navigationStyle: "preview4",

            touchenabled: "on",
            onHoverStop: "on",

            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,

            parallax: "mouse",
            parallaxBgFreeze: "on",
            parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

            keyboardNavigation: "off",

            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 20,

            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,

            shadow: 0,
            fullWidth: "on",
            fullScreen: "off",

            spinner: "spinner4",

            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,

            shuffle: "off",

            autoHeight: "off",
            forceFullWidth: "off",



            hideThumbsOnMobile: "off",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "off",
            hideArrowsOnMobile: "off",
            hideThumbsUnderResolution: 0,

            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0
        });

        $(".fullscreenbanner-s").revolution({
            delay: 15000,
            startwidth: 1170,
            startheight: 500,
            hideThumbs: 10,
            fullWidth: "off",
            fullScreen: "on",
            fullScreenOffsetContainer: "",
            navigationStyle: "preview4",
        });


    });
})(jQuery);