$(window).load(function() {
	$("#loader").fadeOut("slow");
});
$(document).ready(function(){

	var contador = 1;
 
	$('.menu-btn').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
	 
	// jQuery for page scrolling feature - requires jQuery Easing plugin
   // $('a.page-scroll').bind('click', function(event) {
   //    var $anchor = $(this);
   //    $('html, body').stop().animate({
   //       scrollTop: ($($anchor.attr('href')).offset().top - 48)
   //    }, 1250, 'easeInOutExpo');
   //    event.preventDefault();
   // });

	// Highlight the top nav as scrolling occurs
   $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
   });

	// Closes the Responsive Menu on Menu Item Click
   $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
   });

   // Offset for Main Navigation
   $('.navbar-default').affix({
      offset: {
         top: 100
      }
   });

   /*var container = document.getElementById('all-container');
    Ps.update(container);
    Ps.initialize(container, {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });*/
});
