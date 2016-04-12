$(function(){
//悬浮框选项卡
$(".search_box1").hide().first().show();
$(".search_title li").click(function(){
	var _b=$(this).index();//获得按钮位置
	$(this).siblings().removeClass("active");
	$(this).addClass("active");
	$(".search_box1").hide().eq(_b).show();
	});
//国内酒店




//下啦城市
$(".dian").click(function(e){
	e.stopPropagation();
	$(this).next(".con_city1").show();
	$(this).parents(".search_city").siblings().find(".con_city1").hide();
});
$('.con_city1').find("a").click(function (e){
	e.stopPropagation();
	$(this).parents('.con_city1').hide();
	$(this).parents('.con_city1').siblings('.dian').val($(this).text());
});
$(document).click(function(){
	$('.dian').next(".con_city1").hide();
});







//下啦城市end
//鼠标经过白色遮罩/阴影
function getshowhide(tb,cLass){
		$(tb).hover(function(){
			$(this).find(cLass).show();
			$(this).addClass("yin");
		},function(){
			$(this).find(cLass).hide();
			$(this).removeClass("yin");
		});
	}
	getshowhide('.limit_div li','.shadow_hot_img');
	getshowhide('li.fan','.shadow_hot_img');

//选项卡
function tabchange(lis,con){
	$(lis).hide().first().show();//  所有的消失  第一张显示，
	$(con).mouseover(function(){
		_i=$(this).index();//获得按钮位置
		$(this).siblings().find("span").removeClass("block");
		$(this).find("span").addClass("block");
		$(lis).hide().eq(_i).show();//找到所有的图片，都隐藏，让指定的显示。
		})
}
tabchange(".tui_ji",".tui_j ul li");
tabchange(".du_jia",".dujia_li ul li");
tabchange(".tese_z",".inn_li ul li");

//鼠标经过黑框消失

$(".zhi_x").hover(function(){
	$(this).find(".next_shadow").hide();
	$(this).find(".img_next_shadow").hide();
	
},function(){
	$(this).find(".next_shadow").show();
	$(this).find(".img_next_shadow").show();
});
//鼠标经过白框消失
function getshowhide(tb){
		$(tb).hover(function(){
			$(this).find('.shadow_hot_img').show();
		},function(){
			$(this).find('.shadow_hot_img').hide();
		});
	}
	getshowhide('.inn_con_f dl');

//手风琴
	$(".block_box ul li").hover(function(){
		$(this).find("i").hide().end().siblings().find("i").show();
		$(this).find(".txt_city").hide().end().siblings().find(".txt_city").show();
		$(this).find("p").show().end().siblings().find("p").hide();
		
		
		var num=$(this).index();
		for(var index=0; index<7;index++){
			//console.log(index);
			if(index<=num){
				$(".block_box ul li").eq(index).stop().animate({left:(144*index)+'px'},500)
			}else{
				$(".block_box ul li").eq(index).stop().animate({left:(334+(index-1)*144)+'px'},500)
			}
			
		}
		
		
		});
		
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
laydate({
				elem: '#J-xl5'
			});












	
});