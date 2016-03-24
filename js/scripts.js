// Scripts
$(document).ready(function() {
	var menu = $('.menu');
	var notiIntro = $('.notice-intro');
	var notiFull = $('.notice-full');
	menu.click(function() {
		notiIntro.css('display', 'block');
		notiIntro.addClass('animated bounceInLeft')
	});
});