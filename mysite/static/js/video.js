// JavaScript Document
$(".li_left,.li_mi,.li_right,.spot_b_li").hover(function(){
	$(this).find(".shade_big").show();
},function(){
	$(this).find(".shade_big").hide();
});

//banner js
$(".ban_li").hide().first().show();
var _index=0;
var timer=null;
//定义轮播函数
function lunbo(){
	$(".ban_li").eq(_index).fadeIn().siblings().hide();
};
//点击按钮执行函数
$(".span_btn1").click(function(){;
	_index++;
	if(_index>2)_index=0;
	lunbo();
});
$(".span_btn2").click(function(){
	_index--;
	if(_index<0)_index=2;
	lunbo();
});
//定义时间函数
timer=setInterval(function(){
	_index++;
	if(_index>2)_index=0;
	lunbo();
},3000);
//鼠标hover执行
$(".banner").hover(function(){
	clearInterval(timer);
},function(){
	timer=setInterval(function(){
		_index++;
		if(_index>2)_index=0;
		lunbo();
	},3000);
});

//tab选项卡
$(".spot_li").click(function(){
	$(this).addClass("currena").siblings().removeClass("currena");
	$(this).children(".xbj").show();
	$(this).siblings().children(".xbj").hide();
	index=$(this).index();   //li的索引
	$(".spot_b_ul").hide().eq(index).show();  //内容的索引
});

$(".hot_li").click(function(){
	$(this).addClass("curr").siblings().removeClass("curr");
	index=$(this).index();   //li的索引
	$(".bot_ul").hide().eq(index).show();  //内容的索引
});
//点击的时候变换
$(".great_ul").hide().first().show();
$(".najaha_ul").hide().first().show();
$(".changyou_ul").hide().first().show();
$(".food_ul").hide().first().show();
var index = 0;
function change(){
	$(".great_ul,.najaha_ul,.changyou_ul,.food_ul").eq(_index).fadeIn().siblings().hide();
};
function change1(){
	$(".najaha_ul").eq(_index).fadeIn().siblings().hide();
};
function change2(){
	$(".changyou_ul").eq(_index).fadeIn().siblings().hide();
};
function change3(){
	$(".food_ul").eq(_index).fadeIn().siblings().hide();
};
$(".bgBtn_r").click(function(){;
	_index++;
	if(_index>3)_index=0;
	change();
});
$(".bgBtn_l").click(function(){
	_index--;
	if(_index<0)_index=3;
	change();
});

$(".bar").click(function(){;
	_index++;
	if(_index>3)_index=0;
	change1();
});
$(".bal").click(function(){
	_index--;
	if(_index<0)_index=3;
	change1();
});

$(".bacr").click(function(){;
	_index++;
	if(_index>3)_index=0;
	change2();
});
$(".bacl").click(function(){
	_index--;
	if(_index<0)_index=3;
	change2();
});

$(".bafr").click(function(){;
	_index++;
	if(_index>3)_index=0;
	change3();
});
$(".bafl").click(function(){
	_index--;
	if(_index<0)_index=3;
	change3();
});
