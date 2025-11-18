$(function () {
    $('.mini-menu').click(function () {
        if ($('nav ul').css({ 'display': 'none' })) {
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
            
        }
    });

    $('.service-slider').slick({
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 800,
        settings:{
            dots: false,
            centerMode: true,
            centerPadding: '40px' 
        }
    }]
    })

    Fancybox.bind("[data-fancybox]", {
  // Your custom options
});


})();