//left nav
$(".cen_li_a").click(function(){
	$(this).siblings(".li_pull_down").slideToggle();
	$(this).children(".cen_li_i2").hasClass("cen_li_i2_2") ? $(this).children(".cen_li_i2").removeClass("cen_li_i2_2") : $(this).children(".cen_li_i2").addClass("cen_li_i2_2")
})
//input标签的点击
/*step*/
var $phone=$(".title_a .phone").val();
$(".title_a .phone").focus(function(){
	if($(this).val()==$phone){
		$(this).val(" ");
	}
	$(this).css({"border":"1px solid #ff8a00"})
})
$(".title_a .phone").blur(function(){
	if($(this).val()==" "){
		$(this).val($phone)
	}
	$(this).css({"border":"1px solid #eeeeee"})
})
var $sear_ch=$(".title_a .sear_ch").val();
$(".title_a .sear_ch").focus(function(){
	if($(this).val()==$sear_ch){
		$(this).val(" ");
	}
	$(this).css({"border":"1px solid #ff8a00"})
})
$(".title_a .sear_ch").blur(function(){
	if($(this).val()==" "){
		$(this).val($sear_ch)
	}
	$(this).css({"border":"1px solid #eeeeee"})
})
/*step4*/



//点击下拉选择
//学历
$(".approve").click(function(e){
	e.stopPropagation();
	$(".app").slideToggle();
})
$(document).click(function(){
	$(".app").hide();
});

$(".app a").click(function(){

	$(".approve_span").text($(this).text());
})
//身份类型
$(".identity").click(function(e){
	e.stopPropagation();
	$(".ident").slideToggle();
})
$(document).click(function(){
	$(".ident").hide();
});

$(".ident a").click(function(){

	$(".identity_span").text($(this).text());
})
//性别
$(".sex").click(function(e){
	e.stopPropagation();
	$(".sexx").slideToggle();
})
$(document).click(function(){
	$(".sexx").hide();
});

$(".sexx a").click(function(){

	$(".sex_span").text($(this).text());
})
//消费方式
$(".toll").click(function(e){
	e.stopPropagation();
	$(".toll_a").slideToggle();
})
$(document).click(function(){
	$(".toll_a").hide();
});

$(".toll_a a").click(function(){

	$(".toll_span").text($(this).text());
})
//货币
$(".currency").click(function(e){
	e.stopPropagation();
	$(".cur_rency").slideToggle();
})
$(document).click(function(){
	$(".cur_rency").hide();
});

$(".cur_rency a").click(function(){

	$(".currency_span").text($(this).text());
})
//最大里程
$(".mileage").click(function(e){
	e.stopPropagation();
	$(".mil").slideToggle();
})
$(document).click(function(){
	$(".mil").hide();
});

$(".mil a").click(function(){

	$(".mileage_span").text($(this).text());
})

//car
$(".car").click(function(e){
	e.stopPropagation();
	$(".xl_car").slideToggle();
})
$(document).click(function(){
	$(".xl_car").hide();
});

$(".xl_car a").click(function(){

	$(".car_span").text($(this).text());
})
//预定状态
$(".calen_dar").click(function(e){
	e.stopPropagation();
	$(".calen").slideToggle();
})
$(document).click(function(){
	$(".calen").hide();
});

$(".calen a").click(function(){

	$(".calen_dar_span").text($(this).text());
})
//seat
$(".seat").click(function(e){
	e.stopPropagation();
	$(".xl_seat").slideToggle();
})
$(document).click(function(){
	$(".xl_seat").hide();
});

$(".xl_seat a").click(function(){

	$(".seat_span").text($(this).text());
})
//unknown
$("body").on("click",".unknown",function(e){
	e.stopPropagation();
	$(".xl_unknown").slideUp();
	$(this).siblings(".xl_unknown").slideToggle(); //这
});
$(document).click(function(){
	$(".xl_unknown").hide();
});

$("body").on("click",".xl_unknown a",function(e){
	$(this).parents(".xl_unknown").siblings(".unknown").find(".unknown_span").text($(this).text());
})

//灵活模式
$(".pattern").click(function(e){
	e.stopPropagation();
	$(".pattern_a").slideToggle();
})
$(document).click(function(){
	$(".pattern_a").hide();
});

$(".pattern_a a").click(function(){

	$(".pattern_span").text($(this).text());
})

//运营状态
$("body").on("click",".span_bj",function(){
	//alert(1);
	$(this).hasClass("span_bj2") ? $(this).removeClass("span_bj2") : $(this).addClass("span_bj2")
});


//删除
$("body").on("click",".delete",function(){
	$().click()
	$(this).parents(".tr2,.tr3,.tr4").hide();
});

//下一步点击事件
var index=0;
$(".next").click(function(){
	index++;
	next();
	//console.log( $('.step').size());
});
$(".last").click(function(){
	index--;
	next();
});

function next(){
	$(".step").hide().eq(index).show();
	if(index>0){
		$(".last").show();
	}else{
		$(".last").hide();
	}

	if(index == 3){
		$('.next').hide();
		$('.finish').show();
	}else{
		$('.finish').hide();
		$('.next').show();
	}
};
//点击添加行程
$(".fa_p").click(function(){
	var $clone=$(".tr3").last();
	$clone.before($clone.clone().show());
});
//运营日历
$("body").on("click",".rili",function(){

	//还有这里
	$(this).parents("table").find(".calendar").slideUp();
	$(this).siblings(".calendar").slideDown();

});
$("body").on("click",".guan",function(){
	$(this).parents(".calendar").slideUp();
});


//发布服务中心
$("body").on("click",".shanchu",function(){
	$(this).parents(".tab_taa").remove();
});
$("body").on("click",".span_button",function(){
	//alert(1);
	$(this).hasClass("span_button_hui") ? $(this).removeClass("span_button_hui") : $(this).addClass("span_button_hui")
});

//推荐路线
$('.traffic_li').click(function(){
	$(this).addClass('current_a').siblings().removeClass('current_a');
	$(this).children('.sub').addClass('cur_a');
	$(this).siblings().children('.sub').removeClass('cur_a');
	var _select = $(this).index();
	$('.tab_a').hide().eq(_select).show();
});

$(".site").click(function(e){
	e.stopPropagation();
	$(".sitee").slideToggle();
})
$(document).click(function(){
	$(".sitee").hide();
});

$(".sitee a").click(function(){

	$(".site_span").text($(this).text());
})
//景点/酒店等的添加
function appen(obj1,obj2){
	$(obj1).click(function(){
		var sce= $(obj2).first().html();
		$(".gai").append(sce);
	});
};
appen('.jd','#scenic');
appen('.jd_h','#hotel');
appen('.gw','#shop');
appen('.ms','#food');
appen('.yl','#play');
appen('.jt','#traffic');
//天数添加
function add(){
var arr=["零", "一", "二", "三", "四", "五", "六", "七", "八", "九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十"];
	$('.add_adda').click(function(){
		var oday_box=$('.day_box').length;
		$(".gai").append('<div class=\"day_box\"><p class=\"clearfix show day_a mt20\"><span class=\"fl day_ai ml15 mt10\"><img src=\"images/tuijian_1.png\"></span><span class=\"fl fon16 ml10 color_orange fonS\">第<span class=\"fon16\">'+(arr[oday_box+1])+'</span>天</span><span class=\"fr fon16 mr10 color_orange pointer shan_chu\">删除</span></p><textarea class=\"  tab_text pl20 pr20 pt10 pb10 fonS color999 fon14 mt20\" name=\"day_text[]\" placeholder=\"概况\"></textarea></div>');
	
	});
}
add();
//天数删除按钮
 $("body").on("click",".shan_chu",function(){
        $(this).parents(".day_box").remove();
        //$(this).removeAttr("click");
    });
//景点  酒店 等的删除

$('.gai').on('click','.delete',function(){
	$(this).parents('.shdudh').remove();
	//$(this).removeAttr("click");
});

