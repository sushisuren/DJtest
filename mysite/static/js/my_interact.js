//left nav
$(".cen_li_a").click(function(){
	$(this).siblings(".li_pull_down").slideToggle();
	$(this).children(".cen_li_i2").hasClass("cen_li_i2_2") ? $(this).children(".cen_li_i2").removeClass("cen_li_i2_2") : $(this).children(".cen_li_i2").addClass("cen_li_i2_2")
})
//星星打分

//星星打分
function dafen(a,b){
	$(a).click(function(){
		$(a).removeClass('active-star');
		$(this).addClass('active-star');
		var _val=$(this).attr('title');
		$(b).val(_val);
	});
}
dafen('.star_ul a','#zp');
dafen('.star_ul_1 a','#fw');
dafen('.star_ul_2 a','#xjb');
dafen('.star_ul_3 a','#ws');
//点击编辑
$('.dp_cen_i').click(function(){
	$('.pop_box').show();
})
$('.pop_i').click(function(){
	$('.pop_box').hide();
})
//游记
$('.note_list').hover(function(){
	$('.bianji_i').show();
	$('.delete').show();
	$('.xa').hide();
},function(){
	$('.bianji_i').hide();
	$('.delete').hide();
	$('.xa').show();
})
$('.delete').click(function(){
	$(this).parents('.note_list').remove()
})
//分享
$('.remove').click(function(){
	$(this).parents('.essential_bg').remove();
})




//shanchu
$('.shanchu').click(function(){
	$(this).parents('.bot_tab').remove();
});

$('.text_line').click(function(){
	$(this).parents().siblings('.popping').show();
})
$('.guan_bi').click(function(){
	$(this).parents('.popping').hide();
});
$('.aniu').click(function(){
  	//$(this).hasClass("queren") ? $(this).removeClass("queren") : $(this).addClass("fou")


	if($(this).hasClass('queren')){
		$(this).attr('value','0');
		$(this).removeClass('queren');
		$(this).addClass('fou');
		//$(this).siblings('input').val() = 1;
	}else{
		$(this).attr('value','1')
		$(this).removeClass('fou');
		$(this).addClass('queren');
	}
});

$('.shanchu').click(function(){
	$(this).parents('.bo_tab').remove();
});



$('.bmxx').click(function(){
	$('.popping').show();
})
$('.change').on('click',function(){
	$(this).hide().siblings('.save').show();
	var int = $(".int");
	int.removeAttr("readOnly");
	int.blur().eq(0).focus();
});
$('.save').on('click',function(){
	$(this).hide().siblings('.change').show();
	var int = $(".int");
	int.attr("readOnly","ture");
})