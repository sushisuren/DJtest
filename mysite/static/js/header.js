$(function(){
    $('.first_sub_li').hover(function(){
        $(this).css('background-color','#fff');
        $(this).find('div.sel_sub_56').show();
    },function(){
        $(this).css('background-color','');
        $(this).find('div.sel_sub_56').hide();
    });

    $('.pro_btn1').click(function(e){
        e.stopPropagation();
        $(this).parents('.pro_box').find('.pro_sel').show();
        $('.city_sel').hide();
        $('.icon_js').css('background-position','-47px -296px');
        $('.city_icon').css('background-position','-47px -290px');
    });
    $('.pro_sel').find('li').click(function(){
        var protext = $(this).text();
        $('.pro_btn1').text(protext);
    });

    $('.city_header').click(function(e){
        e.stopPropagation();
        $('.city_sel').show();
        $('.pro_sel').hide();
        $('.city_icon').css('background-position','-47px -296px');
        $('.icon_js').css('background-position','-47px -290px');
    });
    $('.city_sel').find('span').click(function(){
        var citytext = $(this).text();
        $('.city_header').text(citytext);
    });
    $(document).click(function(){
        $('.icon_js').css('background-position','-47px -290px');
        $('.city_icon').css('background-position','-47px -290px');
        $('.pro_sel').hide();
        $('.city_sel').hide();
    });

    $('.nav').find('li').hover(function(){
        $(this).addClass('acitve_nav')
        $(this).find('.nav_icon').css('background-position','-125px -166px');
        $(this).find('.slidenav').show()
    },function(){
        $(this).removeClass('acitve_nav')
        $(this).find('.nav_icon').css('background-position','-126px -160px');
        $(this).find('.slidenav').hide()
    });



});