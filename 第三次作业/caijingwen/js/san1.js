$(function(){
 
  var oul=$('.n21 ul');
  var numli=$('.n21 ol li');
  var aliwidth=$('.n21 ul li').eq(0).width();
  var now=0;
  numli.click(function(){
      var index=$(this).index();
      $(this).addClass('current').siblings().removeClass();
      oul.animate({'left':-aliwidth*index},500);
});
  setInterval(function(){
    if(now==3){
      now=0;
    }
    else{
      now++;
    }
    numli.eq(now).addClass('current').siblings().removeClass();
    oul.animate({'left':-aliwidth*now},500);
  },2000);
});
$(function(){
  var img =document.querySelector("#img");
  var num=0;  //移动的距离，下一行同理；
  var num1=0;
  var flg=true;   //设置一个变量，配合三元表达式使用，实现折返的效果，下一行同理；
  var flg1=true;
var moveid=null;
function fun(){
      zuo = document.documentElement.clientWidth-300;
      shang = document.documentElement.clientHeight-200;
      setTimeout(fun,100);
      //判断让其上下移动
      if(num<=0){flg=true;num=0}
      if(num>=shang){flg=false;num=shang}
      flg?num+=2:num-=2;
      //判断让其左右移动
      if(num1<=0){flg1=true;num1=0}
      if(num1>=zuo){flg1=false;num1=zuo}
      flg1?num1+=2:num1-=2;
      img.style.marginTop=num+'px';
      img.style.marginLeft=num1+'px';
  }

  moveid= setTimeout(fun,1000);
  
$("#img").mouseover(function(){

clearTimeout(moveid);
});
$("#img").mouseout(function(){
moveid= setTimeout(fun,1000);
});

  $(".header2-content>ul>li").mouseover(function(){
      $(this).children("ul").show();
      $(this).css('font-width','1000px')
  });
  $(".header2-content>ul>li").mouseout(function(){
      $(this).children("ul").hide()
  });
  $("#back_top").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
      $("html,body").animate({scrollTop:"0px"},200);
  }); 
 
})

function openDialog(){
  document.getElementById('light').style.display='block';
}
function closeDialog(){
  document.getElementById('light').style.display='none';
}




