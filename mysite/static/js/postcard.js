// JavaScript Document


$('.native').hide().first().show();
$('.native1').hide().first().show();

	function totab(el,cLass){
		var el = el;
		$(el).find('li').hover(function(){
			_index=$(this).index();
			var content = $(this).parents('.tab-box').next().find('.native_box').find('.native,.native1');
			var con_two_img = $(this).parents('.overseas').next().find('.native,.native1');
			$(this).addClass(cLass).siblings().removeClass(cLass);
			content.eq(_index).show().siblings().hide();
			con_two_img.eq(_index).show().siblings().hide();
		})		
	}
	totab('.tab-select','con__nece_libor');

//tab选项卡
$(".guest_ul").hide().first().show();
$(".guest_tab_li").click(function(){
	index = $(this).index();
	$(this).siblings().find(".li_span").removeClass("border_bottom");
	$(this).find(".li_span").addClass("border_bottom");
	$(".guest_ul").hide().eq(index).show();
});