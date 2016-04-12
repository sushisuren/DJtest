$(function(){


	$(".he").hover(function(){
		$(this).find(".shaow").hide();
	},function(){
		$(this).find(".shaow").show();
	});





	//选项卡
	$(".pho_splendid").find(".photo_ul").hide().first().show();
	$(".pho_splendid").find(".photo_ul1").hide().first().show();
	$(".pho_spl_control ul li").click(function(){
		var photo=$(this).index();
		$(this).siblings().find("i").hide();
		$(this).find("i").show();
		$(this).parents(".pho_splendid").find(".photo_ul").hide().eq(photo).show();
	});





















	
});