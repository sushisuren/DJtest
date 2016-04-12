$(function(){
	
	//其他保险
$(".la .others").click(function(){
	$(".fewer1").fadeToggle(100);
	$(".insurance").fadeToggle(100);
	});
	
//$(".add").click(function(){
//	var around=$(".sround1").html();
//	alert(around);
//	
//	});
//银行支付选项卡
$(".pay_con_f").hide().first().show();
$(".pay li").click(function(){
	var l=$(this).index();
	$(this).siblings().removeClass("bg");
	$(this).siblings().find("span").removeClass("bg1");
	$(this).addClass("bg");
	$(this).find("span").addClass("bg1");
	$(".pay_con_f").hide().eq(l).show();
	});
	
		//弹出银行卡
$(".bank a.more").click(function(){
	$(".popup").show();
	});
$(".popup").find("i").click(function(){
	$(".popup").hide();
	});
	//评论
$(".btn-comment").click(function(){
	$(this).siblings(".pl_a").show();
});
//评论图放大
$(".c_dis_pic .c_d").hover(function(){
	$(this).siblings().find("span").hide();
	$(this).find("span").show();
	
},function(){
	
	$(this).find("span").hide();
});
//评论图放大
//在线支付业
	$(".parti").click(function(){
		$(".online_ul").slideToggle();
		$(this).find("i").toggleClass("huan");
		});
//日历
/*
	laydate({
		elem: '#J-xl5'
	})
	laydate({
		elem: '#J-xl6'
	})
laydate({
            elem: '#J-xl'
        });
laydate({
            elem: '#J-xl1'
        });
*/

		
//固定在顶部
$(window).scroll(function(){
	var _top=$(window).scrollTop();
	var _hight=$(".header").height()+$(".progress_bar").height();
	if(_top>_hight){
		$(".commaction_f").addClass("fixed");
		}else{
			$(".commaction_f").removeClass("fixed");
			}
	});
	
	

	
	
	//判断
$('form').validate({
    onFocus: function() {
      this.parent().addClass('active');
      return false;
    },
    onBlur: function() {
      var $parent = this.parent();
      var _status = parseInt(this.attr('data-status'));
      $parent.removeClass('active');
      if (!_status) {
        $parent.addClass('error');

      }
      return false;
    }
  });


//判断end
//省级联动
addressInit('cmbProvince', 'cmbCity', 'cmbArea', '陕西', '宝鸡市', '金台区');

//  add

    var sdf=$(".colong2").eq(0).html();

    $(".add").click(function(){
     $(".colong2").append(sdf);

     });
    $("body").on("click",".pul",function(){
        $(this).parents(".around1").remove();
    });





$(".pul").click(function(){
	$(this).parents(".around1").remove();
	});






});