// JavaScript Document
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
		var _hei=$(".subnav_bg").height()+$(".head").height()+$(".nav_bg").height()+$(".column").height();
		//右边悬挂的信息
		var right=$(".subnav_bg").height()+$(".head").height()+$(".nav_bg").height()+$(".column").height()+$(".tab_div ").height();
		//产品信息的距离
		if(_p>_hei){
			$(".tab_div").addClass("fix");
			}else{
				$(".tab_div").removeClass("fix");
				}
			if(_p>right){
				$(".bot_right").addClass("fix1");
			}else{
				$(".bot_right").removeClass("fix1");
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
