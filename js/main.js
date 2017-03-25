
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


    // $('[placeholder]').focus(function() {
    //     var input = $(this);
    //     if (input.val() == input.attr('placeholder')) {
    //         if (this.originalType) {
    //             this.type = this.originalType;
    //             delete this.originalType;
    //         }
    //         input.val('');
    //         input.removeClass('placeholder');
    //     }
    // }).blur(function() {
    //     var input = $(this);
    //     if (input.val() == '') {
    //         if (this.type == 'password') {
    //             this.originalType = this.type;
    //             this.type = 'text';
    //         }
    //         input.addClass('placeholder');
    //         input.val(input.attr('placeholder'));
    //     }
    // }).blur();

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

    $(".link-map").fancybox({
        maxWidth	: 800,
        maxHeight	: 600,
        fitToView	: false,
        width		: '100%',
        height		: '70%',
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none'
    });

    $(".button-popup").fancybox({
        maxWidth	: 480,
        maxHeight	: 290,
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none'
    });

    $(".button-popup-add").fancybox({
        maxWidth	: 640,
        maxHeight	: 560,
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none'
    });

    $(".button-popup-edit").fancybox({
        maxWidth	: 640,
        maxHeight	: 560,
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none'
    });

    $(".button-popup-contact").fancybox({
        maxWidth	: 640,
        maxHeight	: 430,
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none',

    });

    $( "#AddCamp-form" ).submit(function( event ) {
        $.fancybox( $( "#thanks-form" ), {
            maxWidth	: 480,
            maxHeight	: 290,
            autoSize	: false,
            closeClick	: false,
            openEffect	: 'none',
            closeEffect	: 'none'
        })
        event.preventDefault();
    });
    $(".button-close-form").click(function() {
        $.fancybox.close(true);
    });


    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        $('.selectpicker').selectpicker('mobile');
    }
// $(".owl-carousel").owlCarousel({
//         loop:true,
//         nav: true,
//         navText : ["<span class='arrow'><</span> Previous","Next <span class='arrow'>></span>"],
//         dots: false,
//         mouseDrag: false,
//         items:3,
//        // navElement:'nav'
// });


    $('.social-likes').on('ready.social-likes', function(event, number) {
        $('.shares-number').text(number);
    });
});


var socialLikesButtons = {
    linkedin: {
        counterUrl: 'http://www.linkedin.com/countserv/count/share?url={url}',
        counter: function(jsonUrl, deferred) {
            var options = socialLikesButtons.linkedin;
            if (!options._) {
                options._ = {};
                if (!window.IN) window.IN = {Tags: {}};
                window.IN.Tags.Share = {
                    handleCount: function(params) {
                        var jsonUrl = options.counterUrl.replace(/{url}/g, encodeURIComponent(params.url));
                        options._[jsonUrl].resolve(params.count);
                    }
                };
            }
            options._[jsonUrl] = deferred;
            $.getScript(jsonUrl)
                .fail(deferred.reject);
        },
        popupUrl: 'http://www.linkedin.com/shareArticle?mini=false&url={url}&title={title}',
        popupWidth: 650,
        popupHeight: 500
    }
};



