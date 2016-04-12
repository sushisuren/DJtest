// JavaScript Document
	var _index=0;
	var timer=null;
	function s(){
		$(".button_li").eq(_index).addClass("but_img").siblings().removeClass("but_img");
		$(".button_li").eq(_index).children(".img_sa").addClass("hide");
		$(".button_li").eq(_index).siblings().children(".img_sa").removeClass("hide");
		$(".ban_li").eq(_index).fadeIn(400).siblings().fadeOut(400);
	}
	$(".button_li").click(function(){
		_index=$(this).index();
		s();
	})
	timer=setInterval(auto,3000);   //定时器
	
	function auto(){
		if(_index>4)_index=0;
		s();
		_index ++;
	}
	
	$(".ban_li").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(auto,3000);
	})
	auto();        //函数调用立即执行
//划过显示top
$(".login_b_li").hover(function(){
	$(this).children(".li_p").show();
	$(this).siblings().children(".li_p").hide();
},function(){
	//$(this).siblings().children(".li_p").hide();
	$(this).children(".li_p").delay(3000).hide(0);
});

//内容
$(".li_way").hover(function(){
	$(this).animate({"height":"90px"},500);
},function(){
	$(this).animate({"height":"50px"},500);
});
//
$(".way_i1").hover(function(){
	$(this).siblings(".p_aa").delay(500).show(0);
},function(){
	$(this).siblings(".p_aa").delay().hide(0);
});

//
$(".way_ri").hover(function(){
	$(this).siblings(".p_a").delay(500).show();
},function(){
	$(this).siblings(".p_a").delay().hide();
});
//点击出现
/*$('.wodr').click(function(){
	$('.word').slideDown();
});
$('.word_i ').click(function(){
	$(this).parents('.word').slideUp();
});
$('.pci').click(function(){
	$('.pic').slideDown();
});
$('.word_i ').click(function(){
	$(this).parents('.pic').slideUp();
});
$('.viod').click(function(){
	$('.vido').slideDown();
});
$('.word_i ').click(function(){
	$(this).parents('.vido').slideUp();
});
$('.shrea').click(function(){
	$('.share').slideDown();
});
$('.word_i ').click(function(){
	$(this).parents('.share').slideUp();
});*/


//标题点击
$('.left_li ').click(function(){
	var index = $(this).index();
	$(this).addClass('currenta ').siblings().removeClass('currenta');
	$('.same').hide().eq(index).show();
});
$('.word_i').click(function(){
	$(this).parents('.same').remove();
});