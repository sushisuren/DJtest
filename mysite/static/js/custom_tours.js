// JavaScript Document
$(function(){
var _index=0;	
$(".all_m li").mousemove(function(){
    $(this).css("border-bottom-color","#aea181")
	}).mouseout(function(){
		$(this).css("border-bottom-color","#fff")
		})
		//全部 酒店 餐饮 等的选项卡
$(".all_w").hide().first().show();//  所有的消失  第一张显示，


	$("#all .all_m ul li").click(function(){
		_i=$(this).index();//获得按钮位置
		$("#all .all_m ul li div").removeClass("sllll");
		$(this).children("div").addClass("sllll");
		$(".all_w").hide().eq(_i).show();//找到所有的图片，都隐藏，让指定的显示。
		})
	//选项卡底部按钮

		
//对比页的函数    起价说明
$(".base_txtdiv").hover(function(){
	$(this).children(".fl_pri").show()
	},function(){
		$(this).children(".fl_pri").hide()
		})
		
		
		
//对比页的函数 显/隐按钮
$("#com_conent i.open").click(function(){
	$(this).siblings(".base_hide").slideUp(500);
	$(this).siblings(".close").show();
	$(this).hide();
	})


$("#com_conent i.close").click(function(){
	$(this).siblings(".base_hide").slideDown(500);
	$(this).siblings(".open").show();
	$(this).hide();
	})
//对比产品固定在顶部
$(window).scroll(function(){
	var _top=$(window).scrollTop();
	var _hight=$(".top").height()+$("#logo").height()+$(".navb").height()+$("#com_title").height();
	if(_top>_hight){
		$("#com_pro").addClass("fixed");
		}else{
			$("#com_pro").removeClass("fixed");
			}
	})
//私人游的产品页——景点页
$("#scenic_news .new_i i").click(function(){
	$(this).toggleClass("j_t");
	$(this).parent(".new_i").siblings(".new_p").toggleClass("baifen");
	})
//产品页-景点页的    导航
$("#con_nav ul li").click(function(){
	var _i=$(this).index();
	var _top=$("#pro .nav1").eq(_i).offset().top; //获取指定楼层与浏览器上方的距离
		$(this).siblings().removeClass("color");
		$(this).addClass("color");
		$("body,html").stop().animate({scrollTop:_top},500)
		})
//导航定位
	
	 $(window).scroll(function(){
		var _scrTop=$(this).scrollTop();
		//document.title=_scrTop;
		var _p=$(window).scrollTop();
		var _hig=$(".subnav_bg").height()+$(".head").height()+$(".nav_bg").height()+$("#top_pic").height();
		if(_p>_hig){
		$("#con_nav").addClass("f");
		}else{
			$("#con_nav").removeClass("f");
			}
		
		
		
		
		var obj=$("#pro .nav1");
		//alert(obj.length);   each 循环每一个楼层 然后找打最先满足的哪一个楼层
		obj.each(function() {
           var _i=$(this).index();	 //导航对应的index值
		  // alert(_index);
		  var _Height=obj.eq(_i).offset().top+($(this).height())/2;
		  //自己本身距离浏览器上方的高度+自身高度一半的时候就下移导航字体
		  //alert(_Height);
		  if(_scrTop<_Height){		//循环过程中  _scrTop<_Height 的第一优先选择 其余return false 
			  $("#con_nav li").removeClass("color");
			  $("#con_nav li").eq(_i).addClass("color");
			  return false;
		  }
        });
	});
	//城市选择
	$(".all_pluse").click(function(){
		
		$(this).siblings(".select_city").toggleClass("city_baifen");
		});
	//城市选择end
	//鼠标经过  图片放大
	$(".c_dis_pic .c_d").hover(function(){
		$(this).find("span").show();
		},function(){
			$(this).find("span").hide();
			});
	
//对比页  底部对比栏的删除按钮
	$('.com_l').find("i").hide();
$(".com_l").hover(function(){
	$(this).find("i").show();
	},function(){
		$(this).find("i").hide();
		})
//对比/已加入
$(".rou_pic a.dui").click(function(){
	$(this).siblings(".pluse").show();
	$(this).hide();
	$("#comparison").fadeIn();
	})
$(".rou_pic a.pluse").click(function(){
	$(this).siblings(".dui").show();
	$(this).hide();
	})
//隐藏对比栏
var $com=$(".com_r_t");
var $float=$(".com_float");
$com.click(function(){
	$("#comparison").fadeOut();
	})

$float.click(function(){
	$("#comparison").fadeToggle();
	})

//私人游的产品页——景点页 顶部大图——鼠标经过字体消失
var $top_pic=$("#top_pic");
	$top_pic.mouseover(function(){
		$(".pic_flo").stop().fadeOut(1000);
		}).mouseout(function(){
			$(".pic_flo").fadeIn(1000);
			});

//评论
$(".btn-comment").click(function(){
	$(this).siblings(".pl_a").show();
});
//评论end
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


	//线路条数
	$(".rou_der").click(function(){
		$(this).siblings(".rou_rou").find(".rou_rou1").show()

	});
	$(".rou_rou_i").click(function(){
		$(this).parents(".rou_rou1").hide();

	});

//rili
	$('.date_picker').datepicker({
		format: 'yyyy-mm-dd',
		language: 'zh-CN'
	});

//下拉城市
	$(".fromcity").click(function(e){
		e.stopPropagation();
		$(this).parents(".inpcomm").siblings().find(".buxian").hide();
		$(this).siblings(".buxian").show();
	});
	$(".buxian").find("a").click(function(){
		$(this).parents(".buxian").siblings(".fromcity").val($(this).text());
		$(this).parents(".buxian").hide();
	});
	$(document).click(function(e){
		e.stopPropagation();
		$(".buxian").hide();
	});

//出发城市按钮
$('.input_box').click(function(){
	$(this).siblings().find('.sele_i').css('background-position','0 0');
	$(this).find('.sele_i').css('background-position','0 -25px');
});




})