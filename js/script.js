$(function () {

    $(window).on('activate.bs.scrollspy', function () {
        var hash = $('.site-nav')
            .find('a.active')
            .attr('href');

        if (hash !== '#page-profile') {
            $('header nav').addClass('inbody');
            $('#profile-nav').removeClass('invisible');

        } else {
            $('header nav').removeClass('inbody');
            $('#profile-nav').addClass('invisible');
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
