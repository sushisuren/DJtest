// JavaScript Document
//下啦城市
	$(".com_errorbox .xiang").click(function(e){
		e.stopPropagation();
		$(this).siblings(".city_search2").show();
		});
	$(document).click(function(){
		$(".city_search2").hide();
	});
	$(".ruzhu,.most").click(function(){
		$(".city_search2").hide();
	});
	$(".city_search2 a").click(function(){	
		$(".com_errorbox .xiang").text($(this).html());
		
		$(".city_search2").hide();

	
		});
//下啦 关键词

	$(".most").click(function(e){
		e.stopPropagation();
		$(".com_results1").show();
		});
	$(document).click(function(){
		$(".com_results1").hide();
	});
	$(".ruzhu").click(function(){
		$(".city_search1").hide();
	});
	$(".com_results1 a").click(function(){	
		$(".keyword .most").text ($(this).text());
		$(".com_results1").hide();
		});

laydate({
	elem: '#J-xl'
});
laydate({
	elem: '#J-xl1'
});

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
	
