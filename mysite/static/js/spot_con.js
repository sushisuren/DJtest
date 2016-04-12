$(function(){
	$('.h2_tit').hover(function(){
		$(this).addClass('h2_tit_act').siblings().removeClass('h2_tit_act');
		$(this).parents('.contest_box_spot').find('.contest').children('.con_01').eq(_index).show().siblings().hide()
	})
	$('.btn_sel_qb').click(function(e){
		e.stopPropagation();
		$('.city_search0').show();
		$('.city_search1').hide();
	})
	$('.city_sea0 a').click(function(e){
		e.stopPropagation();
		var conText = $(this).text();
		$('.text_span').text(conText);
		$('.city_search').hide();
	})
	$('.btn_sel_jd').click(function(e){
		e.stopPropagation();
		$('.city_search1').show();
		$('.city_search0').hide();
	})
	$('.city_sea1 a').click(function(e){
		e.stopPropagation();
		var conText2 = $(this).text();
		$('.text_span_jd').text(conText2);
		$('.city_search1').hide();
	})
	$(document).click(function(e){
		e.stopPropagation();
		$('.city_search').hide();
	})
})
