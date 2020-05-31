jQuery(document).ready(function($) {
	$('.burger-menu').click(function(event) {
		$('.burger-menu, nav, main, footer').toggleClass('active');
	});
});