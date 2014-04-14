$(document).ready(function() {

	// main-menu dropdown
	
	$('.mainmenu__dropdown').hide();

	$(".showroom").on('click', function(event){
		$(this).toggleClass('is-active');
		$(".mainmenu").toggleClass('drop');
		$(this).parent().find('.mainmenu__dropdown').toggle();
		event.stopPropagation();
		return false;
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

	// select
    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).find(".js-select-list");
            var text = select_list.find("li").first().text();
            select_list.hide();
            //$(this).find(".js-select-text").text(text);
            $(this).click(function(event){
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    //select_list.hide();
                }
                else {
                    $(".js-select").removeClass("is-active");
                    $(".js-select-list").hide();
                    select_list.show();
                    $(this).addClass("is-active");
                }
                event.stopPropagation();
            });
            select_list.find("li").click(function(event) {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select-text").text(text);
                $(this).parent().parent().find(".js-select-input").val(id);
                $(this).parent().hide();
                $(this).parents(".js-select").removeClass("is-active");
                event.stopPropagation();
                //return false;
            });
        });

    }
    select();
    $('.js-select').click(function(event){
        event.stopPropagation();
    });

	$(document).click(function(event){
		$(".showroom").removeClass('is-active');
		$('.mainmenu__dropdown').hide();
        $(".js-select").removeClass("is-active");
        $(".js-select-list").hide();
	});

});