$(function(){
//banner
$(".box_img").hide().first().show();
	$(".route_ban_box ul li").click(function(){
		var n=$(this).index();
		$(".box_img").hide().eq(n).show();
		});

//产品类型

$('.ui-select .li-seled').click(function(){
	$(this).siblings().css('backgroundColor','#ccc');
	$(this).css('backgroundColor','#0e6eb8');
	$(this).siblings().find('a').css({'border-color':'#fff','color':'#333'});
	$(this).find('a').css({'border-color':'#0e6eb8','color':'#0e6eb8'});
	$(this).siblings().find('i').hide();
	$(this).find('i').show();
});
//日历的勾选框
function rili(a){
	$(a).click(function(){
	$(this).siblings().find('b').css("display","none");
	$(this).find("b").css("display","block");
	$(this).siblings().find('i').hide();
	$(this).find("i").show();
	});
}
rili(".date_list ul .have");
rili(".date_list_r ul .have");
//日历选项卡
$(".date_con_f").hide().first().show();
$(".date_ul .date_ul_li").click(function(){
	var dat=$(this).index();
	$(this).siblings().removeClass("date_l");
	$(this).addClass("date_l");
	$(".date_con_f").hide().eq(dat).show();
	});





//评论图放大
$(".c_dis_pic .c_d").hover(function(){
	$(this).siblings().find("span").hide();
	$(this).find("span").show();
	
},function(){
	
	$(this).find("span").hide();
});
//评论图放大
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
		//天数按钮
		$(".fate_detail li").click(function(){
			var _anindex=$(this).index();
			var _antop=$(".black6").eq(_anindex).offset().top;
			$(this).siblings().removeClass("first_c");
			$(this).addClass("first_c");
			$("body,html").stop().animate({scrollTop:_antop},500);
		});
	$(window).scroll(function(){
	
		if(mark==1){
		var _p=$(window).scrollTop();
		var _hei=$(".subnav_bg").height()+$(".head").height()+$(".nav_bg").height()+$(".black2").height();
		//门票的距离
		var _hei1=$(".subnav_bg").height()+$(".head").height()+$(".nav_bg").height()+$(".black2").height()+$(".cart").height()+$(".cart_box").height();
		//天数的距离
		var _andate=$(".subnav_bg").height()+$(".head").height()+$(".nav_bg").height()+$(".black2").height()+$(".black3").height()+$(".tab_detail").height()+$(".black5").height();
		var _andate2=$(".subnav_bg").height()+$(".head").height()+$(".nav_bg").height()+$(".black2").height()+$(".black3").height()+$(".tab_detail").height()+$(".black5").height()+$(".travelctrip").height();
		//产品信息的距离
		var xiang=$(".subnav_bg").height()+$(".head").height()+$(".nav_bg").height()+$(".blac7").height();
		if(_p>_hei){
			$(".tab_div").addClass("fix");
			}else{
				$(".tab_div").removeClass("fix");
				}
			if(_p>_hei1){
				$(".tab_div1").addClass("fix");
			}else{
				$(".tab_div1").removeClass("fix");
			}
		if(_p>xiang){
			$(".format1").addClass("fix1");
			}else{
				$(".format1").removeClass("fix1");
				}
		if(_p>_andate){
			$(".fate_detail").addClass("fix2");
		}else{
				$(".fate_detail").removeClass("fix2");
				}
		if(_p>_andate2){
			$(".fate_detail").removeClass("fix2");
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
        var black6=$(".travelctrip .black6");
		black6.each(function(){
			var _anindex=$(this).index();
			var angao=black6.eq(_anindex).offset().top+($(this).height())/2;

			if(_scrTop<angao){
				$(".fate_detail li").removeClass("first_c");
				$(".fate_detail li").eq(_anindex).addClass("first_c");
				return false;
				}
		});
		
		
		
	}
			
	});
	



//楼层导航end
//评论
$(".btn-comment").click(function(){
	$(this).siblings(".pl_a").show();
});
//评论end
//当地人选项卡
$(".char_con_f").hide().first().show();//  所有的消失  第一张显示，


	$(".char_div ul li.char_li").mouseover(function(){
		var _in=$(this).index();//获得按钮位置
		$(this).siblings().find("span").removeClass("block");
		$(this).find("span").addClass("block");
		$(".char_con_f").hide().eq(_in).show();//找到所有的图片，都隐藏，让指定的显示。
		});
//当地人选项卡end
//热门结伴
$(".hot_top").hide().first().show();
$(".hot_li ul li.hot_li1").mouseover(function(){
		var hot=$(this).index();//获得按钮位置
		$(this).siblings().removeClass("currentt");
		$(this).addClass("currentt");
		$(".hot_top").hide().eq(hot).show();//找到所有的图片，都隐藏，让指定的显示。
		});
	
	
//热门结伴end


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
//星星打分end

//门票导航
$(".cart_ul li").click(function(){
	var hot=$(this).index();//获得按钮位置
	$(this).siblings().removeClass("c");
	$(this).addClass("c");
	$(".select_m").hide().eq(hot).show();//找到所有的图片，都隐藏，让指定的显示。

});
//点击购物车
$(".trolley").click(function(){
	$(".tian").fadeIn(200);
	$(".tian").animate({marginTop:"-20px"});
	$(".tian").fadeOut(200);
	$(".tian").animate({marginTop:"20px"});

});





$(".li-seled,.purchase").click(function(){
	$(".date-cal").show();
});
$(".date_s_i").click(function(){
	$(this).parents(".date-cal").hide();
});



$(".add_rr_a").hover(function(){
	//alert(1);
	$(".add_rr_a_p").show();
},function(){
	$(".add_rr_a_p").hide();
});






	
});