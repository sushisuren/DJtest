$(function(){
	
//nav  erjimenu
	$(".navn li").mouseenter(function(){
		$(this).find(".teo_content1").show();
		$(this).find("i").addClass("jiantou");
		}).mouseleave(function(){
			$(".teo_content1").hide();
			$(this).find("i").removeClass("jiantou");
			})
		$("#banyou,#dangdi,#shop,#ren").mouseenter(function(){
			$(".teo").show();
			}).mouseleave(function(){
				$(".teo").hide();
		})
		
	
<!--向上的阴影-->
	$(".con_de1 ul li").hover(function(){
		$(this).find(".txt_de1").stop().animate({height:"274px"},400);
		$(this).find(".txt_de1 h3").stop().animate({paddingTop:"20px"},400);
	},function(){
		$(this).find(".txt_de1").stop().animate({height:"45px"},400);
		$(this).find(".txt_de1 h3").stop().animate({paddingTop:"0px"},400);
	})
	
	$(".con_de2 ul li").hover(function(){
		$(this).find(".txt_de2").stop().animate({height:"274px"},400);
		$(this).find(".txt_de2 h3").stop().animate({paddingTop:"20px"},400);
	},function(){
		$(this).find(".txt_de2").stop().animate({height:"45px"},400);
		$(this).find(".txt_de2 h3").stop().animate({paddingTop:"0px"},400);
	})
	
	$(".con_de3 ul li").hover(function(){
		$(this).find(".txt_de3").stop().animate({height:"274px"},400);
		$(this).find(".txt_de3 h3").stop().animate({paddingTop:"20px"},400);
	},function(){
		$(this).find(".txt_de3").stop().animate({height:"45px"},400);
		$(this).find(".txt_de3 h3").stop().animate({paddingTop:"0px"},400);
	})

		$('#escort_dest_mbbc li').click(function(e){
		console.log($(this).index());
		$('.escort_dest_mbl').removeClass('active').eq($(this).index()).addClass('active');
	});
/*按钮点击变换颜色*/
	$("#escort_dest_mbbc li").click(function(){
	n=$(this).index();//获得按钮位置
	$(this).siblings().removeClass("current_q");
	$(this).addClass("current_q");
	});
	
/*本站有售*/	
	$('.sell_t li').click(function(e){
		console.log($(this).index());
		$('.sell_b').removeClass('active').eq($(this).index()).addClass('active');
	});
/*按钮点击变换颜色*/
	$(".sell_t li").click(function(){
	n=$(this).index();//获得按钮位置
	$(this).siblings().removeClass("current_s");
	$(this).addClass("current_s");
	});
	
	

	/*点击变换块*/	
	$('#star_2_2 li').click(function(e){
		console.log($(this).index());
		$('.star_3').removeClass('active').eq($(this).index()).addClass('active');
	});
	
});
/*按钮点击变换颜色*/
	$("#star_2_2 li").click(function(){
	n=$(this).index();//获得按钮位置
	$(this).siblings().removeClass("current_p");
	$(this).addClass("current_p");
	});
/*结伴计划*/
	$('.plan_b li').click(function(e){
		console.log($(this).index());
		$('.plan_m_m').removeClass('active').eq($(this).index()).addClass('active');
	});
	
/*按钮点击变换颜色-结伴计划*/
	$(".plan_b li").click(function(){
	n=$(this).index();//获得按钮位置
	$(this).siblings().removeClass("current_o");
	$(this).addClass("current_o");
	});
	
	/*最新发表*/
	$('.plan_b li').click(function(e){
		console.log($(this).index());
		$('.plan_m_m1').removeClass('active').eq($(this).index()).addClass('active');
	});
	
/*按钮点击变换颜色-结伴计划*/
	$(".plan_b li").click(function(){
	n=$(this).index();//获得按钮位置
	$(this).siblings().removeClass("current_o");
	$(this).addClass("current_o");
	
	});


/*结伴出发*/
	$('.plan_b li').click(function(e){
		$('.plan_m_m2').removeClass('active').eq($(this).index()).addClass('active');
	});
	
/*按钮点击变换颜色-结伴计划*/
	$(".plan_b li").click(function(){
	n=$(this).index();//获得按钮位置
	$(this).siblings().removeClass("current_o");
	$(this).addClass("current_o");
	
	});
/*结伴计划*/	
	var n=0;
	$(".plan_tll li").click(function(){
		n=$(this).index();//获得按钮位置
		$(".plan_tll li i").removeClass("current_t");
		$(".plan_tll li").removeClass("current_l");
		$(this).children("i").addClass("current_t");
		$(this).addClass("current_l");
		//该选项添加当前项，兄弟移除当前项。
		$('.plan_m').removeClass('active').eq($(this).index()).addClass('active');
		

	
	
	//我的56人
	$(".dropdown").mouseenter(function(){
	$(".dropdown").find("i").css("background-position","-113px -161px")
	$(".top_down").show();
	}).mouseleave(function(){
		$(".dropdown").find("i").css("background-position","-113px -167px")
		$(".top_down").hide();
	})
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})