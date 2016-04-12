$(function(){
	//私人游界面
		$(".start").click(function(e){
			e.stopPropagation();
			$(".bor_city5").show();
			$(".bor_city6").hide()
		})
		$(document).click(function(){
			$(".bor_city5").hide()
		})
		$(".end").click(function(e){
			e.stopPropagation();
			$(".bor_city5").hide()
			$(".bor_city6").show()
		})
		$(document).click(function(){
			$(".bor_city6").hide()
		})
	$(".stime").click(function(e){
			e.stopPropagation();
			$(".go_way").hide()
			$(".bor_city5").hide()
			$(".bor_city6").hide()
		})
		$(".way").click(function(e){
			e.stopPropagation();
			$(".bor_city5").hide()
			$(".bor_city6").hide()
		})
		$(".city .city_g a").click(function(){
			
			$(".start").val($(this).text());
		})
		$(".city .city_gg a").click(function(){
			
			$(".end").val($(this).text())
		})
		//下拉出行类型
		$(".way").click(function(e){ 
			e.stopPropagation();
			$(".go_way").show();
		})
		$(document).click(function(){
			$(".go_way").hide();
		})
		$(".go_way ul li a").click(function(){
			$(".way").val($(this).text())
			$(".go_way").hide()
		})


})
