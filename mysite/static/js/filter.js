$(function() {

	$('.line_btn').find('a').click(function() {
		$(this).addClass('active_filter_sub').siblings().removeClass('active_filter_sub')
	})
	$('.more_gd').click(function() {
		$('.more_btn').stop().slideToggle();
	})

	function toslide(ele, oClass) {
		$(ele).click(function() {
			$(this).toggleClass('shous-tab-pos');
			$(this).parents('.oEle').find(oClass).slideToggle();
		})
	}
	toslide('.shous_tab_sel', '.h_3_list_right_a');








	//轮播与点击变换
	var _index = 0;
	var timer = null;
	$(".hot_li li").click(function() {
		_index = $(this).index();
		sel();
	})
	timer = setInterval(auto, 3000); //定时器

	function auto(e) {
		_index++;
		if (_index > 4) _index = 0;
		sel();
	}

	$(".hot_top").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(auto, 3000);
	})

	function sel() {
		$(".hot_li li").eq(_index).addClass("currentt").siblings().removeClass("currentt");
		$(".hot_top").eq(_index).fadeIn(400).siblings().fadeOut(400);
	}






	
	
	
	
	
	$('.more').click(function(){
		$(this).prev('div').find('.subnav_width').toggleClass('subnav_width_toggle');
		
		if(!$(this).prev('div').find('.subnav_width').hasClass('subnav_width_toggle')){
			$(this).text('更多');
		}else {
			$(this).text('收起');
		}
		
	});
	 
	
	
	
	
	
	
	
	
	$('dd.tab_filter').find('li').click(function(){
		var _index=$(this).index()
		$('.car_tab_filter').find('.tab_car_abs').eq(_index).show().siblings().hide();
	});



	
	
	
	



	laydate({
		elem: '#J-xl_A'
	});
	laydate({
		elem: '#J-xl_B'
	});



})