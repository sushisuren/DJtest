$(function(){
	//活动详情
	//下拉
	$(".active_derec").click(function(){
		$(this).siblings(".active_join1").toggleClass("baifen");
		$(this).toggleClass("active_i");
	});
	//跳到详情
    $(".answer_bottom2").click(function(){
        var _top=$(".my_answer").offset().top; //获取指定楼层与浏览器上方的距离
        $("body,html").stop().animate({scrollTop:_top},500)
    })
    //问答详情
	
	//倒计时
    var endTime=new Date();  //结束时间
    endTime.setFullYear(2016);  //年
    endTime.setMonth(1);  //月 （减1）
    endTime.setDate(22);  //天
    endTime.setHours(0);
    endTime.setMinutes(0);
    endTime.setSeconds(0);
    var obj=$(".active_span");
    var endTimes=endTime.getTime();
    //设置定时器
    setInterval(function(){
        changeTime(endTimes,obj);
    },1000);
    changeTime(endTimes,obj);

    function changeTime(endTimes,obj){

        var nowTime=new Date(); //现在时间
        //(结束时间毫秒数--现在时间的毫秒数)/1000=相差时间的秒数
        var s=(endTimes-nowTime.getTime())/1000; //相差时间秒数
        if(s>0){
            //把秒数花成 天  小时  分钟 秒
            var day=Math.floor(s/86400); //天数
            s=s%86400; //剩下秒数  s=s-day*86400
            var hours=Math.floor(s/3600); //小时
            s=s%3600;  //s=s-hours*3600
            var minutes=Math.floor(s/60); //分钟
            s=Math.floor(s%60);  //秒

            obj.eq(0).html(fullZero(day,2)); //赋值天
            obj.eq(1).html(fullZero(hours,2));  //小时
            obj.eq(2).html(fullZero(minutes,2)); //分钟
            obj.eq(3).html(fullZero(s,2)); //秒
        }

    }



    //创建补0方法
    function fullZero(itime,n){  // 3  2
        var str=""+itime;
        while(str.length<n){
            str="0"+str;
        }
        return str;

    }


})

$('.add').click(function(){
    $(this).parents().siblings('.pl_a').show();
})