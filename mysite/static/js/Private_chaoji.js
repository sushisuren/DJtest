$(function(){
	
	
	function getshowhide(ele){
		$(ele).hover(function(){
			$(this).find('.shadow_hot_img').show()
		},function(){
			$(this).find('.shadow_hot_img').hide()
		})
	}
	getshowhide('.hot-box-hover');
	
	function toselect(ele){
		var ele=ele
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
		$('.f_s_na').hide();
	});
//  tab 选项卡部分
	function totab(el,cLass){
		var el = el;
		$(el).find('li').hover(function(){
			_index=$(this).index();
			var content = $(this).parents('.tab-box').next().find('.native_box').find('.native');
			var con_two_img = $(this).parents('.overseas').next().find('.native');
			$(this).addClass(cLass).siblings().removeClass(cLass);
			content.eq(_index).show().siblings().hide();
			con_two_img.eq(_index).show().siblings().hide();
		})		
	}
	totab('.tab-select','con__oversea_libor');
	
	
	function totab2(el,cLass){
		var _index;
		$(el).find('li').hover(function(){
			_index=$(this).index();
			var content = $(this).parents('.tab-box').find('.native_box').find('.native');
			$(this).addClass(cLass).siblings().removeClass(cLass);
			content.eq(_index).show().siblings().hide();
		});		
	}
	
	totab2('.tab-select','con__nece_libor');
	
//浮动导航选项卡
$(".flo_li").click(function(){
    var _inde = $(this).index();
    $(this).siblings().addClass("flo_li1");
    $(this).removeClass("flo_li1");
    $(".flo_x").hide().eq(_inde).show();
});
})
