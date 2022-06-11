$(function(){
    $(".nav1 li").click(function(){
        msg=$(this).attr("title");
         $(".con").css({"display":"none"})
        $(msg).css({"display":"block"})

    })
 })