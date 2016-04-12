// JavaScript Document
//tab标签点击切换的jquery
$(function(){
	var _index=0;
	$(".fra_ul li").click(function(){
		_index=$(this).index();
		$(this).addClass("t_b").siblings().removeClass("t_b");
		$(".login_fra").eq(_index).show().siblings(".login_fra").hide();
	})
})
//end
//记住密码的jquery
$(".pass lable").click(function(){
	$(this).find("i").toggleClass("on")
})
//end
//注册tab
$(".fra_ul1 li").click(function(){
		_index=$(this).index();
		$(this).addClass("t_b1").siblings().removeClass("t_b1");
		$(".login_fra1").eq(_index).show().siblings(".login_fra1").hide();
	})
//end
//设置密码tab
//$(".fra_ul1 li").click(function(){
		//_index=$(this).index();
		//$(this).addClass("t_b1").siblings().removeClass("t_b1");
		//$(".login_fra1").eq(_index).show().siblings(".login_fra1").hide();
	//})
//end

//input的效果代码
	var $user=$(".login_fra1 .phone").val();   //缓存的初始值
	$(".login_fra1 .phone").focus(function(){     //光标移动显示
		if($(this).val()==$user){         
			$(this).val(" ");
		}
		$(this).css({"border":"1px solid #0099cc"})
	});
	$(".login_fra1 .phone").blur(function(){      //光标不显示
		if($(this).val()==" "){
			$(this).val($user);//给他赋他的初始值
		}
		$(this).css({"border":"1px solid #ececec"})
	});
	var $pass=$(".login_fra1 .password").val();
	$(".login_fra1 .password").focus(function(){
		if($(this).val()==$pass){
			$(this).val(" ");
		}
		$(this).css({"border":"1px solid #0099cc"})
	});
	$(".login_fra1 .password").blur(function(){
		if($(this).val()==" "){
			$(this).val($pass);//给他赋他的初始值
		}
		$(this).css({"border":"1px solid #ececec"})
	});
	
	var $code=$(".login_fra1 .code").val();
	$(".login_fra1 .code").focus(function(){
		if($(this).val()==$code){
			$(this).val(" ");
		}
		$(this).css({"border":"1px solid #0099cc"})
	});
	$(".login_fra1 .code").blur(function(){
		if($(this).val()==" "){
			$(this).val($code);//给他赋他的初始值
		}
		$(this).css({"border":"1px solid #ececec"})
	});
	
	var $code=$(".login_fra1 .codea").val();
	$(".login_fra1 .codea").focus(function(){
		if($(this).val()==$code){
			$(this).val(" ");
		}
		$(this).css({"border":"1px solid #0099cc"})
	});
	$(".login_fra1 .codea").blur(function(){
		if($(this).val()==" "){
			$(this).val($code);//给他赋他的初始值
		}
		$(this).css({"border":"1px solid #ececec"})
	});
	
	var $phone=$(".login_fra .phone").val();
	$(".login_fra .phone").focus(function(){
		if($(this).val()==$phone){
			$(this).val(" ");
		}
		$(this).css({"border":"1px solid #0099cc"})
	});
	$(".login_fra .phone").blur(function(){
		if($(this).val()==" "){
			$(this).val($phone);//给他赋他的初始值
		}
		$(this).css({"border":"1px solid #ececec"})
	});
	
	var $password=$(".login_fra .password").val();
	$(".login_fra .password").focus(function(){
		if($(this).val()==$password){
			$(this).val(" ");
		}
		$(this).css({"border":"1px solid #0099cc"})
	});
	$(".login_fra .password").blur(function(){
		if($(this).val()==" "){
			$(this).val($password);//给他赋他的初始值
		}
		$(this).css({"border":"1px solid #ececec"})
	});
	
	