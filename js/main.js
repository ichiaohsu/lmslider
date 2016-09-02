$(window).load(function(){
    var theImages = $('.lmphoto-wrapper li img');
    var theWidth = theImages.width();

    $('.lmphoto-wrapper').css({
        width: function(){
            return theWidth;
        },
        height: function(){
            return theImages.height();
        },
        position: 'relative',
        overflow: 'hidden'
    });

    var totalWidth = theImages.length * theWidth;
    $('.lmslider-table').css({
        width: function(){
            return totalWidth;
        },
        height: function(){
            return theImages.height();
        }
    });

    $('.next').bind("click", function(){
        // Firstly find active photo
        var total = $('.lmslider-table li').length;
        var activePhoto = $(this).siblings('.lmphoto-wrapper').find('.active-photo');
        var activeIndex = activePhoto.index();
        console.log("n active photo index = " + activeIndex);
        if (total - activeIndex === 1){
            $(this).siblings('.lmphoto-wrapper').children('.lmslider-table').animate({
                "margin-left": (0)
            }, 700);
            activePhoto.siblings(':first').addClass('active-photo');
        }else{
            $(this).siblings('.lmphoto-wrapper').children('.lmslider-table').animate({
                "margin-left": (-(activeIndex + 1) * theWidth)
            }, 700);
            activePhoto.next().addClass('active-photo');
        }

        activePhoto.removeClass('active-photo');

    });

    $('.previous').bind("click", function(){
        // Firstly find active photo
        var total = $('.lmslider-table li').length;
        var activePhoto = $(this).siblings('.lmphoto-wrapper').find('.active-photo');
        var activeIndex = activePhoto.index();
        //console.log("p active photo index = " + activeIndex);
        if (activeIndex === 0){
            $(this).siblings('.lmphoto-wrapper').children('.lmslider-table').animate({
                "margin-left": (-(total - 1) * theWidth)
            }, 700);
            activePhoto.siblings(':last').addClass('active-photo');
        }else{
            $(this).siblings('.lmphoto-wrapper').children('.lmslider-table').animate({
                "margin-left": (-(activeIndex - 1) * theWidth)
            }, 700);
            activePhoto.prev().addClass('active-photo');
        }
        // Remove old active class and add new
        activePhoto.removeClass('active-photo');

    });
});// Window load
