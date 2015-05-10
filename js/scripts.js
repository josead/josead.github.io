
$(document).ready(function	() {
	var length = $('.card').length;

	$.each($('.card'), function(i, el){

	    setTimeout(function(){
	    	$(el).animate({ '-moz-transform': 'translate3d(0,0,0)', opacity: 1}, {
			    step: function(now,fx) {
			    	$(this).css('-moz-transform','translate3d(0,0,0)');
			    }, duration:'fast'}
			);
	    }, 200 + ( i * 200 ));

	});

	$(window).scroll(function(){

		if ($(this).scrollTop() < 99) {
			$('header').removeClass('fixed').css('height',$(this).scrollTop() + 200 + 'pt').removeClass('z-indexed');
			$('.photo').removeClass('top-fixed').removeClass('smaller');
			$('.presentation').removeClass('top-fixed');
		}
		if ($(this).scrollTop() > 45) {
			$('.photo').addClass('top-fixed');
		}	
		if ($(this).scrollTop() >= 100) {
			$('header').addClass('fixed').css('height','60pt').removeClass('z-indexed');
			$('.photo').addClass('smaller');
			$('.presentation').addClass('top-fixed');

		}
		if ($(this).scrollTop() >= 120)
			$('header').addClass('z-indexed');
	});

});