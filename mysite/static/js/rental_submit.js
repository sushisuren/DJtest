$(function(){
	



		
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

//function addsele( add ){
//	$(add).click(function(){
//		var addText = $(this).parents('.add').prev('.add-box').html();
//		var Parse = $(this).parents('.around1');
//		$(addText).appendTo(Parse);
//	});
//}
function addsele( add ){
	$(add).click(function(){
		var addText = $(this).parents(".aroun").html();
		var Parse = $(this).parents(".aro");
		$(addText).appendTo(Parse);
	});
}
addsele('.clickadd');
//function palu(p){
//	$('.clickadd').click(function(){
//	numm = n++;
//	
//});
//$(this).
//	}






	
});