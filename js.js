/* runing number */

$(window).on('scroll', function(e) {
    function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
if ($(window).scrollTop() >= ($(".goto").offset().top - ($(window).height()))) {
if (!$(".goto").hasClass("animated")) {
	$('.count').each(function() {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function(now) {                        $(this).text(numberWithCommas(Math.ceil(now)));
			}
		});
	});
	// $("#triggered").addClass("show");
	$(".goto").addClass("animated");
}
}
});


/*  join now button scrool down */

function myFunction() {
	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("myFunction").on('click', function(event) {
	  
		  // Make sure this.hash has a value before overriding default behavior
		  if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
	  
			// Store hash
			var hash = this.hash;
	  
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
			  scrollBy: $(hash).offset().top
			}, 3500, function(){
		 
			  // Add hash (#) to URL when done scrolling (default click behavior)
			  window.location.hash = hash;
			});
		  } // End if
		});
	  });
	// window.scrollBy(0, 3500);
	
  }


  function mobilefunction() {
	window.scrollBy(0, 8300);
	
  }







/* slider in card yoga icons*/
//   $('.carousel .carousel-item').each(function () {
// 	var minPerSlide = 4;
// 	var next = $(this).next();
// 	if (!next.length) {
// 	next = $(this).siblings(':first');
// 	}
// 	next.children(':first-child').clone().appendTo($(this));
	
// 	for (var i = 0; i < minPerSlide; i++) { next=next.next(); if (!next.length) { next=$(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); } });



	/*reveal */
	ScrollReveal().reveal('.headline');
	ScrollReveal().reveal('.headline', { delay: 200 });
	ScrollReveal().reveal('.tagline', { delay: 500 });