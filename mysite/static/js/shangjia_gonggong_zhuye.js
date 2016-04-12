$(function(){
   

	//达人专栏
	$(".notes_right_ul li").click(function(){
		var dex1 = $(this).index();
		$(this).siblings().removeClass("select");
		$(this).addClass("select");
		$(".banner_con li").eq(dex1).fadeIn(400).siblings().fadeOut(400);
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




























})
