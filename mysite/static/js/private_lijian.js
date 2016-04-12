// JavaScript Document
$(function(){
$(".da").mouseenter(function(){
	$(this).find("i").addClass("b1")
	$(this).find("b").addClass("b2")
	$(this).find("p").css("color","#f39600")
	}).mouseleave(function(){
		$(this).find("i").removeClass("b1")
		$(this).find("b").removeClass("b2")
		$(this).find("p").css("color","#404040")
		})
//二级的控制
$(".da").mouseenter(function(){
	$(this).children().children(".float_menu_right").show();
	}).mouseleave(function(){
		$(this).children().children(".float_menu_right").hide();
		})
//二级菜单结束

//推荐商家
	$(".bk").mouseenter(function(){
		$(this).find(".shadow").stop(true,true).animate({top:0})
	}).mouseleave(function(){
		$(this).find(".shadow").stop(true,true).animate({top:"220px"})
	});
//金牌导游
$(".char_li").click(function(){
	var _index = $(this).index();
    $(this).siblings().find("span").removeClass("block");
    $(this).find("span").addClass("block");
    $(this).parents(".li_jian").find(".tui_ji").hide().eq(_index).show();
});



});