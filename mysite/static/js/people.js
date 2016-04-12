$(function(){
	
$(".con_in1 ul li").hover(function(){
	$(this).find(".txt_in1").stop().animate({height:"410px"},400);
	$(this).find(".txt_in1 h3").stop().animate({paddingTop:"20px"},400);
},function(){
	$(this).find(".txt_in1").stop().animate({height:"45px"},400);
	$(this).find(".txt_in1 h3").stop().animate({paddingTop:"0px"},400);
});

$(".con_in2 ul li").hover(function(){
	$(this).find(".txt_in2").stop().animate({height:"195px"},400);
	$(this).find(".txt_in2 h3").stop().animate({paddingTop:"20px"},400);
},function(){
	$(this).find(".txt_in2").stop().animate({height:"45px"},400);
	$(this).find(".txt_in2 h3").stop().animate({paddingTop:"0px"},400);
});

$(".con_in3 ul li").hover(function(){
	$(this).find(".txt_in3").stop().animate({height:"195px"},400);
	$(this).find(".txt_in3 h3").stop().animate({paddingTop:"20px"},400);
},function(){
	$(this).find(".txt_in3").stop().animate({height:"45px"},400);
	$(this).find(".txt_in3 h3").stop().animate({paddingTop:"0px"},400);
});

$(".con_in4 ul li").hover(function(){
	$(this).find(".txt_in4").stop().animate({height:"258px"},400);
	$(this).find(".txt_in4 h3").stop().animate({paddingTop:"20px"},400);
	$(this).find(".txt_in4_1 a").stop().animate({paddingTop:"20px"},400);
	$(this).find(".txt_in4_1 img").stop().animate({paddingTop:"20px"},400);
},function(){
	$(this).find(".txt_in4").stop().animate({height:"45px"},400);
	$(this).find(".txt_in4 h3").stop().animate({paddingTop:"0px"},400);
	$(this).find(".txt_in4_1 a").stop().animate({paddingTop:"0px"},400);
	$(this).find(".txt_in4_1 img").stop().animate({paddingTop:"0px"},400);
});

$(".con_in5 ul li").hover(function(){
	$(this).find(".txt_in5").stop().animate({height:"258px"},400);
	$(this).find(".txt_in5 h3").stop().animate({paddingTop:"20px"},400);
	$(this).find(".txt_in5_1 a").stop().animate({paddingTop:"20px"},400);
	$(this).find(".txt_in5_1 img").stop().animate({paddingTop:"20px"},400);
},function(){
	$(this).find(".txt_in5").stop().animate({height:"45px"},400);
	$(this).find(".txt_in5 h3").stop().animate({paddingTop:"0px"},400);
	$(this).find(".txt_in5_1 a").stop().animate({paddingTop:"0px"},400);
	$(this).find(".txt_in5_1 img").stop().animate({paddingTop:"0px"},400);
});

$(".con_in6 ul li").hover(function(){
	$(this).find(".txt_in6").stop().animate({height:"165px"},400);
	$(this).find(".txt_in6 h3").stop().animate({paddingTop:"20px"},400);
	$(this).find(".txt_in6_1 a").stop().animate({paddingTop:"20px"},400);
	$(this).find(".txt_in6_1 img").stop().animate({paddingTop:"20px"},400);
},function(){
	$(this).find(".txt_in6").stop().animate({height:"45px"},400);
	$(this).find(".txt_in6 h3").stop().animate({paddingTop:"0px"},400);
	$(this).find(".txt_in6_1 a").stop().animate({paddingTop:"0px"},400);
	$(this).find(".txt_in6_1 img").stop().animate({paddingTop:"0px"},400);
});

$(".con_in7 ul li").hover(function(){
	$(this).find(".txt_in7").stop().animate({height:"127px"},400);
	$(this).find(".txt_in7 h3").stop().animate({paddingTop:"20px"},400);
},function(){
	$(this).find(".txt_in7").stop().animate({height:"45px"},400);
	$(this).find(".txt_in7 h3").stop().animate({paddingTop:"0px"},400);
});

$(".con_in_1 ul li").hover(function(){
	$(this).find(".txt_in_1").stop().animate({height:"258px"},400);
	$(this).find(".txt_in_1 h3").stop().animate({paddingTop:"20px"},400);
},function(){
	$(this).find(".txt_in_1").stop().animate({height:"45px"},400);
	$(this).find(".txt_in_1 h3").stop().animate({paddingTop:"0px"},400);
});

$(".con_in_2 ul li").hover(function(){
	$(this).find(".txt_in_2").stop().animate({height:"258px"},400);
	$(this).find(".txt_in_2 h3").stop().animate({paddingTop:"20px"},400);
},function(){
	$(this).find(".txt_in_2").stop().animate({height:"45px"},400);
	$(this).find(".txt_in_2 h3").stop().animate({paddingTop:"0px"},400);
});

$(".con_in_3 ul li").hover(function(){
	$(this).find(".txt_in_3").stop().animate({height:"258px"},400);
	$(this).find(".txt_in_3 h3").stop().animate({paddingTop:"20px"},400);
},function(){
	$(this).find(".txt_in_3").stop().animate({height:"45px"},400);
	$(this).find(".txt_in_3 h3").stop().animate({paddingTop:"0px"},400);
});


$(".con_in_4 ul li").hover(function(){
	$(this).find(".txt_in_4").stop().animate({height:"536px"},400);
	$(this).find(".txt_in_4 h3").stop().animate({paddingTop:"20px"},400);
},function(){
	$(this).find(".txt_in_4").stop().animate({height:"45px"},400);
	$(this).find(".txt_in_4 h3").stop().animate({paddingTop:"0px"},400);
});


$(".con_in_5 ul li").hover(function(){
	$(this).find(".txt_in_5").stop().animate({height:"205px"},400);
	$(this).find(".txt_in_5 h3").stop().animate({paddingTop:"20px"},400);
},function(){
	$(this).find(".txt_in_5").stop().animate({height:"45px"},400);
	$(this).find(".txt_in_5 h3").stop().animate({paddingTop:"0px"},400);
});

$('.information_m li').click(function(e){
		console.log($(this).index());
		$('.information_b').removeClass('active').eq($(this).index()).addClass('active');
	});
/*按钮点击变换颜色*/
	$(".information_m li").click(function(){
	n=$(this).index();//获得按钮位置
	$(this).siblings().removeClass("current_i");
	$(this).addClass("current_i");
	});
/*旅游新鲜事*/	
$('.fresh_t_r li').click(function(e){
		console.log($(this).index());
		$('.fresh_b').removeClass('active').eq($(this).index()).addClass('active');
	});
/*按钮点击变换颜色*/
	$(".fresh_t li").click(function(){
	n=$(this).index();//获得按钮位置
	$(this).siblings().removeClass("current_fr");
	$(this).addClass("current_fr");
	});

/*原创游记*/	
$('.travel_t_m li').click(function(e){
		console.log($(this).index());
		$('.travel_b').removeClass('active').eq($(this).index()).addClass('active');
	});
/*按钮点击变换颜色*/
	$(".travel_t_m li").click(function(){
	n=$(this).index();//获得按钮位置
	$(this).siblings().removeClass("current_ta");
	$(this).addClass("current_ta");
	});


/*56人凤舞社*/	
$('.society_tr li').click(function(e){
		console.log($(this).index());
		$('.society_b').removeClass('active').eq($(this).index()).addClass('active');
	});
/*按钮点击变换颜色*/
	$(".society_tr li").click(function(){
	n=$(this).index();//获得按钮位置
	$(this).siblings().removeClass("current_sa");
	$(this).addClass("current_sa");
	});

/*56人达人广场*/	
$('.square_tr li').click(function(e){
		console.log($(this).index());
		$('.square_b').removeClass('active').eq($(this).index()).addClass('active');
	});
/*按钮点击变换颜色*/
	$(".square_tr li").click(function(){
	n=$(this).index();//获得按钮位置
	$(this).siblings().removeClass("current_s");
	$(this).addClass("current_s");
	});


})