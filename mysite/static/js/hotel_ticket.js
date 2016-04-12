$(function(){
	$(".select").each(function(){
		var s=$(this);
		var z=parseInt(s.css("z-index"));
		var dt=$(this).children("dt");
		var dd=$(this).children("dd");
		var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
		var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
		dt.click(function(){dd.is(":hidden")?_show():_hide();});
		dd.find("a").click(function(){dt.html($(this).html());_hide();});     //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
		$("body").click(function(i){ !$(i.target).parents(".select").first().is(s) ? _hide():"";});
	})


	$('.this_explain').hover(function(){
		$('.explain_sp').show();
	},function(){
		$('.explain_sp').hide();
	})
	$('.more_house').click(function(){
		$('.table_list_box').toggleClass('tab_list_box100');
	})

	$('.bh_bg').click(function(){
		$(this).parents('.table_list_box').find('li.box_li a').removeClass('bh_bg2');
		$(this).parents('.table_list_box').find('li.box_li i.gx_tab').hide();
		$(this).parents('.table_list_box').find('li.box_li a').html('选择');
		$(this).addClass('bh_bg2');
		$(this).next('i.gx_tab').show();
		$(this).html('已选');
	})

	$('.select_btn_td').click(function(){
		$(this).toggleClass('showbtn')
		
		$(this).next('i.abs_bot').show();
	})








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
			var _hei=$('.hotel').height()+$('.offset').height();
			
			//天数的距离
			var _andate=$('.hotel').height()+$('.offset').height()+$(".black3").height()+$(".tab_detail").height()+$(".black5").height();
			var _andate2=$('.hotel').height()+$('.offset').height()+$(".black3").height()+$(".tab_detail").height()+$(".black5").height()+$(".travelctrip").height();
			//产品信息的距离
			var xiang=$(".tou").height()+$(".blac7").height();
			if(_p>_hei){
				$(".tab_div").addClass("fix");
				}else{
					$(".tab_div").removeClass("fix");
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
		$(this).siblings(".pl_a").slideToggle();
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




})
