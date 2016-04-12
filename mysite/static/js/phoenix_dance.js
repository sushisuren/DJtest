// JavaScript Document
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

//右侧小站的tab
	$(".banner_r_ul li").click(function(){
		index=$(this).index();   //li的索引
		$(this).siblings().removeClass("l_bg");
		$(this).addClass("l_bg");
		$(".bot_ul").hide().eq(index).show();  //内容的索引
	});

//右侧小站的背景奇数偶数
	$(document).ready(function(){
		$(".bot_li:odd").css({"background":"#eee"});

	});







	});