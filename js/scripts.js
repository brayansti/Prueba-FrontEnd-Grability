// Scripts
$(document).ready(function() {
	var menu = $('.menu');
	var notiIntro = $('.notice-intro');
	var notiFull = $('.notice-full');
	menu.click(function() {
		notiIntro.toggle();
		notiIntro.addClass('animated bounceInLeft');
		notiFull.css('display', 'none');
	});
	notiIntro.click(function() {
		$(this).closest('.carga-notice').find('.notice-full').toggle();
		notiFull.addClass('animated bounceInDown');
	});


menu.trigger( "click" );
});