function gun(){
	$(".panying_midguscr").animate({marginLeft:-1200},1000,function(){//（回调函数）向上移动40px后，执行一个函数
	$(".panying_midguscr").css({marginLeft:0});//将顶部距离设为零，也就是第一个信息在返回原来的位置
	$(".panying_midguscr .panying_mid:last").after($(".panying_midguscr .panying_mid:first"));//将第一个放到最后一个的    后面（添加属性）
	});
}
var t=setInterval(gun,5000);//每条新闻显示停顿的时间
$(".panying_midgu").mouseenter(function(){
	clearInterval(t);
	}).mouseleave(function(){
		t=setInterval(gun,5000);
	})