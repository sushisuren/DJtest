$(function(){
    var _index = 0;
    var timer = null;
    var imglength =$('.smallimg li').size();
    $('.smallimg li').click(function(){
        _index = $(this).index();
        fadeIn();

    })
    timer = setInterval(auto,3000);
    function auto(){
        _index++;
        if(_index > imglength){
            _index = 0;
        }
        fadeIn();

    }
    function fadeIn(){
        $('.smallimg li').eq(_index).addClass('active_bann').siblings().removeClass('active_bann');
        $('.bigimg li').eq(_index).fadeIn().siblings().fadeOut();
    }
    $('.bannerbox').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(auto,3000);
    })
});