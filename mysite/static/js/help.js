	$(".cen_li_a").click(function(){
		
	$(this).siblings(".li_pull_down").slideToggle();
	$(this).children(".cen_li_i2").hasClass("cen_li_i2_2") ? $(this).children(".cen_li_i2").removeClass("cen_li_i2_2") : $(this).children(".cen_li_i2").addClass("cen_li_i2_2")
});
    
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





















	
