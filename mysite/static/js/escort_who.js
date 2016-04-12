// JavaScript Document
$(function(){
    function recommend(c,d){

        $(d).mouseover(function(){
            var _i=$(this).index();
            $(this).siblings().find("span").removeClass("block");
            $(this).find("span").addClass("block");
            $(c).hide().eq(_i).show();
        });
    }
    recommend(".tui_ji",".tui_j ul li");
    recommend(".wj1",".wj ul li");
    //热门结伴
    $(".mypanying1").hide().first().show();//  所有的消失  第一张显示，


    $(".maypanying_list li").click(function(){
        n=$(this).index();//获得按钮位置
        $(".mypanying1").hide().eq(n).show();//找到所有的图片，都隐藏，让指定的显示。
        $(".maypanying_list li i").removeClass("mycuure2");
        $(".maypanying_list li").removeClass("mycuure");
        $(this).children("i").addClass("mycuure2");
        $(this).addClass("mycuure");
        //该选项添加当前项，兄弟移除当前项。
    })
    //下拉城市

    $(".pany_searchr1").click(function(e){
        e.stopPropagation();
        $(this).siblings(".buxian").show();
    });
    $(".buxian").find("a").click(function(e){
        $(this).parents(".city_search").siblings(".pany_searchr1").val($(this).text());
        $(".buxian").hide();
        e.stopPropagation();
    });
    $(document).click(function(){
        $(".buxian").hide();
    });




});

