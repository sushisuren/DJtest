$(function () {



    //banner
    var _index = 0;
    var timer = null;
    $("#boxbanner .smallimg li").click(function () {
        _index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("#boxbanner .imglist li").eq(_index).fadeIn(400).siblings().fadeOut(400);
    })
    timer = setInterval(auto, 3000);   //定时器

    function auto() {
        _index++;
        if (_index > 5)_index = 0;
        $("#boxbanner .smallimg li").eq(_index).addClass("active").siblings().removeClass("active");
        $("#boxbanner .imglist li").eq(_index).fadeIn(400).siblings().fadeOut(400);
    }

    $("#boxbanner").hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(auto, 3000);
    })
    auto();        //函数调用立即执行

    //louti
    var mark = 1;
    $("#nav-right .floot li").not(".last").click(function () {
        mark = 2;
        var _i = $(this).index();
        var _top = $("#content .louti").eq(_i).offset().top; //获取指定楼层与浏览器上方的距离
        $("body,html").stop().animate({scrollTop: _top}, 500), function () {
            mark = 1;
        };
    });
    //楼层出现
    $(window).scroll(function () {
        if (mark == 1) {
            var _scrTop = $(this).scrollTop();

            //document.title=_scrTop;
            if (_scrTop >= 500) {
                $("#nav-right").fadeIn();
            } else {
                $("#nav-right").fadeOut();
            }

            var obj = $("#content .louti");
            //alert(obj.length);   each 循环每一个楼层 然后找打最先满足的哪一个楼层
            obj.each(function () {
                var _i = $(this).index();	 //导航对应的index值
                // alert(_index);
                var _Height = obj.eq(_i).offset().top + ($(this).height()) / 2;
                //自己本身距离浏览器上方的高度+自身高度一半的时候就下移导航字体
                //alert(_Height);
                if (_scrTop < _Height) {		//循环过程中  _scrTop<_Height 的第一优先选择 其余return false
                    $("#nav-right .floot li").find("i").removeClass("lan")
                    $("#nav-right .floot li").find("h3").removeClass("ziti")
                    $("#nav-right .floot li").eq(_i).find("i").addClass("lan")
                    $("#nav-right .floot li").eq(_i).find("h3").addClass("ziti");
                    return false;
                }
            });
        }
    })
    //回到顶部
    $("#nav-right .floot li.last").click(function () {
        $("body,html").stop().animate({scrollTop: 0}, 500), function () {
            mark = 1;
        };
    })
})