jQuery(document).ready(function($) {
   'use strict';

		// Appointment datepicker
		$('.datepicker').datepicker();


		// Phone mask
		$("#phone").mask("(999) 999-99-99");


		// Fancybox - Litebox
		$(".fancybox").fancybox();


		// Parallax parameter
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 40,
			responsive:true
		});


		// Home logos carousel
		$('.owl-logos').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			responsiveClass:true,
			responsive:{
				0:{
				items:2,
				nav:false
				},
				600:{
				items:3,
				nav:false
				},
				960:{
				items:4,
				nav:false
				},
				1281:{
				items:4,
				nav:false
				}
			}
		});



		// Home gallery carousel
		$('.home-gallery').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			responsiveClass:true,
			responsive:{
				0:{
				items:2,
				nav:false
				},
				600:{
				items:3,
				nav:false
				},
				960:{
				items:4,
				nav:false
			},
				1281:{
				items:4,
				nav:false
				}
			}
		});

		// Blur carousel
		$('.bg-img').foggy({
			blurRadius: 9,          // In pixels.
   			opacity: 0.8,           // Falls back to a filter for IE.
   			cssFilterSupport: true  // Use "-webkit-filter" where available.
		});


});


// Acordeon
jQuery('#accordion .panel-heading').on('click', function () {
    jQuery('#accordion .panel-heading').removeClass('actives');
    $(this).addClass('actives');
 });



// Wow animations
		wow = new WOW(
      	{
       		animateClass: 'animated',
        	offset:       100
      	}
    	);
    	wow.init();

// Preloader

$(window).load(function() {
  $(".mask").delay(700).fadeOut();
  new QueryLoader2(document.querySelector("body"), {
        barColor: "#fff",
        backgroundColor: "#00aabe",
        percentage: true,
        barHeight: 2,
        minimumTime: 0,
        fadeOutTime: 1000
    });
});

