// JavaScript Document
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


//二级菜单导航
	$(".con_ul li").hover(function(){
		$(this).children(".con_r").show();
		},function(){
			$(this).children(".con_r").hide();
		});
//下拉	
	$(".spec_rp").click(function(e){
		e.stopPropagation();
		$(".xia_city").show();
	})
	$(".xia_city a").click(function(){
		$(".spec_rp .p_span").text($(this).text());
		$(".xia_city").hide();
	})
	$(document).click(function(){
			$(".xia_city").hide();
		});
//shadow
$('.china_li').hover(function(){
		$(this).find('.china_shadow').stop(true).animate({height:'100%'},400);
	},function(){
		$(this).find('.china_shadow').stop(true).animate({height:'40px'},400);
	})

//鼠标经过黑框消失
$(".zhi_x").hover(function(){
	$(this).find(".next_shadow").hide();
	$(this).find(".img_next_shadow").hide();
	
},function(){
	$(this).find(".next_shadow").show();
	$(this).find(".img_next_shadow").show();
})

