// JavaScript Document


//input的效果
	var $title=$(".title_a .a_tit").val();          //缓存的初始值
		$(".title_a .a_tit").focus(function(){      //光标移动显示
			if($(this).val()==$title){
				$(this).val("");
			}
			$(this).css({"border":"1px solid #ff8a00"})
		});
		$(".title_a .a_tit").blur(function(){
			if($(this).val()==""){
				$(this).val($title);             //赋给它的初始值	
			}
			$(this).css({"border":"1px solid #fff"})	
		})	
		
	var $phone=$(".title_a .phone").val();
		$(".title_a .phone").focus(function(){
			if($(this).val()==$phone){
				$(this).val("");
			}	
			$(this).css({"border":"1px solid #ff8a00"})
		})
		$(".title_a .phone").blur(function(){
			if($(this).val()==""){
				$(this).val($phone)	
			}	
			$(this).css({"border":"1px solid #fff"})
		})
		
		
		var $add_ress=$(".pic_i .add_ress").val();
		$(".pic_i .add_ress").focus(function(){
			if($(this).val()==$add_ress){
				$(this).val("");
			}	
			$(this).css({"border":"1px solid #ff8a00"})
		})
		$(".pic_i .add_ress").blur(function(){
			if($(this).val()==""){
				$(this).val($add_ress)	
			}	
			$(this).css({"border":"1px solid #fff"})
		})

		var $city_a=$(".pic_i .city_a").val();
		$(".pic_i .city_a").focus(function(){
			if($(this).val()==$add_ress){
				$(this).val("");
			}
			$(this).css({"border":"1px solid #ff8a00"})
		})
		$(".pic_i .city_a").blur(function(){
			if($(this).val()==""){
				$(this).val($add_ress)
			}
			$(this).css({"border":"1px solid #fff"})
		})

		var day_date=$(".pic_i .day_date").val();
		$(".pic_i .day_date").focus(function(){
			if($(this).val()==day_date){
				$(this).val("");
			}
			$(this).css({"border":"1px solid #ff8a00"})
		})
		$(".pic_i .day_date").blur(function(){
			if($(this).val()==""){
				$(this).val(day_date)
			}
			$(this).css({"border":"1px solid #fff"})
		})
		
		
		var $day=$(".pic_i1 .day").val();
		$(".pic_i1 .day").focus(function(){
			if($(this).val()==$day){
				$(this).val("");
			}	
			$(this).css({"border":"1px solid #ff8a00"})
		})
		$(".pic_i1 .day").blur(function(){
			if($(this).val()==""){
				$(this).val($day)	
			}	
			$(this).css({"border":"1px solid #fff"})
		})
		
		
		var $day_1=$(".pic_i1 .day_1").val();
		$(".pic_i1 .day_1").focus(function(){
			if($(this).val()==$day_1){
				$(this).val("");
			}	
			$(this).css({"border":"1px solid #ff8a00"})
		})
		$(".pic_i1 .day_1").blur(function(){
			if($(this).val()==""){
				$(this).val($day_1)	
			}	
			$(this).css({"border":"1px solid #fff"})
		})


//tab标签
$(".ul_lia ul li").click(function(){
	$(this).toggleClass("current_a");
});


//轮播与点击变换
	var _index=0;
	var timer=null;
	$(".hot_li li").click(function(){
		_index=$(this).index();
		sel();
	})
	timer=setInterval(auto,3000);   //定时器
	
	function auto(e){
		_index++;
		if(_index>4)_index=0;
		sel();
	}
	
	$(".hot_top").hover(function(){
		clearInterval(timer);
	},function(){
	timer=setInterval(auto,3000);
	})
	
	function sel(){
		$(".hot_li li").eq(_index).addClass("currentt").siblings().removeClass("currentt");
		$(".hot_top").eq(_index).fadeIn(400).siblings().fadeOut(400);
	}

//时间
//时
$('.shi').click(function(e){
	e.stopPropagation();
	$(this).children('.shi_x').show();
})
$('.shi_x').find('a').click(function(e){
	e.stopPropagation();
	var text =  $(this).text();
	$('.hour').text(text);
	$(this).parents('.shi_x').hide();
})
$(document).click(function(e){
	e.stopPropagation();
	$('.shi_x').hide();
})
//分
$('.shi1').click(function(e){
	e.stopPropagation();
	$(this).children('.shi_x1').show();
})
$('.shi_x1').find('a').click(function(e){
	e.stopPropagation();
	var text =  $(this).text();
	$('.minute').text(text);
	$(this).parents('.shi_x1').hide();
})
$(document).click(function(e){
	e.stopPropagation();
	$('.shi_x1').hide();
})
//step2
$('.shi2').click(function(e){
	e.stopPropagation();
	$(this).children('.shi_x2').show();
})
$('.shi_x2').find('a').click(function(e){
	e.stopPropagation();
	var text =  $(this).text();
	$('.minute1').text(text);
	$(this).parents('.shi_x2').hide();
})
$(document).click(function(e){
	e.stopPropagation();
	$('.shi_x2').hide();
})


$('.shi3').click(function(e){
	e.stopPropagation();
	$(this).children('.shi_x3').show();
})
$('.shi_x3').find('a').click(function(e){
	e.stopPropagation();
	var text =  $(this).text();
	$('.hour1').text(text);
	$(this).parents('.shi_x3').hide();
})
$(document).click(function(e){
	e.stopPropagation();
	$('.shi_x3').hide();
})

$('.shi4').click(function(e){
	e.stopPropagation();
	$(this).children('.shi_x4').show();
})
$('.shi_x4').find('a').click(function(e){
	e.stopPropagation();
	var text =  $(this).text();
	$('.hour2').text(text);
	$(this).parents('.shi_x4').hide();
})
$(document).click(function(e){
	e.stopPropagation();
	$('.shi_x4').hide();
})


$('.shi5').click(function(e){
	e.stopPropagation();
	$(this).children('.shi_x5').show();
})
$('.shi_x5').find('a').click(function(e){
	e.stopPropagation();
	var text =  $(this).text();
	$('.minute2').text(text);
	$(this).parents('.shi_x5').hide();
})
$(document).click(function(e){
	e.stopPropagation();
	$('.shi_x5').hide();
})


$('.qiang_i').click(function(e){
	e.stopPropagation();
	$(this).siblings('.num').show();
})
$('.num').find('a').click(function(e){
	e.stopPropagation();
	var text =  $(this).text();
	$('.city_a1').val(text);
	$(this).parents('.num').hide();
})
$(document).click(function(e){
	e.stopPropagation();
	$('.num').hide();
})


$('.qiang_i').click(function(e){
	e.stopPropagation();
	$(this).siblings('.num1').show();
})
$('.num1').find('a').click(function(e){
	e.stopPropagation();
	var text =  $(this).text();
	$('.city_a2').val(text);
	$(this).parents('.num1').hide();
})
$(document).click(function(e){
	e.stopPropagation();
	$('.num1').hide();
})
//下一步的点击事件
var index=0;
$(".btn_next").click(function(){
	index++;
	next();
	//console.log( $('.step').size());
});
$(".btn_nexta").click(function(){
	index--;
	next();
});

function next(){
	$(".step").hide().eq(index).show();
	if(index>0){
		$(".btn_nexta").show();
	}else{
		$(".btn_nexta").hide();
	}

	if(index == 5){
		$('.btn_next').hide();
		$('.finish').show();
	}else{
		$('.finish').hide();
		$('.btn_next').show();
	}
};


$(".delete").click(function(){
	$(this).parents(".text_sc").hide();
});

//点击添加行程
/*$(".add_rout").click(function(){
	$(".wo_men").append(".men_jie");
});*/
var sdf=$(".wo_men").eq(0).html();

$(".add_rout").click(function(){
	$(".men_jie").append(sdf);

});
$("body").on("click",".delete",function(){
	$(this).parents(".text_only").remove();
});


//点击自动添加标签
/*var WS = function(opt){
	var regexp = opt.regexp || /\S/,  //正则
			el = $(opt.el),
			list = el.val().split(','),
			holder = $('<span class="words-split"></span>'),
			add = $('<a href="javascript:void(0)" class="words-split-add">+</a>');
	for (var i = 0; i < list.length; i++) {
		holder.append( $('<a href="javascript:void(0)" class="fm-button">'+list[i]+'<em> </em></a>') );
	}
	el.hide().after( holder );
	holder.after(add);
	holder.on('click','a>em',function(){	//刪除
		$(this).parent().remove();
		el.val( holder.text().match(/\S+/g).join(',') )
	});
	add.on('click',function(){				//添加预处理
		$(this).hide();
		holder.append( $('<span class="lbl-input" contenteditable="true"/>') )
	});
	holder.on('blur','.lbl-input',function(){	//验证添加字段
		var t = $(this),v = t.text();
		if( regexp.test(v) ){
			t.remove();
			add.show();
			holder.append( $('<a href="javascript:void(0)" class="fm-button">'+v+'<em> </em></a>') );
			el.val( holder.text().match(/\S+/g).join(',') )
		}else if(!v){
			t.remove();
			add.show();
		}else{
			alert('输入不合法');
		}
	});
	holder.on('keydown','.lbl-input',function(e){
		switch(e.keyCode){
			case 13:
			case 27: $(this).trigger('blur');
		}
	});
}
WS({
	el:'#staticPath',
	regexp:/\S/ //任意字符
});*/

