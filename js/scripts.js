$(function () {
    $('.mini-menu').click(function () {
        if ($('nav ul').css({ 'display': 'none' })) {
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
            
        }
    });

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

})();

