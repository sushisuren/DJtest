// JavaScript Document
//left nav
$(".cen_li_a").click(function(){
	$(this).siblings(".li_pull_down").slideToggle();
	$(this).children(".cen_li_i2").hasClass("cen_li_i2_2") ? $(this).children(".cen_li_i2").removeClass("cen_li_i2_2") : $(this).children(".cen_li_i2").addClass("cen_li_i2_2")
})
//下拉菜单
$( "#selectmenu" ).selectmenu();
$( "#selectmenu1" ).selectmenu();
$( "#selectmenu2" ).selectmenu();
$( "#selectmenu3" ).selectmenu();
$( "#selectmenu4" ).selectmenu();
$( "#selectmenu5" ).selectmenu();
//资料完善进度
function animate(){
	$(".charts").each(function(i,item){
		var a=parseInt($(item).attr("w"));
		$(item).animate({
			width: a+"%"
		},1000);
	});
}
animate();
//选择填的选项
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

  $('form').on('submit', function(event) {
    event.preventDefault();
    $(this).validate('submitValidate'); //return boolean;
  });

//弹出框
$(".new_a").click(function(){
	$(".tab_new").show();
})
$(".img_new").click(function(){
	$(".tab_new").hide();
})

//关闭
$(".phone_i1").click(function(){
	$(".safe").hide();	
})
/*账号认证*/
$('.approve_li').click(function(){
    $(this).siblings().removeClass('zai');
    $(this).addClass('zai');
    var index=$(this).index();
    $('.cation').hide().eq(index).show();
})