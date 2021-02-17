$(function () {

    $(window).on('activate.bs.scrollspy', function () {
        var hash = $('.site-nav')
            .find('a.active')
            .attr('href');

        if (hash !== '#page-hero') {
            $('header nav').addClass('inbody');
        } else {
            $('header nav').removeClass('inbody');
        }

        $('#page-media .layout-animation').css(
            'visibility: hidden'
        );

        if (hash === '#page-media') {
            $('#page-media .layout-animation').addClass(
                'animated fadeInRight'
            );
        }
    });
});
