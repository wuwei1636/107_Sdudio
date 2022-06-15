window.addEventListener('load', function () {

    // 搜索框字
    var text = document.querySelector('input');
    text.onfocus = function () {
        this.style.color = '#333'
        this.style.backgroundColor = '#fff'
    }
    text.onblur = function () {
        this.style.backgroundColor = '#f5aa02'
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
    //  动态生成小圆圈
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');

    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {

            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * 1920);
        })
    }
    // 把ol里面的第一个小li设置类名为 current
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var l = document.querySelector('.l');
    var r = document.querySelector('.r');
    var num = 0;
    var circle = 0;
    focus.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null; //清除定时器
    })
    focus.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            // 手动调用点击事件
            r.click();
        }, 4000);
    })
    //节流锁
    let lock = true;
    //点击
    r.addEventListener('click', function () {

        if (!lock) return;
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * 1920, function () {
            flag = true;
        });
        circle++;
        if (circle == 4) {
            circle = 0;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
        lock = false;
        setTimeout(() => {
            lock = true;
        }, 800);

    });
    l.addEventListener('click', function () {

        if (!lock) return;
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * 1920 + 'px';

        }
        num--;
        animate(ul, -num * 1920, function () {
            flag = true;
        });
        circle--;
        if (circle < 0) {
            circle = 3;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
        lock = false;
        setTimeout(() => {
            lock = true;
        }, 800);
    });

    //自动播放
    var timer = this.setInterval(function () {
        r.click();
    }, 4000);
    // 诗歌
    var tablist = document.querySelector('.tablist');
    var lis2 = tablist.querySelectorAll('li');
    var items = document.querySelectorAll('.item');
    for (var i = 0; i < lis2.length; i++) {
        //绑定点击事件
        lis2[i].setAttribute('index', i);
        lis2[i].onclick = function () {
            //排除其他
            for (var i = 0; i < lis2.length; i++) {
                lis2[i].className = '';
            }
            //只留自己
            this.className = 'current1';
            var index = this.getAttribute('index');
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            items[index].style.display = 'block';
        }
    }
    //会议
    let oLeft = document.querySelector(".left");
    let oRight = document.querySelector(".right");
    let oImgList = document.querySelector(".img-list");
    // 克隆第一张图片
    var clonefirstImg = oImgList.children[0].cloneNode(true);
    // 将第一张图片添加至图片列表的末尾
    oImgList.appendChild(clonefirstImg);
    //图片索引
    let index3 = 0;
    //设置函数节流锁
    let lock1 = true;
    function handleRightBtn() {
        if (!lock1) return;
        index3++
        oImgList.style.left = -505 * index3 + "px";
        oImgList.style.transition = "0.5s ease";
        if (index3 === 4) {
            index3 = 0;
            setTimeout(() => {
                oImgList.style.left = 0;
                oImgList.style.transition = "none";
            }, 500);
        }
        //设置小图片高亮
        setCircles();
        //关锁
        lock1 = false;
        setTimeout(() => {
            lock1 = true;
        }, 800);
    }
    //右按钮
    oRight.addEventListener("click", handleRightBtn);
    oLeft.addEventListener("click", () => {
        if (!lock1) return;
        index3--;
        if (index3 === -1) {
            oImgList.style.left = -505 * 4 + "px";
            oImgList.style.transition = "none";
            index3 = 3;
            setTimeout(() => {
                oImgList.style.left = -505 * index3 + "px";
                oImgList.style.transition = "0.5s ease";
            }, 0);
        } else {
            oImgList.style.left = -505 * index3 + "px";
        }
        //设置小图片高亮
        setCircles();
        //关锁
        lock1 = false;
        setTimeout(() => {
            lock1 = true;
        }, 800);
    });
    //小图片
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
    //小图片点击切换图片
    const oCircle = document.querySelector(".circlr-list");
    //当点击图片
    oCircle.addEventListener("click", (e) => {
        if (e.target.nodeName.toLowerCase() === "img") {
            const n = Number(e.target.getAttribute("data-n"));
            index3 = n;
            setCircles();
            oImgList.style.left = -505 * index3 + "px";
        }
    });
    //自动轮播
    let autoplay = setInterval(handleRightBtn, 4000);
    //移动上去停止轮播
    const oWrap = document.querySelector(".box");
    oWrap.addEventListener("mouseenter", () => {
        clearInterval(autoplay);
    });
    // 移出继续轮播
    oWrap.addEventListener("mouseleave", () => {
        // 设表先关
        clearInterval(autoplay);
        autoplay = setInterval(handleRightBtn, 4000);
    });
    let oolist = this.document.querySelector(".list1"); 
    let ooLeft = document.querySelector(".left2");
    let ooRight = document.querySelector(".right2");
    oolist.innerHTML += oolist.innerHTML;
    //图片索引
    let indexx = 0;
    function handleLeftBtn(){
        indexx++;
        oolist.style.left = indexx * -256 + "px";
        oolist.style.transition = "0.5s ease";
        if (indexx === 6) {
            setTimeout(() => {
                indexx = 0;
                oolist.style.left = 0;
                //取消过渡
                oolist.style.transition = "none";
            }, 500);
        }
    }
    //左按钮
    // 节流锁
    let lock4 = true ;
    ooLeft.addEventListener("click",() =>{
        if(!lock4) return;
        indexx++;
        oolist.style.left =indexx*-256+"px";
        oolist.style.transition = "0.5s ease";
        if(indexx === 6){
         setTimeout(() => {
             indexx = 0;
             oolist.style.left = 0;
             //取消过渡
             oolist.style.transition =  "none";
         }, 500);
        }
        //关锁
        lock4 = false;
        setTimeout(() => {
            lock4 = true;
        }, 500);
    });
    ooRight.addEventListener("click",()=>{
        if (!lock4) return;
        indexx--;
        if(indexx === -1){
            oolist.style.left = 6 * -256 + "px";
            oolist.style.transition = "none";
            setTimeout(() => {
                indexx = 5;
                oolist.style.left = indexx * -256 + "px";
                oolist.style.transition = "0.5s ease";
            }, 0);
        }else {
            oolist.style.left = indexx * -256 + "px";
        }  
        lock4 = false;
        setTimeout(() => {
            lock4 = true;
        }, 500);   
    });
    //自动轮播
    let auto = setInterval(handleLeftBtn, 4000);
    let ooWrap = document.querySelector(".wrap") ;
    ooWrap.addEventListener("mouseenter", ()=>{
        clearInterval(auto);
    });
    ooWrap.addEventListener("mouseleave", () => {
        // 设表先关
        clearInterval(auto);
        auto = setInterval(handleLeftBtn, 4000);
    });
    //伸缩菜单
    var spans = document.querySelectorAll(".tree span");

    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = function () {
            // console.log(this);
            // 查找要修改的元素 span 自己
            // 修改，删除或添加 class -> open
            // 判断自己身上是不是有 open，如果有，删除!
            // this ->指向触发事件的元素本身
            if (this.className == "open") {
                // 如果有，删除!
                this.className = "";
            } else {
                // 如果没有，则添加 ，删除其他已经打开的！
                //找到打开（open属性的li）
                var openSpan = document.querySelector(".tree .open")
                if (openSpan !== null) {
                    // 如果集合不为空，删除他们的 open 属性
                    openSpan.className = "";
                }
                // 给自己设置 open 属性
                this.className = "open";
            }
        }
    }
    //图片放大
    var box1 = document.querySelector(".dog");
    var lis1 = box1.querySelectorAll('li');
    
    //遍历所有的li,单击的是哪个li里的图片src 。
    //	创建div  className='mark' 追加到box
    //	创建img  src          className  追加到box1
    //	创建span  innerHTML=X  追加到box1
    for (var i = 0; i < lis1.length; i++) {

        lis1[i].onclick = function () {
            //console.log(this)
            var newDiv = document.createElement('div');
            newDiv.className = 'mark';
            box1.appendChild(newDiv);
            var newImg = document.createElement('img');
            newImg.className = 'pic';
            newImg.src = this.getElementsByTagName('img')[0].src;
            // newImg.src=this.childNodes[0].src;
            box1.appendChild(newImg);
            var newSpan = document.createElement("span");
            newSpan.innerHTML = '×';
            box1.appendChild(newSpan);

            newSpan.onclick = function () {
                box1.removeChild(newDiv);
                box1.removeChild(newSpan);
                box1.removeChild(newImg);
            }

        }

    }



})
