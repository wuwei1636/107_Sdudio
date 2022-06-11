$(function() {
    $(".alert1").click(function() {
        alert("浏览器不支持自动设为首页，请手动设置");
    })
    $(".alert2").click(function() {
            alert("无法自动添加到收藏夹,请使用CTRL + D手动添加");
        })
        //默认第一个为高亮
    $(".banner_slider li").eq(0).addClass("current").siblings("li").removeClass("current");
    //点击小按钮
    $(".banner_slider").on("click", "li", function() {
            //添加高亮
            $(this).addClass("current").siblings("li").removeClass("current");
            //图片滚动
            $(".banner_imgs  li").eq($(this).index()).stop().fadeIn().siblings("li").stop().fadeOut();
            num = $(this).index();
        })
        //点击左右键
        //声明一个变量   当索引号使用
    var num = 0;
    $(".btns .right").click(function() {
        num++;
        if (num == $(".banner_imgs li").length) {
            num = 0;
        }
        $(".banner_slider li").eq(num).addClass("current").siblings("li").removeClass("current");
        $(".banner_imgs  li").eq(num).stop().fadeIn().siblings("li").stop().fadeOut();
    })
    var timer = setInterval(function() {
        //自动触发
        $(".btns .right").click();
    }, 2000);
    $(".lun").hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(function() {
            $(".btns .right").click();
        }, 2000);
    })
})