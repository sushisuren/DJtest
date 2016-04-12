
var $f_s_a=$(".f_s_a");
$f_s_a.click(function(e){
	e.stopPropagation();
	$('.f_s_na').show();
});
$('.f_s_na .txt_sele').click(function(e){
	e.stopPropagation();
	$($f_s_a).find('.all_search_first').text($(this).text());
	$('.f_s_na').hide();
});
$(document).click(function(e){
	$('.f_s_na').hide();
});

//侧导航
function toselect(ele){
		var ele=ele
		$(ele).mouseover(function(){
		$(this).find(".float_menu_right").show();
		}).mouseout(function(){
			$(this).find(".float_menu_right").hide();
		});
	}
	toselect('.da');

//热门推荐
$(".notes_con_ul li").click(function(){
	var dex = $(this).index();
	$(this).siblings().find("span").removeClass("color_l");
	$(this).siblings().find("i").hide();
	$(this).find("span").addClass("color_l");
	$(this).find("i").show();
	$(".notes_ul").hide().eq(dex).show();
});

//最新推荐
$(".notes_left_ul li").click(function(){
	var dex1 = $(this).index();
	$(this).siblings().find("span").removeClass("zuixin");
	$(this).siblings().find("i").removeClass("ccc");
	$(this).find("span").addClass("zuixin");
	$(this).find("i").addClass("ccc");
	$(".essen_f").hide().eq(dex1).show();
});

//hover
function recommend(c,d){
	$(c).hide().first().show();
	$(d).mouseover(function(){
		var _i=$(this).index();
		$(this).siblings().find("span").removeClass("block");
		$(this).find("span").addClass("block");
		$(c).hide().eq(_i).show();
	});
}
recommend(".tui_ji2",".tui_j2 ul li");
recommend(".tui_ji1",".tui_j1 ul li");
recommend(".tui_ji",".tui_j ul li");


//美食
$('.zn').hover(function(){
	$('.zn_shadow').show();
},function(){
	$('.zn_shadow').hide()
});

//address的banner

var _index =  0;
var timer = null;
function hg(){
	$('.btn_li').eq(_index).find('.sha_d').hide();
	$('.btn_li').eq(_index).siblings().find('.sha_d').show();
	$('.ban_li').eq(_index).fadeIn(400).siblings().fadeOut(400);
}
timer=setInterval(auto,3000);   //定时器

function auto(){
	if(_index>3)_index=0;
	hg();
	_index ++;
}

$(".btn_li").hover(function(){
	_index=$(this).index();
	hg();
	clearInterval(timer);
},function(){
	timer=setInterval(auto,3000);
})
auto();        //函数调用立即执行

//线路条数
$(".rou_der").click(function(){
	$(this).siblings(".rou_rou").find(".rou_rou1").show()

});
$(".rou_rou_i").click(function(){
	$(this).parents(".rou_rou1").hide();

});


//回滚顶部
$('.e_handler_gotop').click(function(){
	$('body,html').stop().animate({scrollTop:0},500);
});
//指南又侧导航



//鼠标点击事件
var mark=1;
$(".box_li").click(function(){
	mark=2;
	var _index=$(this).index();
	$(this).children(".span_a").addClass("dot");
	$(this).siblings().children(".span_a").removeClass("dot")

	var _top=$(".bo").eq(_index).offset().top;
	$("body,html").animate({scrollTop:_top},500,function(){
		mark=1;
	});
});

$(window).scroll(function(){
	if(mark==1){
		var _t=$(this).scrollTop();
		if (_t >= 400) {
			$(".guide_right").fadeIn();
		} else {
			$(".guide_right").hide();
		}
		var obj=$(".guide_left .bo");

		obj.each(function() {
			var _index=$(this).index();
			var _Height=obj.eq(_index).offset().top+($(this).height())/2;
			if(_t<_Height){
				$(".box_li").eq(_index).find(".span_a").addClass("dot");
				$(".box_li").eq(_index).siblings().find(".span_a").removeClass("dot");
				return false;
			}
		});
	}
});


