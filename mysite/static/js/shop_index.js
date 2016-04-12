$(function(){

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
