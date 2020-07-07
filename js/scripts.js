
$( document ).ready(function() {

    AOS.init({
        duration: 1000,
    })

    $(".pricing-item-click").click(function() {
        $(".pricing-item-click").removeClass('active')
        $(this).addClass('active')
    });

    $(".collapse-button").click(function () {
        $(this).toggleClass('show')
        $('.collapse-content').slideToggle()
    });

    $(".select").click(function () {
        $(this).find('.selected').toggleClass('show')
        $('.select-ul').slideToggle()
    });

    $(".select-item").click(function () {
        $('#selected-img').attr('src', $(this).find('img').first().attr('src'));
        $('#selected-value').text($(this).find('div').first().text());
    });

    $("#button-top").bind('click', function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 1000);
    });

    var screenWidth = $(window).width();
    if (screenWidth > 1200) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#button-top').css('display', 'flex');
            }  else {
                $('#button-top').css('display', 'none');
            }
        })
    }  else {
        $('#button-top').css('display', 'none');
    }
});
