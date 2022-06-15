window.addEventListener('load',function(){
    // search
    var text = document.querySelector('.head-search');
    var text1 = document.querySelector('input');
    var text2 = document.querySelector('button');
    text.onmousemove = function(){
        
        text1.style.backgroundColor = '#fff';
        text2.style.backgroundColor = '#084466';
        text2.style.color = '#fff';
    }
    text.onmouseleave = function () {
        
        text1.style.backgroundColor = '#afd3eb';
        text2.style.backgroundColor = '#4c88ae';
        text2.style.color = '#7ab5dd';
    }
    // 下拉菜单
    var nav = document.querySelector('.nav');
    var lis = nav.children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            this.children[1].style.display = 'block';          
        }
        lis[i].onmouseout = function () {
            this.children[1].style.display = 'none';
        }
    };
    //轮播滚动
    let oImgList = document.querySelector(".img-list");
    // 克隆第一张图片
    var clonefirstImg = oImgList.children[0].cloneNode(true);
    // // 将第一张图片添加至图片列表的末尾
    oImgList.appendChild(clonefirstImg);
    let index3 = 0;
    function handleRightBtn() {
        index3++;
        oImgList.style.transition = "0.5s ease";
        oImgList.style.left = -320 * index3 + "px";
        if (index3 === 4) {
            index3 = 0;
            setTimeout(() => {
                oImgList.style.left = 0;
                oImgList.style.transition = "none";
            }, 500);
        }
        setCircles();   
    }
    //小圆圈
    const circles = document.querySelectorAll(".circl");
    function setCircles() {
        for (let i = 0; i < circles.length; i++) {
            oImgList.style.transition = "0.5s ease";
            if (i === index3) {
                circles[i].classList.add("active");
            } else {
                circles[i].classList.remove("active");
            }
        }
    }
    //小图圈点击切换图片
    const oCircle = document.querySelector(".circlr-list");
    //当点击圆圈
    oCircle.addEventListener("click", (e) => {
        // console.log(e.target.nodeName);
        if (e.target.nodeName.toLowerCase() === "li") {
            const n = Number(e.target.getAttribute("data-n"));
            index3 = n;
            setCircles();
            oImgList.style.left = -320 * index3 + "px";
        }
    });
    //自动轮播
    let autoplay = setInterval(handleRightBtn, 3000);
    //移动上去停止轮播
    const oWrap = document.querySelector(".box");
    oWrap.addEventListener("mouseenter", () => {
        clearInterval(autoplay);
    });
    // 移出继续轮播
    oWrap.addEventListener("mouseleave", () => {
        // 设表先关
        clearInterval(autoplay);
        autoplay = setInterval(handleRightBtn, 3000);
    });

    // //轮播滚动
    // var imglist = document.querySelector('.img-list');
    // var left = 0;
    // // 克隆第一张图片
    // var clonefirstImg = imglist.children[0].cloneNode(true);
    // // 将第一张图片添加至图片列表的末尾
    // imglist.appendChild(clonefirstImg);
    //  var timer ;
    //  function move(){
    //      //设表先关
    //      clearInterval(timer);
    //       timer = setInterval(function () {
    //          left -= 1;

    //          if (left <= -1280) {
    //              left = 0;
    //          }
    //          imglist.style.left = left + 'px';
    //      }, 10)
    //  }
    //  move();
    // imglist.onmouseenter = function(){
    //     clearInterval(timer);
    // }
    // imglist.onmouseleave = function(){
    //     move();
    // }
    // more变色
    var more = document.querySelectorAll('.more');
   for(var i = 0;i<more.length ; i++){
       more[i].onmouseover = function () {
           this.children[0].style.color = '#f5aa02';
       }
       more[i].onmouseout = function () {
           this.children[0].style.color = '#cdc2dc';
       }
   }
   //返回顶部
    var backtop = document.querySelector('.backtop');
    document.addEventListener('scroll', function(){
        // console.log(window.pageYOffset);
        if (window.pageYOffset >= 251) {
            backtop.classList.add('active11');
        } else {
            backtop.classList.remove('active11');
        }
        backtop.addEventListener('click',function(){
            window.scroll(0,0);
        })
    })
   
        
                            
      
                        
    //移动框

    // //输出当前窗口的宽
    // var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
    
    // var windowWidth = document.documentElement.clientWidth;

    // // //输出当前窗口的高
    // // var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    // var windowHeight = document.documentElement.clientHeight;
    var windowWidth;
    var windowHeight;
    function watchWindowSize() {

        // 获取窗口的宽度和高度，不包括滚动条

        windowWidth= document.documentElement.clientWidth;

        windowHeight = document.documentElement.clientHeight;

        // 打印结果


    }

    // 将事件侦听器函数附加到窗口的resize事件

    window.addEventListener("resize", watchWindowSize);

    // 第一次调用该函数

    watchWindowSize();

    var xin = true, yin = true;
    var fudong = document.querySelector('.fudong')
    console.log(windowWidth);
    var x = 0;
    var y = 0;
    function move() {
        if (x >= windowWidth - 230) {
            xin = false;
        }
        if (x == 0) {
            xin = true;
        }
        if (y >= windowHeight - 230) {
            yin = false;
        }
        if (y == 0) {
            yin = true;
        }
        if (xin) {
            x += 2;
        }
        else {
            x -= 2;
        }
        if (yin) {
            y += 2;
        }
        else {
            y -= 2;
        }
        fudong.style.left = x + 'px';
        fudong.style.top = y + 'px';
    }
        var timer = setInterval(move, 1);
    fudong.addEventListener("mouseenter",()=>{
        clearInterval(timer);
    });
    fudong.addEventListener("mouseleave", () => {
        // 设表先关
        clearInterval(timer);
        timer = setInterval(move, 1);
    });
    var randCode = "";
    function creatCode() {
        var chars = ['A', 'B', 'C', 'D', 'a', 'b', 'c', 'd', '0', '1', '2', '3'];  //用数组chars保存验证码里出现的字符
        for (var i = 0; i < 4; i++) {
            //0-1的随机小数 -->  0~数组长度-1的范围   取整
            var randPosition = Math.floor(Math.random() * (chars.length - 1));  //每次生成一个随机数的位置
            randCode += chars[randPosition];
        }
        document.getElementById("code").innerHTML = randCode;//当产生验证码后，将其显示到 div 中
    }
    creatCode();
    var butt = document.querySelector('.butt');
    var yzm = document.querySelector('.yzm');
    var judge = yzm.querySelector('.judge')
    var oValue = judge.value.toUpperCase();
    butt.addEventListener('click',function(){
       if (oValue != randCode){
        alert('验证码不正确'); 
    }
    })
    
   
    var liuliu = document.querySelector('.liuliu');
    var liuyanban = document.querySelector('.liuyanban');
    liuliu.addEventListener('click',function(){
        liuyanban.style.display = 'block';
    })
    var close = this.document.querySelector('.close');
    close.addEventListener('click', function () {
        liuyanban.style.display = 'none';
    })
    var hidden = this.document.querySelector('.hidden');
    var input = this.document.querySelector('.input');
    var i = 0;
    input.addEventListener('click', function () {
        if (i == 0) {
        hidden.style.display = 'none';
        i = 1 ; 
    }
        else if(i == 1)
        {
            hidden.style.display = 'inline';
            i = 0 ;
        }
    })


    })