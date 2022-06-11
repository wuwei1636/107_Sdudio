window.onload=function(){
    var topbtn=document.getElementById("btnsss");
    var timer=null;
    topbtn.onclick=function(){
        //alert("hello")
        
        timer=setInterval(function(){
            var backtop=document.body.scrollTop;
            var backtop=backtop/5;
            document.body.scrollTop=backtop-speedtop;
            document.body.scrollTop-=100;
            if(backtop==0){
                clearInterval(timer);
            }
        },30);
    }
}