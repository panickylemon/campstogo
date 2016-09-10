jQuery(document).ready(function ($) {

    $('input, textarea').placeholder();


    $('.selectpicker').selectpicker();
    $('.selectpicker').parent().children().removeAttr('title');
    $('.selectpicker').on('hidden.bs.select', function (e) {
        $(this).parent().children().removeAttr('title');
    });
});