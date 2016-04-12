	// con1 tab
	var _index=0;
	$('li.tab_sel').click(function(){
		_index=$(this).index();
		$(this).addClass('con_sel_green').siblings().removeClass('con_sel_green');
		$('.tab').eq(_index).show().siblings().hide();
	})
	
	$('.tab li').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'100%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	
	//shadow tab2   秒杀   jquery
	
	$('li.tab_sel2').click(function(){
		_index=$(this).index();
		$(this).addClass('con_sel_green').siblings().removeClass('con_sel_green');
		$('.kill').eq(_index).show().siblings().hide();
	})
	
	$('.kill li').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'100%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	//shadow tab3   国内   jquery
	
	$('li.tab_sel3').click(function(){
		_index=$(this).index();
		$(this).addClass('con_sel_green').siblings().removeClass('con_sel_green');
		$('.private').eq(_index).show().siblings().hide();
	})
	$('div.list_big').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'90%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	
	$('div.listsmall li').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'90%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	
	$('div.list_smallnor').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'90%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	
	//shadow tab4   国内   jquery
	$('li.tab_sel4').click(function(){
		_index=$(this).index();
		$(this).addClass('con_sel_green').siblings().removeClass('con_sel_green');
		$('.hotel').eq(_index).show().siblings().hide();
	})
	$('.china li').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'100%'},400);
		$(this).find('a').stop(true).animate({paddingTop:'60px'},400)
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
		$(this).find('a').stop(true).animate({paddingTop:'0px'},400)
	})
	
	//shadow tab5   门票   jquery
	
	$('li.tab_sel5').click(function(){
		_index=$(this).index();
		$(this).addClass('con_sel_green').siblings().removeClass('con_sel_green');
		$('.ticket').eq(_index).show().siblings().hide();
	})
	$('div.list_big').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'90%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	
	$('div.listsmall li').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'90%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	
	$('div.list_smallnor').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'90%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	
	//shadow tab6   酒店   jquery
	$('li.tab_sel6').click(function(){
		_index=$(this).index();
		$(this).addClass('con_sel_green').siblings().removeClass('con_sel_green');
		$('.hotel').eq(_index).show().siblings().hide();
	})
	$('.hotel li').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'100%'},400);
		$(this).find('a').stop(true).animate({paddingTop:'60px'},400)
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
		$(this).find('a').stop(true).animate({paddingTop:'0px'},400)
	})
	
	//shadow tab7   出境游   jquery
	
	$('li.tab_sel7').click(function(){
		_index=$(this).index();
		$(this).addClass('con_sel_green').siblings().removeClass('con_sel_green');
		$('.depart').eq(_index).show().siblings().hide();
	})
	
	$('div.list_big').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'90%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	
	$('div.listsmall li').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'90%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	
	$('div.list_smallnor').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'90%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	//shadow tab8     游轮部分  jquery
	$('li.tab_sel8').click(function(){
		_index=$(this).index();
		$(this).addClass('con_sel_green').siblings().removeClass('con_sel_green');
		$('.loose').eq(_index).show().siblings().hide();
	})
	$('.loose li').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'100%'},400);
		$(this).find('a').stop(true).animate({paddingTop:'60px'},400)
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
		$(this).find('a').stop(true).animate({paddingTop:'0px'},400)
	})
	//shadow tab9     当地服务  jquery
	$('li.tab_sel9').click(function(){
		_index=$(this).index();
		$(this).addClass('con_sel_green').siblings().removeClass('con_sel_green');
		$('.locally').eq(_index).show().siblings().hide();
	})
	$('div.list_big').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'90%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	
	$('div.listsmall li').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'90%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	
	$('div.list_smallnor').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'90%'},400);
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
	})
	// shadow tab  10  特产部分  jquery
	
	$('li.tab_sel10').click(function(){
		_index=$(this).index();
		$(this).addClass('con_sel_green').siblings().removeClass('con_sel_green');
		$('.native').eq(_index).show().siblings().hide();
	})
	$('.native li').hover(function(){
		$(this).find('.con_shadow').stop(true).animate({height:'100%'},400);
		$(this).find('a').stop(true).animate({paddingTop:'60px'},400)
	},function(){
		$(this).find('.con_shadow').stop(true).animate({height:'40px'},400);
		$(this).find('a').stop(true).animate({paddingTop:'0px'},400)
	})

/*banner的js*/
$(function(){
	var _index=0
	var $slide=$('.subnav .me_men a');
	$slide.hover(function(){
		$slide.find('i').css('background-position','-113px -167px')
		$('.subnav .me_men .slide_subnav ').show()
	},function(){
		$slide.find('i').css('background-position','-113px -161px')
		$('.subnav .me_men .slide_subnav ').hide()
	})
	$('.search .pro_pos').mouseover(function(){
		$('.pro_pos i.v_pro').css('background-position','-47px -296px')
		$('.pro_pos .sel_pro').show();
	})
	$('.search .pro_pos').mouseout(function(){
		$('.pro_pos i.v_pro').css('background-position','-47px -290px')
		$('.pro_pos .sel_pro').hide()
	})
	
	
	
	
	
	$('.search .city_pos').mouseover(function(){
		$('.city_pos i.v_pro').css('background-position','-47px -296px')
	})
	$('.search .city_pos').mouseout(function(){
		$('.city_pos i.v_pro').css('background-position','-47px -290px')
	})
	$(".sel_pro a").click(function(){
		var $val=$(this).html();
		$('.pro_pos .pro_sea').val($val)
		$(this).parent().hide()
	})
	$('.nav ul li').hover(function(){
		$(this).addClass('active');
		$(this).find('span').addClass('on');
		$(this).find('i').addClass('pos');
		$(this).find('div.sel').show();
	
	},function(){
		$(this).removeClass('active')
		$(this).find('span').removeClass('on');
		$(this).find('i').removeClass('pos');
		$(this).find('div.sel').hide();
	})
	$('.nav ul li.opacity').hover(function(){
		$('.bg_nav_sel').show();
	},function(){
		$('.bg_nav_sel').hide();
	})
	
	
	
	
	var timer=null;
	$("#bannerbox .smallimg li").click(function(){
		_index=$(this).index();
		$(this).addClass("libg").siblings().removeClass("libg");
		$("#bannerbox .imglist li").eq(_index).fadeIn(400).siblings().fadeOut(400);	
	})
	timer=setInterval(auto,3000);
	
	function auto(){
		_index++;
		if(_index>5)_index=0;
		$("#bannerbox .smallimg li").eq(_index).addClass("libg").siblings().removeClass("libg");
		$("#bannerbox .imglist li").eq(_index).fadeIn(400).siblings().fadeOut(400);
	}
	
	$("#bannerbox").hover(function(){
		clearInterval(timer);
	},function(){
	timer=setInterval(auto,3000);
	})
	auto();
	
	
	
	$('.sel_banner .list_sel li').hover(function(){
		$(this).addClass('bgfff');
		$('.sel_banner .list_sel ').find('.bg_sel_ban').show();
		$(this).find('.sel_con').show()
	},function(){
		$(this).removeClass('bgfff');
		$('.sel_banner .list_sel ').find('.bg_sel_ban').hide();
		$(this).find('.sel_con').hide()
	})
})


