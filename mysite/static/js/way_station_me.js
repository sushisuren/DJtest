// JavaScript Document
//划过显示top
$(".login_b_li").hover(function(){
	$(this).children(".li_p").show();
	$(this).siblings().children(".li_p").hide();
},function(){
	//$(this).siblings().children(".li_p").hide();
	$(this).children(".li_p").delay(3000).hide(0);
});

//内容的相关的js
//回复
$(".spa1").click(function(){
	$(this).parents().siblings(".liuyan").show();
});
//删除
$(".del").click(function(){
	$(this).parents(".main").hide();
});
//编辑
$('.spa2').click(function(){
	$('.redact').show();
});
$('.gbd').click(function(){
	$('.redact').hide();
});
//share
$('.spa3').click(function(){
	$('.share').show();
});
$('.gbd').click(function(){
	$('.share').hide();
});
//返回顶部
$(".span_i").click(function () {
	$("body,html").stop().animate({scrollTop: 0}, 500)
})