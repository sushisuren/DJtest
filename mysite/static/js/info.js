// JavaScript Document
	var _index=0;
	var timer=null;
	function s(){
		$(".button_li").eq(_index).addClass("but_img").siblings().removeClass("but_img");
		$(".button_li").eq(_index).children(".img_sa").addClass("hide");
		$(".button_li").eq(_index).siblings().children(".img_sa").removeClass("hide");
		$(".ban_li").eq(_index).fadeIn(400).siblings().fadeOut(400);
	}
	$(".button_li").click(function(){
		_index=$(this).index();
		s();
	})
	timer=setInterval(auto,3000);   //定时器
	
	function auto(){
		if(_index>4)_index=0;
		s();
		_index ++;
	}
	
	$(".ban_li").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(auto,3000);
	})
	auto();        //函数调用立即执行
//tab 选项卡	
$(".matter_ul").hide().first().show();
$(".classify_li").click(function(){
	$(this).siblings().find(".classify_lip").removeClass("currnetA");
	$(this).find(".classify_lip").addClass("currnetA");
	index=$(this).index();
	$(".matter_ul").hide().eq(index).show();
})

$(".ul_li_d").hide().first().show();
$(".title_li").click(function(){
	$(this).siblings().removeClass("currenta");
	$(this).addClass("currenta");
	index=$(this).index();
	$(".ul_li_d").hide().eq(index).show();
})

//点击消息消失
	$(".r_i1,.r_i2").click(function(){
		$(this).parents(".matter_li").hide();
	})
