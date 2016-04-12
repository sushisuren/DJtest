$(function(){
	//二级搜索框


	$(".float_lists1").hide().first().show();//  所有的消失  第一张显示，
		$(".float_list li").click(function(){
			var n =$(this).index();//获得按钮位置
			$(".float_lists1").hide().eq(n).show();//找到所有的图片，都隐藏，让指定的显示。
			$(".float_list li").removeClass("erjili");
			$(".float_list li span").removeClass("erjispan");
			$(this).addClass("erjili")//该选项添加当前项，兄弟移除当前项。
			$(this).children("span").addClass("erjispan")
			})

	//二级导航  好好司机
	$('.good_lable label').click(function(){
		var inde=$(this).index();
		$('.good_gu').hide().eq(inde).show();
	});
	//二级导航日历
	//单个日历
	function ri_li_banner(obj){
		$(obj).datepicker({
			showOtherMonths: true,
			selectOtherMonths: false,
			minDate: 0,
		});
	}
	ri_li_banner(".driver");
	ri_li_banner(".driver_j");
	ri_li_banner(".driver_h");
	ri_li_banner(".driver_c");
	ri_li_banner(".driver_d");
	ri_li_banner(".driver_a");
	//开始
	function start(obj1,obj2){
		$(obj1).datepicker({
			defaultDate: "+1w",
			showOtherMonths: true,
			selectOtherMonths: false,
			minDate: 0,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$(obj2).datepicker( "option", "minDate", selectedDate );
			}
		});
	}
	start("#start","#end");
	start("#car_star","#car_end");
	//结束
	function end(obj1,obj2){
		$(obj1).datepicker({
			defaultDate: "+1w",
			showOtherMonths: true,
			selectOtherMonths: false,
			minDate: 0,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$(obj2).datepicker( "option", "maxDate", selectedDate );
			}
		});
	}
	end("#end","#start");
	end("#car_end","#car_star");
	//新人

	$(".square_contentscr1").hide().first().show();//  所有的消失  第一张显示，
	
	
		$(".square_titlemid li").click(function(){
			var n=$(this).index();
			$(".square_contentscr1").eq(n).show().siblings().hide();
			$(".square_titlemid li i").removeClass("square_dynamic");
			$(".square_titlemid li span").removeClass("square_dynamic2");
			$(this).children("i").addClass("square_dynamic");
			$(this).children("span").addClass("square_dynamic2");
			})
	//推荐导游
	function gunn(){
		$(".Guide_contentrightscr").animate({marginTop:-123},2000,function(){
		$(".Guide_contentrightscr").css({marginTop:0});
		$(".Guide_contentrightscr1:last").after($(".Guide_contentrightscr1:first"));
		});
		}
	var p=setInterval(gunn,5100);
	$(".Guide_contentrightscr").mouseenter(function(){
		clearInterval(p);
		}).mouseleave(function(){
			t=setInterval(gunn,5100);
			})
	//推荐司机
	function gun(){
		$(".driver_contentrightscr").animate({marginTop:-123},2000,function(){
		$(".driver_contentrightscr").css({marginTop:0});
		$(".driver_contentrightscr1:last").after($(".driver_contentrightscr1:first"));
		});
		}
	var t=setInterval(gun,4500);
	$(".driver_contentrightscr").mouseenter(function(){
		clearInterval(t);
		}).mouseleave(function(){
			t=setInterval(gun,4500);
			});
	//路线推荐
	//黑框弹出
	$(".course_content").children().mouseenter(function(){
		$(this).children(".course_shadow").stop(true,true).animate({top:0})
		}).mouseleave(function(){
		$(this).children(".course_shadow").stop(true,true).animate({top:"234px"})
		})
	//商城
	
	//右侧
	function dong(){
		$(".integrity_contentrightscr").animate({marginTop:-65},2000,function(){
		$(".integrity_contentrightscr").css({marginTop:0});
		$(".integrity_rightscr1:last").after($(".integrity_rightscr1:first"));
		});
		}
	var m=setInterval(dong,5000);
	$(".integrity_contentrightscr").mouseenter(function(){
		clearInterval(m);
		}).mouseleave(function(){
			m=setInterval(dong,5000);
			})

//下拉城市
    $(".fromcity").click(function(e){
        e.stopPropagation();
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










})