$(function(){
	//评论
$(".btn-comment").click(function(){
	$(this).siblings(".pl_a").show();
});
//评论end
//评论图放大
$(".c_dis_pic .c_d").hover(function(){
	$(this).siblings().find("span").hide();
	$(this).find("span").show();
	
},function(){
	
	$(this).find("span").hide();
});
//评论图放大


//星星打分
function dafen(a,b){
	$(a).click(function(){
		$(a).removeClass('active-star');
		$(this).addClass('active-star');
		var _val=$(this).attr('title');
		$(b).val(_val);
	});
	}
	dafen('.star_ul a','#zp');
	dafen('.star_ul_1 a','#fw');
	dafen('.star_ul_2 a','#xjb');
	dafen('.star_ul_3 a','#ws');
//星星打分end

	$(".rating-star span.star").width(function(){

	var n=$(this).attr("value");

	var b=(18*n)+3*(n-1);
	return b;
});
	
	
	
	
	
});