$(function(){

//nav消失
	$(".r_i1,.r_i2").click(function(){
		$(this).parents(".matter_li").hide();
	});


	$(".nav_li").mouseover(function(){
		$(this).find(".teo_content1").show();
		$(this).siblings().find(".teo_content1").hide();
	}).mouseout(function(){
		$(".teo_content1").hide();
	});
	$(".navn").mouseout(function(){
		$(".block").show();
	});
	$("#jingdian,#sheying,#youji,#shipin,#gongong,#fengwushe,#shangcheng").mouseover(function(){
		$(".teo").show();
	}).mouseout(function(){
		$(".teo").hide();
	});
	//banner
//定义时间函数
    var _index=0;
    var timer=null;
    function s(){
        $(".notes_right_ul li").eq(_index).addClass("select").siblings().removeClass("select");
        $(".banner_con ul li").eq(_index).fadeIn(400).siblings().fadeOut(400);
    }
    $(".notes_right_ul li").click(function(){
        _index=$(this).index();
        s();
    })

    timer=setInterval(auto,3000);   //定时器

    function auto(){

        if(_index>2)_index=0;
        s();
        _index ++;

    }

    $(".banner_con ul li").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(auto,3000);
    })
    auto();        //函数调用立即执行

	//banner  end
    //右侧小站的tab
    function zhan(a,b,c) {
        $(a).click(function () {
            index = $(this).index();   //li的索引
            $(this).siblings().removeClass(c);
            $(this).addClass(c);
            $(b).hide().eq(index).show();  //内容的索引
        });
    }
    zhan(".banner_r_ul li",".bot_ul","l_bg");
    zhan(".notes_ul li",".love","select");
    //最新推荐
	$(".notes_left_ul li").click(function(){
		var dex1 = $(this).index();
		$(this).siblings().find("span").removeClass("zuixin");
		$(this).siblings().find("i").removeClass("ccc");
		$(this).find("span").addClass("zuixin");
		$(this).find("i").addClass("ccc");
		$(".essen_f").hide().eq(dex1).show();
	});
    //我的关注
    $(".active_derec").click(function(){
        $(this).siblings(".active_join1").toggleClass("baifen");
        $(this).toggleClass("active_i");
    });
    //门票
    $(".notes_right_ul li").click(function(){
        var dex1 = $(this).index();
        $(this).siblings().removeClass("select");
        $(this).addClass("select");
        $(".char_dl_1").hide().eq(dex1).show();
    });

//点击更多
    $(".new_more").click(function(){
        $(this).siblings(".new_l_div").toggleClass("height_bai");
    });

//我的关注页面的  叉叉
    $(".notes_l_i").click(function(){
        $(this).parent(".dele").remove();
    });



























})
