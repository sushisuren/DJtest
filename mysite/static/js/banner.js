//banner 轮播
var _index=0;
var timer=null;
$("#banner").hover(function(){
	$("#banner .lr_but").show()
},function(){
	$("#banner .lr_but").hide()
});	
$("#banner .slide_nav p").click(function(){
	_index=$(this).index();
	autoscroll();
});
$("#banner .lr_but .next").click(function(){
	_index++;
	if(_index>2)_index=0;
	autoscroll();
});
$("#banner .lr_but .prev").click(function(){
	_index--;
	if(_index<0)_index=2;
	autoscroll();
});
timer=setInterval(function(){
	_index++;
	if(_index>2)_index=0;
	autoscroll();
},5000);

$("#banner").hover(function(){
	clearInterval(timer);
},function(){
		timer=setInterval(function(){
		_index++;
		if(_index>2)_index=0;
		autoscroll();
	},3000);
});
function autoscroll(){
	$("#banner .slide_nav p").eq(_index).addClass("sn_bg").siblings("p").removeClass("sn_bg");
	$("#banner .imgshow li").eq(_index).fadeIn(400).siblings().fadeOut(400);
}
	