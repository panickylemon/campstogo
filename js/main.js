jQuery(document).ready(function ($) {

    $('input, textarea').placeholder();


    $('.selectpicker').selectpicker({
      template: {
        caret: '<span class="glyphicon glyphicon-chevron-down"></span>'
      }
    });

});