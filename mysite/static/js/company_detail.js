// JavaScript Document
$(".right_span").click(function(){
	$(this).siblings(".right_hide").slideToggle();	
});


//轮播与点击变换
	var _index=0;
	var timer=null;
	$(".hot_li li").click(function(){
		_index=$(this).index();
		sel();
	})
	timer=setInterval(auto,3000);   //定时器
	
	function auto(e){
		_index++;
		if(_index>3)_index=0;
		sel();
	}
	
	$(".hot_top").hover(function(){
		clearInterval(timer);
	},function(){
	timer=setInterval(auto,3000);
	})
	
	function sel(){
		$(".hot_li li").eq(_index).addClass("currentt").siblings().removeClass("currentt");
		$(".hot_top").eq(_index).fadeIn(400).siblings().fadeOut(400);
	}
