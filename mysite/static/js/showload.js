$(function(){
	//louti
	var mark = 1;
	$("#nav-right .floot li").not(".last").click(function () {
		mark = 2;
		var _i = $(this).index();
		var _top = $("#content .louti").eq(_i).offset().top; //获取指定楼层与浏览器上方的距离
		$("body,html").stop().animate({scrollTop: _top}, 500), function () {
			mark = 1;
		};
	});
	//楼层出现
	$(window).scroll(function () {
		if (mark == 1) {
			var _scrTop = $(this).scrollTop();

			//document.title=_scrTop;
			if (_scrTop >= 500) {
				$("#nav-right").fadeIn();
			} else {
				$("#nav-right").fadeOut();
			}

			var obj = $("#content .louti");
			//alert(obj.length);   each 循环每一个楼层 然后找打最先满足的哪一个楼层
			obj.each(function () {
				var _i = $(this).index();	 //导航对应的index值
				// alert(_index);
				var _Height = obj.eq(_i).offset().top + ($(this).height()) / 2;
				//自己本身距离浏览器上方的高度+自身高度一半的时候就下移导航字体
				//alert(_Height);
				if (_scrTop < _Height) {		//循环过程中  _scrTop<_Height 的第一优先选择 其余return false
					$("#nav-right .floot li").find("i").removeClass("lan")
					$("#nav-right .floot li").find("h3").removeClass("ziti")
					$("#nav-right .floot li").eq(_i).find("i").addClass("lan")
					$("#nav-right .floot li").eq(_i).find("h3").addClass("ziti");
					return false;
				}
			});
		}
	})
	//回到顶部
	$("#nav-right .floot li.last").click(function () {
		$("body,html").stop().animate({scrollTop: 0}, 500), function () {
			mark = 1;
		};
	})
	//banner 搜索框 函数

	$(".scr").hide().first().show();//  所有的消失  第一张显示，
	
	
		$(".clearfix1 li").click(function(){
			var n=$(this).index();//获得按钮位置
			$(".scr").hide().eq(n).show();//找到所有的图片，都隐藏，让指定的显示。
			$(".clearfix1 li i").removeClass("list");
			$(this).children("i").addClass("list");
			//该选项添加当前项，兄弟移除当前项。
			})
	//banner 搜索框end 函数
	//酒店城市
	//目的地
		$(".hotel_search_left input").click(function(e){
			e.stopPropagation();
			$(".bor_city2").show();
		})
		$(".hotel_search_text").click(function(){
			$(".bor_city2").hide()
		})
		$(document).click(function(){
			$(".bor_city2").hide()
		})

	
		$(".bor_city2").find("a").click(function(){
			$(".hotel_search_left input").val($(this).text());
			});
	//飞机行程类型
	$(".air_menu").mouseenter(function(){
		$(this).children(".air_route1").stop(true,true).slideDown(500);//show(),fadeIn()
		}).mouseleave(function(){
			$(this).children(".air_route1").stop(true,true).slideUp(500);//hide(),fadeOut()
			})
			
	
	$(".air_route1 a").mouseenter(function(){
		$(this).addClass("air_currue");
		}).mouseleave(function(){
			$(this).removeClass("air_currue");
			})
	//阴影 浮动

	
	//机票类型
	$(".air_route1 a").click(function(){
		$(".air_route input").val($(this).html());
		$(".air_route1").hide();
		})
	//阴影 浮动 end
	//私人游
	$(".Private_menu").mouseenter(function(){
		$(".Private_route1").show();
		}).mouseleave(function(){
			$(".Private_route1").hide();
			})
	
	$(".Private_route1 a").mouseenter(function(){
		$(this).addClass("Private_currue");
		}).mouseleave(function(){
			$(this).removeClass("Private_currue");
			})
	//end
	//选项卡


		$(".Private_li").click(function(){
			var n=$(this).index();

			$(this).siblings().find("i").removeClass("dynamic");
			$(this).siblings().find("span").removeClass("dynamic2");
			$(this).children("i").addClass("dynamic");
			$(this).children("span").addClass("dynamic2");
			$(this).parents(".huan").find(".private_f").hide().eq(n).show();
			//该选项添加当前项，兄弟移除当前项。
			});


	//选项卡end
	//点击城市
	$(".start").click(function(e){
			e.stopPropagation();
			$(".bor_city5").show();
			$(".bor_city6").hide()
		})
		$(document).click(function(){
			$(".bor_city5").hide()
		})
		$(".end").click(function(e){
			e.stopPropagation();
			$(".bor_city5").hide()
			$(".bor_city6").show()
		})
		$(document).click(function(){
			$(".bor_city6").hide()
		})
	$(".stime").click(function(e){
			e.stopPropagation();
			$(".go_way").hide()
			$(".bor_city5").hide()
			$(".bor_city6").hide()
		})
		$(".way").click(function(e){
			e.stopPropagation();
			$(".bor_city5").hide()
			$(".bor_city6").hide()
		})
		$(".city .city_g a").click(function(){
			
			$(".start").val($(this).text());
		})
		$(".city .city_gg a").click(function(){
			
			$(".end").val($(this).text())
		})
		//下拉出行类型
		$(".way").click(function(e){ 
			e.stopPropagation();
			$(".go_way").show();
		})
		$(document).click(function(){
			$(".go_way").hide();
		})
		$(".go_way ul li a").click(function(){
			$(".way").val($(this).text())
			$(".go_way").hide()
		})
	
	//私人游end
	//当地人
$(".mypanying1").hide().first().show();//  所有的消失  第一张显示，


		$(".maypanying_list li").click(function(){
			var n=$(this).index();//获得按钮位置
			$(".mypanying1").hide().eq(n).show();//找到所有的图片，都隐藏，让指定的显示。
			$(".maypanying_list li i").removeClass("mycuure2");
			$(".maypanying_list li").removeClass("mycuure");
			$(this).children("i").addClass("mycuure2");
			$(this).addClass("mycuure");
			//该选项添加当前项，兄弟移除当前项。
			})


	//动态滚动
	function gun(){
		$(".notes_publish_scr1").animate({marginTop:-84},2000,function(){//（回调函数）向上移动40px后，执行一个函数
		$(".notes_publish_scr1").css({marginTop:0});//将顶部距离设为零，也就是第一个信息在返回原来的位置
		$(".notes_publish_scr1 .notes_publishpic:last").after($(".notes_publish_scr1 .notes_publishpic:first"));//将第一个放到最后一个的    后面（添加属性）
		});
		}
	var t=setInterval(gun,5100);//每条新闻显示停顿的时间
	$(".notes_publish_scr").mouseenter(function(){
		clearInterval(t);
		}).mouseleave(function(){
			t=setInterval(gun,5100);
			})
	//城市
	//目的地
		$(".pany_searchr input.pany_searchr1").click(function(e){
			e.stopPropagation();
			$(".bor_city1").show();
		})
		$(".pany_searchr3 input").click(function(e){
			$(".bor_city1").hide();
			})
		$(document).click(function(){
			$(".bor_city1").hide()
		})

		$(".city .city_c a").click(function(){
			
			$(".pany_searchr input.pany_searchr1").val($(this).text());
		})
	//56商城



	//邮轮end
	//私人有的日历
	laydate({
				elem: '#J-xl'
			});
	laydate({
				elem: '#J-xl1'
			});
	laydate({
				elem: '#J-xl2'
			});
	laydate({
				elem: '#J-xl3'
			});
	laydate({
				elem: '#J-xl4'
			});
	//私人有的日历end
	$(".dropdown").mouseenter(function(){
	$(".dropdown").find("i").css("background-position","-113px -161px")
	$(".top_down").show();
	}).mouseleave(function(){
		$(".dropdown").find("i").css("background-position","-113px -167px")
		$(".top_down").hide();
	})
	


	 
})
