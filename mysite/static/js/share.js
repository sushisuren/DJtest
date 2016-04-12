// JavaScript Document
var isWidescreen=screen.width>=1280; 
if(isWidescreen){document.write("<style type='text/css'>.demo{width:1200px;}</style>");}







function item_masonry(){ 
	$('.item img').load(function(){ 
		$('.infinite_scroll').masonry({ 
			itemSelector: '.masonry_brick',
			columnWidth:285,
			gutterWidth:20							
		});		
	});
		
	$('.infinite_scroll').masonry({ 
		itemSelector: '.masonry_brick',
		columnWidth:285,
		gutterWidth:20								
	});	
}

$(function(){

	function item_callback(){ 
		
		$('.item').mouseover(function(){
			$(this).css('box-shadow', '0 1px 5px rgba(35,25,25,0.5)');
			$('.btns',this).show();
		}).mouseout(function(){
			$(this).css('box-shadow', '0 1px 3px rgba(34,25,25,0.2)');
			$('.btns',this).hide();		 	
		});
		
		item_masonry();	

	}

	item_callback();  

	$('.item').fadeIn();

	var sp = 1
	
	$(".infinite_scroll").infinitescroll({
		navSelector  	: "#more",
		nextSelector 	: "#more a",
		itemSelector 	: ".item",
		
		loading:{
			img: "images/masonry_loading_1.gif",
			msgText: ' ',
			finishedMsg: '木有了',
			finished: function(){
				sp++;
				if(sp>=10){ //到第10页结束事件
					$("#more").remove();
					$("#infscr-loading").hide();
					$("#page").show();
					$(window).unbind('.infscr');
				}
			}	
		},errorCallback:function(){ 
			$("#page").show();
		}
		
	},function(newElements){
		var $newElems = $(newElements);
		$('.infinite_scroll').masonry('appended', $newElems, false);
		$newElems.fadeIn();
		item_callback();
		return;
	});

});




//返回顶部
$(function(){

	$(window).scroll(function(){
		$(window).scrollTop()>1000 ? $("#gotopbtn").css('display','').click(function(){
			$(window).scrollTop(0);
		}):$("#gotopbtn").css('display','none');	
	});
	
});


//点击加载share_detail页面
$(function(){

	$('.item_list a.nava').click(function(e){
		creatLayer($(this).attr('data-href'));    //创建一个层,取消事件的默认动作
		e.preventDefault();      //不响应a的href了
	});

	/**
	 * 创建一个iframe层
	 */
	function creatLayer(url){            //creatLayer方法
		var $html = $('<div class="layer"></div>');  //给div申明一个变量在最上层，$('<div></div>');这样把div变成jquery对象
		$html.append('<span class="icon_close"></span>');   //像div中添加html     添加icon_close
		$html.append('<iframe border="0" width="100%" height="100%" class="iframe-load"></iframe>')

		$html.appendTo($(document.body));

		//关闭按钮	
		$html.children('.icon_close').click(function(){
			$html.remove();
		});

		//iframe添加url 并响应加载完成事件
		$html.children('iframe').attr('src',url).load(function(){   // 给iframe添加了一个src地址,然后设置了load(加载完成)的回调事件
			$(this).removeClass('iframe-load');
		});
	}
});