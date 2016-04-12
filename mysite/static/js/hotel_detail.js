// JavaScript Document
//圆形进度条
var showMe = function () {
		circleProgress({
        	id: 'circle-progress-zero',
            progress: 95 // default: 100
            });
        };
    showMe();
	
//  地图tab 选项卡部分
	$(".native").hide().first().show();
		$(".tab-select li").click(function(){
			index=$(this).index();	
			$(".native").hide().eq(index).show();
		})

	$(".tab-select li").click(function(){
		$(this).addClass("current")
		$(this).siblings().removeClass("current")
		$(this).find("i.bj_l").addClass("xian");
		$(this).siblings().find("i.bj_l").removeClass("xian")
		$(this).find("i.li_1").css("background-position","-9px -119px")
		$(this).siblings().find("i.li_1").css("background-position","-9px -80px")
		$(this).find("i.li_2").css("background-position","-35px -119px")
		$(this).siblings().find("i.li_2").css("background-position","-35px -80px")
		$(this).find("i.li_3").css("background-position","-66px -119px")
		$(this).siblings().find("i.li_3").css("background-position","-66px -80px")
		$(this).find("i.li_4").css("background-position","-97px -119px")
		$(this).siblings().find("i.li_4").css("background-position","-97px -80px")
		$(this).find("i.li_5").css("background-position","-120px -119px")
		$(this).siblings().find("i.li_5").css("background-position","-120px -80px")
		$(this).find("i.li_6").css("background-position","-145px -119px")
		$(this).siblings().find("i.li_6").css("background-position","-145px -80px")	
	})
	$(".tab-select li").hover(function(){
		$(this).find("i.bj_l").addClass("xian")	
		$(this).siblings().find("i.bj_l").removeClass("xian")
	},function(){
		$(this).find("i.bj_l").removeClass("xian")
	})
	
//table表格的下拉
//下拉
	$(".chuang_dianji").click(function(){
		$(this).siblings().slideToggle();
		//$(this).find(".i_sna").css("background-position","-241px -19px")
		if($(this).find(".i_sna").hasClass("i_sna_1")){
			$(this).find(".i_sna").removeClass("i_sna_1")	
		}else{
			$(this).find(".i_sna").addClass("i_sna_1")	
		}
	})

$('.i_la').click(function(){
	$(this).parents('.tdxa').toggleClass('tdxa_100');
	$(this).toggleClass('i_la_1');
});
	

var scrollFlag=false;

//点击滚动小导航
var mark=1;
$(".new_tab li").click(function(){
	mark=2; // 把标记改了
	var _i=$(this).index();
	var _top=$(".nav1").eq(_i).offset().top; //获取指定楼层与浏览器上方的距离
	$(this).addClass("curren").siblings().removeClass("curren");
	$("body,html").stop().animate({scrollTop:_top},500,function(){mark=1;scrollFlag=true;})
})



//导航定位于滚动
$(window).scroll(function(){
	if(mark==1){
		var _scrTop=$(this).scrollTop();
		//document.title=_scrTop;
		var _p=$(window).scrollTop();
		var _hig=$(".top").height()+$("#logo").height()+$(".navb").height()+$(".hotel_1").height()+$(".map").height()+$(".date1").height()+$(".chuang ").height();
		//alert($(".top").height());
		if(_p>_hig){
			//alert(1);
			$(".new_tab").addClass("active");
		}else{
			$(".new_tab").removeClass("active");
		}
		
		var obj=$(".nav1");
		//alert(obj.length);   //each 循环每一个楼层 然后找打最先满足的哪一个楼层
		obj.each(function(index,el) {
          var _i=$(this).index();	 //导航对应的index值
		  _i = index;
		  //console.log(_i);
		  // alert(_index);
		  var _Height=$(this).offset().top +($(this).height())/2;
		 // console.log('_Height:' + _Height + '  ,_scrTop:' +_scrTop );
		  //自己本身距离浏览器上方的高度+自身高度就下移导航字体
		  //alert(_Height);
		  if(_scrTop<_Height){		//循环过程中  _scrTop<_Height 的第一优先选择 其余return false
			  $(".new_tab li").removeClass("curren")
			  $(".new_tab li").eq(_i).addClass("curren");
			  return false;
		  }
        });
		}
	 })


//弹出框的js
// 注册按钮点击显示
$('.loginn').click(function(){
	$('.shade').show()
	$('.register').show()
})
//关闭按钮点击隐藏
$('.login .close').click(function(){
	$('.register').hide()
	$('.shade').hide()
})
//记住密码点击
$('#rem_btn').click(function(){
	$(this).find('p').toggleClass('actwo')
})
//弹出框的微信点击登录扫描二维码
$('.wx_login').click(function(){
	$(this).addClass('active_a')
	$('.loginon').removeClass('active_a')
	$('.kua_a').hide();
	$('.kua_b').show();
})
$('.loginon').click(function(){
	$(this).addClass('active_a')
	$('.wx_login').removeClass('active_a')
	$('.kua_a').show();
	$('.kua_b').hide();
})



//提问弹出框
	$(".ask_span1,.ask_a1,.ask_p").click(function(){
		$(".shade").show()	
		$('.register').show()
	})
	$(".cen_span1 i").click(function(){
		$('.register').hide()
		$(".shade").hide()	
	})
	
//评论
$(".btn-comment").click(function(){
	$(this).siblings(".pl_a").show();
});



//日历
laydate({
	elem: '#J-xl'
});
laydate({
	elem: '#J-xl-a'
});

$(".rating-star span.star").width(function(){

	var n=$(this).attr("value");

	var b=(18*n)+3*(n-1);
	return b;
});

	