$(function(){
	//搜索框中——经过出现下拉框
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
	$(document).click(function(e){
		console.log(e.type);
		$('.f_s_na').hide();
	});

	//鼠标经过白色出现 加阴影
	function getshowhide(tb){
			$(tb).hover(function(){
				$(this).find('.shadow_hot_img').show();
				$(this).addClass("yin");
			},function(){
				$(this).find('.shadow_hot_img').hide();
				$(this).removeClass("yin");
			});
		}
		getshowhide('.limit_div li');
		getshowhide('.sunday_show dl');
	//白箭头——选项卡
	$(".xuanxiangka").hide().first().show();
	$(".sunday_con ul li").click(function() {
		var _i = $(this).index();
		$(".sunday_con ul li").find("i").removeClass("block");
		$(".sunday_con ul li").removeClass("waite");
		$(this).find("i").addClass("block");
		$(this).addClass("waite");
		$(".xuanxiangka").hide().eq(_i).show();
	});
	//正常选项卡
	function recommend(c,d){
		$(c).hide().first().show();
		$(d).mouseover(function(){
			var _i=$(this).index();
			$(this).siblings().find("span").removeClass("block");
			$(this).find("span").addClass("block");
			$(c).hide().eq(_i).show();
		});
	}
	recommend(".tese_z",".tese ul li");
	recommend(".tese_z1",".tese1 ul li");
	recommend(".tese_z2",".tese2 ul li");
	recommend(".tese_z3",".tese3 ul li");
	//手风琴
	$(".block_box ul li").hover(function(){
		$(this).find("i").hide().end().siblings().find("i").show();
		var num=$(this).index();
		for(var index=0; index<7;index++){
			if(index<=num){
				$(".block_box ul li").eq(index).stop().animate({left:(144*index)+'px'},500);
			}else{
				$(".block_box ul li").eq(index).stop().animate({left:(334+(index-1)*144)+'px'},500);
			}
	}
	
	
	
	
	
	
});
























	
});