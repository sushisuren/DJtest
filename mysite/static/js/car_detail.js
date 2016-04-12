// JavaScript Document
//点击出现描边选中
$(".td_pp").click(function(){
	$(this).hasClass("orange") ? $(this).removeClass("orange") : $(this).addClass("orange")
	$(this).children(".p_i1").hasClass("p_i2") ? $(this).children(".p_i1").removeClass("p_i2") : $(this).children(".p_i1").addClass("p_i2")
	$(this).siblings().removeClass("orange")
	$(this).siblings().children().removeClass("p_i2");
})
//查看套餐
$(".button_a").click(function(){
	$(".aoca").slideToggle();	
})
//楼层导航

	//点击滑动
	var mark=1;    //设置标记
	$(".tab_div ul li.tab_con_li").click(function(){
		mark=2; // 把标记改了
		var _dex=$(this).index();
		var _top=$(".black4").eq(_dex).offset().top;
		$(this).siblings().removeClass("tab_bg");
		$(this).addClass("tab_bg");
		$("body,html").stop().animate({scrollTop:_top},500,function(){
			mark=1;
		});
		});	
	$(window).scroll(function(){
		if(mark==1){
		var _p=$(window).scrollTop();
		var _hei=$(".tou").height()+$("#logo").height()+$(".navb").height()+$(".detail_l_t").height()+$(".tab_con_t").height()+$(".navb").height();
		//产品信息的距离
		if(_p>_hei){
			$(".tab_div").addClass("fix");
			}else{
				$(".tab_div").removeClass("fix");
			}
		if(_p>_hei){
			$(".r_b").addClass("fix1");
			}else{
				$(".r_b").removeClass("fix1");
			}
	var obj=$(".bla .black4");
	var _scrTop=$(this).scrollTop();
		obj.each(function() {
            var _dex=$(this).index();
            
			var gao=obj.eq(_dex).offset().top+($(this).height())/2;
			
			//document.title=_scrTop+'--'+gao;
			if(_scrTop<gao){
				$(".tab_div ul li.tab_con_li").removeClass("tab_bg");
				$(".tab_div ul li.tab_con_li").eq(_dex).addClass("tab_bg");
				return false;
				}
        });
	}
			
	});
	
//楼层导航end
