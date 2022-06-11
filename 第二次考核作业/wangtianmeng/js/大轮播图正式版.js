$(function(){
    var index=0;//标记当前图片的索引
    var f;
    dingshiqi();
    function dingshiqi(){
        var f=setInterval(function(){
        if(index==3){
            index=0;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
         }else{
             index++;
            $(".box-img").css("opacity","0");
             $(".box-img").eq(index).css("opacity","1");
         }
     },2000)
    }
    
    $(".box-left").click(function(){
        clearInterval(f);
        if(index==0){
            index=$(".box-img").length-1;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            dingshiqi();
        }
        else{
            index--;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            dingshiqi();
        }  
    })
    $(".box-right").click(function(){
        clearInterval(f);
        if(index==$(".box-img").length-1){
            index=0;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            dingshiqi();
        }
        else{
            index++;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            dingshiqi();
        }       
    })
        $(".botton1").click(function(){
            clearInterval(f);
           var indexx=$(this).index();
           index=indexx;
           $(".box-img").css("opacity","0");
           $(".box-img").eq(index).css("opacity","1");
           dingshiqi();
        })
})