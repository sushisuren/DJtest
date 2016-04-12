$(function(){
   
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
	//达人专栏
	$(".notes_right_ul li").click(function(){
		var dex1 = $(this).index();
		$(this).siblings().removeClass("select");
		$(this).addClass("select");
		$(".notes_right_dl").hide().eq(dex1).show();
	});





























})
