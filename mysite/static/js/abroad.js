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

	// tab选项卡里面  遮罩显示隐藏功能
	$('.advert').find('a').hover(function(){
		$(this).find('.next_shadow').hide();
		$(this).find('.img_next_shadow').hide();
	},function(){
		$(this).find('.next_shadow').show();
		$(this).find('.img_next_shadow').show();
	})
})
