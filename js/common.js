$(document).ready(function() {

	// main-menu dropdown
	
	$('.mainmenu__dropdown').hide();

	$(".showroom").on('click', function(){
		$(this).toggleClass('is-active');
		$(".mainmenu").toggleClass('drop');
		$(this).parent().find('.mainmenu__dropdown').toggle();
	});

	$(".showroom").hover(
		function(){
			if ($(this).parents('.mainmenu').hasClass('drop')) {
				$(".showroom").removeClass('is-active');	
				$(this).addClass('is-active');
				$(".showroom").parent().find('.mainmenu__dropdown').hide();
				$(this).parent().find('.mainmenu__dropdown').show();
			};
		},
		function(){
			//$(this).removeClass('is-active');
		}
	);

});