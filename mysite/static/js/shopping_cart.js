$(function(){


$(".re_f").hide().first().show();
$(".referral ul li").hover(function(){
	var de=$(this).index();
	$(this).siblings().removeClass("re_colo");
	$(this).siblings().find("i").hide();
	$(this).addClass("re_colo");
	$(this).find("i").show();
	$(".re_f").hide().eq(de).show();
	
	});


$(".dele_k i").click(function(){
	
	$(this).parents(".dele_float").hide();
	})


	
});