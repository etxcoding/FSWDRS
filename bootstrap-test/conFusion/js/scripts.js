$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            
            $('#mycarousel').carousel('pause');

            $('#carouselButton').removeClass('btn-danger')
            $('#carouselButton').children('span').removeClass('fa-pause');

            $('#carouselButton').addClass('btn-success')
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')) {
            
            $('#mycarousel').carousel('cycle');

            $('#carouselButton').removeClass('btn-success')
            $('#carouselButton').children('span').removeClass('fa-play');

            $('#carouselButton').addClass('btn-danger')
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    // Modal functionality.
    $('#button-login').click(function() {
        $('#loginModal').modal('toggle');
    });
    $('#button-reserve').click(function() {
        $('#reserveModal').modal('toggle')
    });
});