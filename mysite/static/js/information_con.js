$(function(){
	$('.abs_right_zhi').click(function(){
		$('.fix_box').show(400);
	})
	$('.close_fix').click(function(){
		$('.fix_box').hide(400);
	})
	$('.tab_right_inp').children().click(function(){
		var _index = $(this).index();
		$(this).addClass('acitve_inp_info').siblings().removeClass('acitve_inp_info');
		$(this).parents('.parents_div').find('.tab_box_hei  ul.tab_box_01').eq(_index).show().siblings().hide()
	})
	$(window).scroll(function(){
		var _scrTop=$(this).scrollTop();
		if(_scrTop>=300){
			$(".fix_scroll").fadeIn();
			
		}else{
			$(".fix_scroll").fadeOut();
		}
	})
	$('.btn_fix_pl').click(function(){
		var _scrolltop = $(window).scrollTop();
		var height = _scrolltop;
		$('.fix_box').css({'top':height});
		$('.fix_box').show(400);
	})
	$('.btn_fix_scroll').click(function(){
		$("body,html").stop().animate({scrollTop:0},500);
	})
})
