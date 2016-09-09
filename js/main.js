jQuery(document).ready(function ($) {

    $('input, textarea').placeholder();


    $('.selectpicker').selectpicker({
      template: {
        caret: '<span class="fa fa-caret-down fa-lg"></span>'
      }
    });

});