// JavaScript Document
//点击出现描边选中
$(".dld dt").click(function(){
	$(this).hasClass("bor1") ? $(this).removeClass("bor1") : $(this).addClass("bor1")
	$(this).children(".i_imga").hasClass("show") ? $(this).children(".i_imga").removeClass("show") : $(this).children(".i_imga").addClass("show")
})


$(".tab_table tr td").click(function(){
	$(this).hasClass("borblue") ? $(this).removeClass("borblue") : $(this).addClass("borblue")
	$(this).children(".dui").hasClass("show") ? $(this).children(".dui").removeClass("show") : $(this).children(".dui").addClass("show")
})
$(".cost_li").click(function(){
	$(this).children(".la").hasClass("youxuan") ? $(this).children(".la").removeClass("youxuan") : $(this).children(".la").addClass("youxuan")
})


//点击的时候图片变换
$(".ul_de li").click(function(){
	//$(".img_1").removeClass("show").eq($(this).index()).addClass("show")
	index=$(this).index();
	$(".img_1").hide().eq(index).show();
})




//当地人选项卡
$(".char_con_f").hide().first().show();//  所有的消失  第一张显示，


	$(".char_div ul li.char_li").mouseover(function(){
		_in=$(this).index();//获得按钮位置
		$(this).siblings().find("span").removeClass("block");
		$(this).find("span").addClass("block");
		$(".char_con_f").hide().eq(_in).show();//找到所有的图片，都隐藏，让指定的显示。
		});
//当地人选项卡end

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
		var _hei=$(".tou").height()+$("#logo").height()+$(".navb").height()+$(".detail_l_t").height()+$(".guide_h1").height();
		//产品信息的距离
		if(_p>_hei){
			$(".tab_div").addClass("fix");
			}else{
				$(".tab_div").removeClass("fix");
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

//档期资费
var n=0;
$(".pp_i2").click(function(){//点击上边按钮，值增加
	if(n<2){//在最后一张图以内能加一
		n=n+1;
	}else{
		n=0;
		}
	$(".tab").animate({marginLeft:-245*(n)},1000);
})
$(".pp_i1").click(function(){//点击下边，逐渐减少。
	if(n>0){
		n=n-1;
	}else{
		n=2;
		}
	$(".tab").animate({marginLeft:-245*(n)},1000);
})



//右边点击上下移动
var n=0;
$(".guide_i1").click(function(){//点击上边按钮，值增加
	if(n<3){//在最后一张图以内能加一
		n=n+1;
	}else{
		n=0;
		}
	$(".guide_ul").animate({marginTop:-285*(n)},1000);
})
$(".guide_i2").click(function(){//点击下边，逐渐减少。
	if(n>0){
		n=n-1;
	}else{
		n=3;
		}
	$(".guide_ul").animate({marginTop:-285*(n)},1000);
})



laydate({
	elem: '#J-xl'
});
