$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        arrows: true
    });

    $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

    jQuery('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });

}());