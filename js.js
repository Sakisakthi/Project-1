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
	window.scrollBy(0, 4300);
	
  }


  function mobilefunction() {
	window.scrollBy(0, 1000);
	
  }