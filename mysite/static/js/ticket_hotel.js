$(function(){
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
		var _b = $(this).index();
		$(".sunday_con ul li").find("i").removeClass("block");
		$(".sunday_con ul li").removeClass("waite");
		$(this).find("i").addClass("block");
		$(this).addClass("waite");
		$(".xuanxiangka").hide().eq(_b).show();
	});

	
	//日历
	laydate({
		elem: '#J-xl1'
	});

	//门票+酒店   选项卡
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
	recommend(".tui_ji",".tui_j ul li");
	recommend(".out",".out_j ul li");
	recommend(".out1",".out_ji ul li");
	
	//门票+酒店end
	//门票+酒店   的 鼠标经过  黑框消失
	$(".zhi_x").hover(function(){
		$(this).find(".next_shadow").hide();
		$(this).find(".img_next_shadow").hide();
		
	},function(){
		$(this).find(".next_shadow").show();
		$(this).find(".img_next_shadow").show();
	});
	//门票+酒店   的 鼠标经过  黑框消失end

	//门票+酒店 banner搜索框国内下啦
	$(".banner_dd1").click(function(e){
		e.stopPropagation();
		$(this).find(".buxian").show();
		});	
	$(".buxian").find("a").click(function(e){
		$(this).parents(".banner_dd1").find(".in_con").val($(this).text());
		$(".buxian").hide();
		e.stopPropagation();
		});	
	$(document).click(function(){
			$(".buxian").hide();
		});
	//门票+酒店 banner搜索框国内下啦end

	
	
	
	























	
});