$(function(){
	var _index=0;
	$('.zc_xxk_list li').click(function(){
		 _index=$(this).index();
		$(this).addClass('bgcolor-hov').siblings().removeClass('bgcolor-hov');
		$('.box_sel_list').eq(_index).show().siblings('.box_sel_list').hide();
	})
	
	
	
	$(' .motorcycle_type').find('li.pointer').click(function(){
		var _index=$(this).index();
		$(this).addClass('moto_color').siblings().removeClass('moto_color');
		$('.ultab_mor').eq(_index).show().siblings().hide();
	})
	$('.car_myconty').find('li').hover(function(){
		var _index=$(this).index();
		$(this).addClass('myconty_hov').siblings().removeClass('myconty_hov');
		$('.zc_list ul').eq(_index).show().siblings().hide();
		$('.height_jb').find('.box_child').eq(_index).show().siblings().hide()
	})
	
	
	laydate({
				elem: '#J-xl'
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
				elem: '#J-xla'
	});
	
})
