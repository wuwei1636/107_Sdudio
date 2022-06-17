$(function(){

    // 搜索框 Start
    $('.search input').on({
        mouseenter:function(){
            $(this).css("backgroundColor","#fff");
        },
        mouseleave:function(){
            $(this).css("backgroundColor","#F5AA02");
        }
    })
    // 搜索框 End

    // 菜单栏下拉 Start
    $('.nav>li').hover(function(){
        $(this).toggleClass("colorChoose").children('ul').stop().slideToggle("3000");
    })
    //菜单栏下拉 End

    //淡入淡出的诗句 Start
    var poem1_Flag=0;
    $('.sdgtTitle').click(function(){
        $(this).siblings('.mjh').stop().fadeOut(700).siblings('.sdgt').stop().fadeIn(700);
        poem1_Flag=0;
        poemcolor1();
    })
    $('.mjhTitle').click(function(){
        $(this).siblings('.sdgt').stop().fadeOut(700).siblings('.mjh').stop().fadeIn(700);
        poem1_Flag=1;
        poemcolor1();
    })
    function poemcolor1(){
        if(poem1_Flag==0){
            $('.sdgtTitle').css("backgroundColor","#EC6B0E");
            $('.mjhTitle').css("backgroundColor","#F5AA02");    
        }
        else{
            $('.mjhTitle').css("backgroundColor","#EC6B0E");
            $('.sdgtTitle').css("backgroundColor","#F5AA02"); 
        };
    }
    //淡入淡出的诗句 End

    //上下滑动的诗句 Start
    $(".cxTitle").on("click",this,function(){
        $(this).stop().siblings(".cx").slideDown().siblings("ul").slideUp();
        $(this).css("backgroundColor","#EC6B0E").siblings("span").css("backgroundColor","#F5AA02"); 
    })
    $(".yyjbTitle").on("click",this,function(){
        $(this).stop().siblings(".yyjb").slideDown().siblings("ul").slideUp();
        $(this).css("backgroundColor","#EC6B0E").siblings("span").css("backgroundColor","#F5AA02"); 
    })
    $(".qmTitle").on("click",this,function(){
        $(this).stop().siblings(".qm").slideDown().siblings("ul").slideUp();
        $(this).css("backgroundColor","#EC6B0E").siblings("span").css("backgroundColor","#F5AA02"); 
    })
    //上下滑动的诗句 End

    //jQuery单独制作第三个轮播图 Start

    //复制li的0、1、2、3
    var first = $("<li><img src='images/1.jpg'></li>");
    $(".animate_3> ul").append(first);
    var second = $("<li><img src='images/2.jpg'></li>");
    $(".animate_3> ul").append(second);
    var third = $("<li><img src='images/3.jpg'></li>");
    $(".animate_3> ul").append(third);
    var fourth = $("<li><img src='images/4.jpg'></li>");
    $(".animate_3> ul").append(fourth);
    var num=0;
    //1.左右按钮
    var animate_flag=true;
    var li =parseInt($(".animate_3 li").css("margin-right"))+parseInt($(".animate_3 img").css("width"));
    $(".animate_3").find(".next").on("click",function(){
        if(animate_flag){
            animate_flag=false;
            num++;
            if(num==7){
                $(".animate_3> ul").css("left",0);
                num=1;
            } 
            $(".animate_3> ul").stop().animate({
                left:-li*num,
            },250)
            animate_flag=true;
        }   
    })
    $(".animate_3").find(".prev").on("click",function(){
        
        if(animate_flag){
            animate_flag=false;
            num--;

            if(num<0){
                $(".animate_3> ul").css("left",-li*6);
                num=5;
            }          
            $(".animate_3> ul").stop().animate({
                left:-li*num,
            },250)
            animate_flag=true;
        }   
    })
    //2.自动播放
    setInterval(function(){$(".animate_3 .next").click()},3500)
    
    //jQuery单独制作第三个轮播图 End

    // 狗子 Start
    $(".dog img").click(function(){
        var index = $(this).index();
        $(".mask").show();
        $(".bigDog").show();
        $(".cont ul>li").eq(index).show().siblings().hide();      
    })
    $(".close").click(function(){

        $(this).parents(".bigDog").hide();
        $(".mask").hide();
    })
    // 狗子 End
})