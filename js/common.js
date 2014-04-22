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

    // sidebar nav dropdown

    $(".js-sidebar-nav").hide();
    $(".js-sidebar-nav-open").show();
    $(".js-sidebar").on('click', function(){
        $(".js-sidebar-nav").slideToggle('fast');
        return false;
    });

    // sidebar nav accordeon

    $(".droplist__submenu").hide();
    $(".js-droplist-sub").on('click', function(){
        $(".droplist__submenu").hide();
        if ($(this).hasClass('is-open')) {
            $(".js-droplist-sub").removeClass('is-open');
            $(this).next().hide();
            $(this).removeClass('is-open');
        }
        else{
            $(".js-droplist-sub").removeClass('is-open');
            $(this).addClass('is-open').next().show();
        };
        return false;
        
    });

    // img zoom

    $('.drawing__large').hide();
    $(".drawing__btn").on('click', function(){
        $(this).toggleClass('is-open');
        $(this).parent().find('.drawing__large').toggle();
    });

    // slider initialize
    
    $(".js-slider-teaser").cycle({
        fx: "carousel",
        timeout: 0,
        pager: "#adv-custom-pager",
        carouselFluid: true,
        allowWrap: true,
        next: '.cyclenext',
        prev: '.cycleprev',
        pagerTemplate: "<a href=#><img src='{{src}}' width=20 height=20></a>"
    });
    $( '.js-slider-teaser' ).on( 'cycle-before', function( event, opts ) {
        // your event handler code here
        // argument opts is the slideshow's option hash
        //alert('a');
        ne = opts.nextSlide;
        ne = ne + 1;
        $('#curslide').text(ne);
        $('.slides').hide();
        $('.slides'+ne).show()
    });
    //$(".js-slider-teaser").cycle('goto', 1);

    // tabs
    function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parents(".js-tab-group").find(".js-tab1").show();
            tab_link.on("click", function() {
                var index = $(this).attr("href");
                tab_link.removeClass("is-active");
                tab_link.parent().removeClass("is-active");
                $(this).addClass("is-active");
                $(this).parent().addClass("is-active");
                tab_cont.hide();
                $(this).parents(".js-tab-group").find("."+index).show();
                return false;
            });
        });
    }
        if ($(".js-tab-group").length) {
            tab();
        };
    
	$(document).click(function(event){
		$(".showroom").removeClass('is-active');
		$('.mainmenu__dropdown').hide();
        $(".js-select").removeClass("is-active");
        $(".js-select-list").hide();
	});

});