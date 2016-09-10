jQuery(document).ready(function ($) {

    $('input, textarea').placeholder();


    $('.selectpicker').selectpicker({
      template: {
        caret: '<span class="fa fa-caret-down fa-lg"></span>'
        //caret: '<span class="glyphicon glyphicon-triangle-bottom"></span>'
      }
    });
    $('.selectpicker').parent().children().removeAttr('title');
    $('.selectpicker').on('hidden.bs.select', function (e) {
        $(this).parent().children().removeAttr('title');
    });
});