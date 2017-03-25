jQuery(document).ready(function ($) {

    $('input, textarea').placeholder();
    $(".pagination").rPage();

    $('.selectpicker').selectpicker();
    $('.selectpicker').parent().children().removeAttr('title');
    $('.selectpicker').on('hidden.bs.select', function (e) {
        $(this).parent().children().removeAttr('title');
    });

    //function checkWidth() {
    //    var windowsize = $("body").innerWidth();
    //    if (windowsize >= 436) {
    //        $(".menu-header>ul").css("display", "block")
    //    } else {
    //        $(".menu-header>ul").css("display", "none")
    //    }
    //}
    //
    //$(window).resize(checkWidth);

    $(".fa-bars").click(function() {
        $(".menu-header>ul").slideToggle("slow");
    });


    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            if (this.originalType) {
                this.type = this.originalType;
                delete this.originalType;
            }
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '') {
            if (this.type == 'password') {
                this.originalType = this.type;
                this.type = 'text';
            }
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();

    function resizeResultItem(selecter) {
        var max_height = 0;
        $(selecter).each(function () {
            var item_height =  $(this).outerHeight();
            if (item_height > max_height) {
                max_height = item_height;

                }
        });
        $(selecter).each(function () {
            $(this).height(max_height);
        });
    }
    $(window).resize(function(){
        resizeResultItem(".news-page .wrapper-item-news");
        resizeResultItem(".wrapper-team-item");
    });
    $(window).load(function(){
        resizeResultItem(".news-page .wrapper-item-news");
        resizeResultItem(".wrapper-team-item");
    });


    $(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

    $(".button-popup").fancybox({
        maxWidth	: 480,
        maxHeight : 290,
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none',

    });

    $(".button-popup").fancybox({
        maxWidth	: 480,
        maxHeight : 500,
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none'

    });


    $(".owl-carousel").owlCarousel({
        loop:true,
        nav: true,
        navText : ["<span class='arrow'><</span> Previous","Next <span class='arrow'>></span>"],
        dots: false,
        mouseDrag: false,
        items:3
    });



    sum();
    $("#num1, #num2, #num3").on("keydown keyup", function() {
        sum();
    });

    function sum() {
        var num1 = $('.social-likes__counter_facebook').text();
        var num2 = $('.social-likes__counter_twitter').text();
        var num3 = $('.social-likes__counter_vkontakte').text();
        var result = parseInt(num1) + parseInt(num2) + parseInt(num3);

        console.log(result);
        console.log(num1);
        console.log(num2);
        console.log(num3);

        if (!isNaN(result)) {
            $('.shares-number-q').text(result);
        }
    }

});




