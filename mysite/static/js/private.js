// JavaScript Document
$(function(){

	
	
	

$(".da").mouseenter(function(){
	$(this).find("i").addClass("b1")
	$(this).find("b").addClass("b2")
	$(this).find("p").css("color","#f39600")
	}).mouseleave(function(){
		$(this).find("i").removeClass("b1")
		$(this).find("b").removeClass("b2")
		$(this).find("p").css("color","#404040")
		})
//二级的控制
$(".da").mouseenter(function(){
	$(this).children().children(".float_menu_right").show();
	}).mouseleave(function(){
		$(this).children().children(".float_menu_right").hide();
		})
/*二级菜单结束*/
/*定制私人游*/

$(".customization_contentscr1").hide().first().show();//  所有的消失  第一张显示，


	$(".customization_content_left1 div").click(function(){
		 var n =$(this).index();//获得按钮位置
		$(".customization_contentscr1").hide().eq(n).show();//找到所有的图片，都隐藏，让指定的显示。
		$(".customization_content_left1 div span").removeClass("left3");
		$(".customization_content_left1 div i").removeClass("left4");
		$(this).children("span").addClass("left3")//该选项添加当前项，兄弟移除当前项。
		$(this).children("i").addClass("left4")
		})
/*超级私人游*/


function chao(a,b){
    $(a).click(function(){
        var n =$(this).index();//获得按钮位置
        $(b).hide().eq(n).show();//找到所有的图片，都隐藏，让指定的显示。
        $(this).siblings().find("i").removeClass("super_dynamic");
        $(this).siblings().find("span").removeClass("super_dynamic2");
        $(this).children("i").addClass("super_dynamic");
        $(this).children("span").addClass("super_dynamic2");
    })
}
    chao(".super_titlemid li",".super_pic1");
/*伴游人追捧*/


	$(".Pursuit_titlemid li").click(function(){
		n=$(this).index();//获得按钮位置
		$(".Pursuit_pic1").hide().eq(n).show();//找到所有的图片，都隐藏，让指定的显示。
		$(".Pursuit_titlemid li i").removeClass("Pursuit_dynamic");
		$(".Pursuit_titlemid li span").removeClass("Pursuit_dynamic2");
		$(this).children("i").addClass("Pursuit_dynamic");
		$(this).children("span").addClass("Pursuit_dynamic2");
		})
/*当地人力荐*/
var n=0;
$(".recommend_pic1").hide().first().show();//  所有的消失  第一张显示，


	$(".recommend_titlemid li").click(function(){
		n=$(this).index();//获得按钮位置
		$(".recommend_pic1").hide().eq(n).show();//找到所有的图片，都隐藏，让指定的显示。
		$(".recommend_titlemid li i").removeClass("recommend_dynamic");
		$(".recommend_titlemid li span").removeClass("recommend_dynamic2");
		$(this).children("i").addClass("recommend_dynamic");
		$(this).children("span").addClass("recommend_dynamic2");
		})
/*专属服务*/
var n=0;
$(".exclusive_pic1").hide().first().show();//  所有的消失  第一张显示，
	$(".exclusive_titlemid li").click(function(){
		n=$(this).index();//获得按钮位置
		$(".exclusive_pic1").hide().eq(n).show();//找到所有的图片，都隐藏，让指定的显示。
		$(".exclusive_titlemid li i").removeClass("exclusive_dynamic");
		$(".exclusive_titlemid li span").removeClass("exclusive_dynamic2");
		$(this).children("i").addClass("exclusive_dynamic");
		$(this).children("span").addClass("exclusive_dynamic2");
		})
//rili
    $('.date_picker').datepicker({
        format: 'yyyy-mm-dd',
        language: 'zh-CN'
    });

    //下拉城市
    $(".fromcity").click(function(e){
        e.stopPropagation();
        $(this).parents(".inpcomm").siblings().find(".buxian").hide();
        $(this).siblings(".buxian").show();
    });
    $(".buxian").find("a").click(function(){
        $(this).parents(".buxian").siblings(".fromcity").val($(this).text());
        $(this).parents(".buxian").hide();
    });
    $(document).click(function(e){
        e.stopPropagation();
        $(".buxian").hide();
    });




	
})