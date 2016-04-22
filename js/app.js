$(function(){

//Menu górne

    $("#dropDownMenu").mouseenter(function(){
        $("#aboutUs li").slideDown(500);
    });
    $("#dropDownMenu").mouseleave(function(){
        $("#aboutUs li").slideUp(500);
    });


//Slider
    $('.arrow.left').on('click', function() {
        var $last = $('.container div:last');
        $('.container').prepend($last);
        $('.container').animate({
            marginLeft: '-=100%'
        },0)
        $('.container').animate({
            marginLeft: '+=100%'
        }, 200);
    });

    $('.arrow.right').on('click', function() {
        var $first = $('.container div:first');
        $('.container').append($first);
        $('.container').animate({
            marginLeft: '+=100%'
        },0);
        $('.container').animate({
            marginLeft: '-=100%'
        }, 200);
    });


//Bloki z obrazkami

    $(".transparentStripe").mouseenter(function(){
        $(this).hide("slow");
    });
    $(".transparentStripe").mouseleave(function(){
        $(this).show("slow");
    });

});
