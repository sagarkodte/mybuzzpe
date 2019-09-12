(function($) {
    var $main_window = $(window);
    $main_window.on("load", function() {
        $("#preloader").fadeOut("slow");
    });
    $main_window.on("scroll", function() {
        if ($(this).scrollTop() > 250) {
            $(".back-to-top").fadeIn(200);
        } else {
            $(".back-to-top").fadeOut(200);
        }
    });
    $(".back-to-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    $main_window.on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $(".scrolling-navbar").addClass("top-nav-collapse");
        } else {
            $(".scrolling-navbar").removeClass("top-nav-collapse");
        }
    });
    if ($(".counter").length > 0) {
        $(".counterUp").counterUp({
            delay: 10,
            time: 2000
        });
    }
    var wow = new WOW({
        mobile: false
    });
    wow.init();
    $('[data-toggle="tooltip"]').tooltip()
    // var testiOwl = $("#testimonials");
    // testiOwl.owlCarousel({
    //     autoplay: true,
    //     margin: 30,
    //     dots: false,
    //     autoplayHoverPause: true,
    //     nav: false,
    //     loop: true,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         991: {
    //             items: 2
    //         }
    //     }
    // });
    // var newproducts = $("#new-products");
    // newproducts.owlCarousel({
    //     autoplay: true,
    //     nav: true,
    //     autoplayHoverPause: true,
    //     smartSpeed: 350,
    //     dots: false,
    //     margin: 30,
    //     loop: true,
    //     navText: ['<i class="lni-chevron-left"></i>', '<i class="lni-chevron-right"></i>'],
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         575: {
    //             items: 2,
    //         },
    //         991: {
    //             items: 3,
    //         }
    //     }
    // });
    // var categoriesslider = $("#categories-icon-slider");
    // categoriesslider.owlCarousel({
    //     autoplay: true,
    //     nav: true,
    //     autoplayHoverPause: true,
    //     smartSpeed: 350,
    //     dots: false,
    //     margin: 30,
    //     loop: true,
    //     navText: ['<i class="lni-chevron-left"></i>', '<i class="lni-chevron-right"></i>'],
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         575: {
    //             items: 2,
    //         },
    //         991: {
    //             items: 5,
    //         }
    //     }
    // });
	//  var categoriesslider = $("#dealofday, #newoffer");
    // categoriesslider.owlCarousel({
    //     autoplay: true,
    //     nav: true,
    //     autoplayHoverPause: true,
    //     smartSpeed: 350,
    //     dots: false,
    //     margin: 30,
    //     loop: true,
    //     navText: ['<i class="lni-chevron-left"></i>', '<i class="lni-chevron-right"></i>'],
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         575: {
    //             items: 2,
    //         },
    //         991: {
    //             items: 3,
    //         }
    //     }
    // });
	//  var categoriesslider = $(" #trending, #Things");
    // categoriesslider.owlCarousel({
    //     autoplay: true,
    //     nav: true,
    //     autoplayHoverPause: true,
    //     smartSpeed: 350,
    //     dots: false,
    //     margin: 30,
    //     loop: true,
    //     navText: ['<i class="lni-chevron-left"></i>', '<i class="lni-chevron-right"></i>'],
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         575: {
    //             items: 2,
    //         },
    //         991: {
    //             items: 4,
    //         }
    //     }
    // });
	// var categoriesslider = $("#freeoffer");
    // categoriesslider.owlCarousel({
    //     autoplay: true,
    //     nav: true,
    //     autoplayHoverPause: true,
    //     smartSpeed: 350,
    //     dots: false,
    //     margin: 30,
    //     loop: true,
    //     navText: ['<i class="lni-chevron-left"></i>', '<i class="lni-chevron-right"></i>'],
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         575: {
    //             items: 2,
    //         },
    //         991: {
    //             items: 2,
    //         }
    //     }
    // });
	
	
    // var detailsslider = $("#owl-demo");
    // detailsslider.owlCarousel({
    //     autoplay: true,
    //     nav: false,
    //     autoplayHoverPause: true,
    //     smartSpeed: 350,
    //     dots: true,
    //     margin: 30,
    //     loop: true,
    //     navText: ['<i class="lni-chevron-left"></i>', '<i class="lni-chevron-right"></i>'],
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         575: {
    //             items: 1,
    //         },
    //         991: {
    //             items: 1,
    //         }
    //     }
    // });
})(jQuery);

$(window).load(function(){
    // var bookonbuzcafeSlider = $(" #bookonbuzcafe");
    // bookonbuzcafeSlider.owlCarousel({
    //     autoplay: true,
    //     nav: true,
    //     autoplayHoverPause: true,
    //     smartSpeed: 350,
    //     dots: false,
    //     margin:5,
    //     loop: true,
    //     navText: ['<i className="lni-chevron-left"></i>', '<i className="lni-chevron-right"></i>'],
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 2,
    //         },
    //         575: {
    //             items:3,
    //         },
    //         991: {
    //             items: 8,
    //         }
    //     }
    // });
});