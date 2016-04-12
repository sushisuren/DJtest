$(function(){
	//导航搜索
	$(".search_sub a").mouseenter(function(){
		$(this).addClass("air_currue");
	}).mouseleave(function(){
			$(this).removeClass("air_currue");
	})
	
	$(".dropdown").mouseenter(function(){
		$(".dropdown").find("i").css("background-position","-113px -161px")
		$(".top_down").show();
	}).mouseleave(function(){
		$(".dropdown").find("i").css("background-position","-113px -167px")
		$(".top_down").hide();
	})
	//logo   下拉
	$(".local").mouseover(function(){
		$(".local_xl").show();
		$(this).find("i").addClass("s");
	}).mouseout(function(){
		$(".local_xl").hide();
		$(this).find("i").removeClass("s");
	})
	$(".local_xl li a").click(function(){
		$(".local input").val($(this).html());
		$(".local_xl").hide();
		})
	//城市下拉
	$(".city_j input").click(function(e){
			e.stopPropagation();
			$(".bor_city3").show();
		})
		$(document).click(function(){
			$(".bor_city3").hide();
		});

		$(".city .city_jj a").click(function(){

			$(".city_j input").val($(this).text());
		})
	//nav  erjimenu
	$(".navn li").mouseover(function(){
		$(this).find(".teo_content1").show();
		$(this).siblings().find(".teo_content1").hide();
		$(this).find("i").addClass("jiantou");
	}).mouseout(function(){
		$(".teo_content1").hide();
		$(this).find("i").removeClass("jiantou");
	})
	$(".navn").mouseout(function(){
		$(".block").show();
		})
	$("#banyou,#dangdi,#shop_a,#ren").mouseover(function(){
		$(".teo").show();
	}).mouseout(function(){
			$(".teo").hide();
	})
	


//弹出框的js
	// 注册按钮点击显示 
	$('.loginn').click(function(){
		$('.shade').show()
		$('.register').show()
	})
	//关闭按钮点击隐藏
	$('.login .close').click(function(){
		$('.register').hide()
		$('.shade').hide()
	})
	//记住密码点击 
	$('#rem_btn').click(function(){
		$(this).find('p').toggleClass('actwo')
	})
//弹出框的微信点击登录扫描二维码
	$('.wx_login').click(function(){
		$(this).addClass('active_a')
		$('.loginon').removeClass('active_a')
		$('.kua_a').hide();
		$('.kua_b').show();	
	})
	$('.loginon').click(function(){
		$(this).addClass('active_a')
		$('.wx_login').removeClass('active_a')
		$('.kua_a').show();
		$('.kua_b').hide();	
	})
//input的变化	
	var $user=$(".login .phone_txt").val();   //缓存的初始值
	$(".login input.phone_txt").focus(function(){     //光标移动显示
		if($(this).val()==$user){         
			$(this).val(" ");
		}
		$(this).css({"border":"2px solid #ececec","background":"#fff"})
	});
	$(".login input.phone_txt").blur(function(){      //光标不显示
		if($(this).val()==" "){
			$(this).val($user);//给他赋他的初始值
		}
		$(this).css({"border":"2px solid transparent","background":"#ececec"})
	});
	var $pass=$(".login .password").val();
	$(".login input.password").focus(function(){
		if($(this).val()==$pass){
			$(this).val(" ");
		}
		$(this).css({"border":"2px solid #ececec","background":"#fff"})
	});
	$(".login .password").blur(function(){
		if($(this).val()==" "){
			$(this).val($pass);//给他赋他的初始值
		}
		$(this).css({"border":"2px solid transparent","background":"#ececec"})
	});
		
})


