$(function(){
    var timer = null;
    var liW = $("#rotate>ul>li:first").innerWidth();
    var n = 0;
    timer = setInterval(function(){
       play();
    },4000)
    function play(){
        $("#rotate>ul").animate({left : -liW},function(){
            $(this).css("left",0).find("li:first").appendTo(this)
        })
        n++;
        if(n>2){
            n=0;
        }
        $("#but>span").eq(n).addClass("on").sibLings().removeClass("on");
    }
    $("#rotate").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            play();
        },4000)
    })
    $("#top_4>#but>span").each(function(index){
      $(this).click(function(){
          if(n<index){
              for(var i = n;i<index;i++){
                  $("#rotate>ul").animate({left:-liW},100,function(){
                      $(this).css("left",0).find("li:first").appendTo(this);
                  })
              }
          }else if(n>index){
              for(var i = n;i>index;i--){
                  $("#rotate>ul").css("left",-liW).find("li:last").prependTo("#rotate>ul");
                  $("#rotate>ul").animate({left:0},100);
              }
          }
          n = index;
          $("#but>span").eq(n).addClass("on").sibLings().removeClass("on");
        })
    })
})
window.onload = function () {
    var topbtn = document.getElementById("btn");
    var timer1 = null;
    topbtn.onclick = function(){
         timer1 = setInterval(function(){
              var backtop = document.body.scrollTop;
              document.body.scrollTop -= 100;
              if(backtop == 0){
                  clearInterval(timer1);
              }
         },30);
    }
}
var xPos = 20; 

var yPos = document.body.clientHeight; 

var step = 1; 

var delay = 30; 

var height = 0; 

var Hoffset = 0; 

var Woffset = 0; 

var yon = 0; 

var xon = 0; 

var pause = true; 

var interval; 

float.style.top = yPos; 

function changePos() { 

width = document.body.clientWidth; 

height = document.body.clientHeight; 

Hoffset = float.offsetHeight; 

Woffset = float.offsetWidth; 

float.style.left = xPos + document.body.scrollLeft; 

float.style.top = yPos + document.body.scrollTop; 

if (yon) { 

yPos = yPos + step; 

} 

else { 

yPos = yPos - step; 

} 

if (yPos < 0) { 

yon = 1; 

yPos = 0; 

} 

if (yPos >= (height - Hoffset)) { 

yon = 0; 

yPos = (height - Hoffset); 

} 

if (xon) { 

xPos = xPos + step; 

} 

else { 

xPos = xPos - step; 

} 

if (xPos < 0) { 

xon = 1; 

xPos = 0; 

} 

if (xPos >= (width - Woffset)) { 

xon = 0; 

xPos = (width - Woffset); 

} 

} 

function start() { 

float.visibility = "visible"; 

interval = setInterval('changePos()', delay); 

} 

start(); 
