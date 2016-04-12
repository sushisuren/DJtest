$(function(){
//搜索框中——点击出现下拉框
function toselect(ele){
	$(ele).mouseover(function(){
	$(this).find(".float_menu_right").show();
	}).mouseout(function(){
		$(this).find(".float_menu_right").hide();
	});
}	
toselect('.da');




var $f_s_a=$(".f_s_a");
$f_s_a.click(function(e){
	e.stopPropagation();
	$('.f_s_na').show();
});
$('.f_s_na .txt_sele').click(function(e){
	e.stopPropagation();
	$($f_s_a).find('.all_search_first').text($(this).text());
	$('.f_s_na').hide();
});
$(document).click(function(){	
	$('.f_s_na').hide();
});

//鼠标经过白色遮罩/阴影
function getshowhide(tb,cLass){
		$(tb).hover(function(){
			$(this).find(cLass).show();
			$(this).addClass("yin");
		},function(){
			$(this).find(cLass).hide();
			$(this).removeClass("yin");
		});
	}
	getshowhide(".limit_div li",".shadow_hot_img");

//选项卡
function recommend(c,d){
		$(c).hide().first().show();
		$(d).mouseover(function(){
			var _i=$(this).index();
			$(this).siblings().find("span").removeClass("block");
			$(this).find("span").addClass("block");
			$(c).hide().eq(_i).show();
		});
	}
	recommend(".tui_ji2",".tui_j2 ul li");
	recommend(".tui_ji1",".tui_j1 ul li");
	recommend(".tui_ji",".tui_j ul li");
//鼠标经过黑框消失
$(".zhi_x").hover(function(){
	$(this).find(".next_shadow").hide();
	$(this).find(".img_next_shadow").hide();
	
},function(){
	$(this).find(".next_shadow").show();
	$(this).find(".img_next_shadow").show();
});













	
});