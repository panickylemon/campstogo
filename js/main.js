
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

    function resizeResultItem() {
        var max_height = 0;
        $(".wrapper-item-news").each(function () {
            var item_height =  $(this).outerHeight();
            if (item_height > max_height) {
                max_height = item_height;

                }
        });
        $(".wrapper-item-news").each(function () {
            $(this).height(max_height);
        });
    }
    $(window).resize(function(){
        resizeResultItem();
    });
    $(window).load(function(){
        resizeResultItem();
    });
});



