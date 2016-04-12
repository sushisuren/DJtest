$(function(){

    var _index = 0;
    var timer = null;
    var imglength =$('.smallimg_cx li').size();
    $('.smallimg_cx li').click(function(){
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
        $('.smallimg_cx li').eq(_index).addClass('libg').siblings().removeClass('libg');
        $('.bigimg li').eq(_index).fadeIn().siblings().fadeOut();
    }
    $('.bannerbox').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(auto,3000);
    });
    function toselect(ele){
        var ele=ele;
        $(ele).mouseover(function(){
            $(this).find(".float_menu_right").show();
        }).mouseout(function(){
            $(this).find(".float_menu_right").hide();
        });
    }
    toselect('.da');







    function  toSel(btn,oneName){
        $(btn).click(function(){
            var _index = $(this).index();
            $(this).addClass(oneName).siblings().removeClass(oneName);
            $(this).parents('.width920').find('.pos_rel').children('li').eq(_index).fadeIn().siblings().fadeOut();
        })
    }
    toSel('.tour_bg_01 li','tour_tab_active_one');
    toSel('.tour_bg_02 li','tour_tab_active_two');
    toSel('.tour_bg_03 li','tour_tab_active_three');
    toSel('.tour_bg_04 li','tour_tab_active_four');
    toSel('.tour_bg_05 li','tour_tab_active_five');
    toSel('.tour_bg_06 li','tour_tab_active_six');
    toSel('.tour_bg_07 li','tour_tab_active_sevn');
    toSel('.tour_bg_08 li','tour_tab_active_eig');
    toSel('.tour_bg_09 li','tour_tab_active_nei');
    toSel('.tour_bg_10 li','tour_tab_active_ten');


    $('.charts_num li').click(function(){
        var _index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(this).parents('.char_ph').find('.box_chart').children('.tab_char').eq(_index).show().siblings().hide();


    })
})
