window.addEventListener('load',function(){
    var focus = this.document.querySelector('.animate_2');
    var focusWidth = focus.querySelector('ul>li').offsetWidth;

    var ul = focus.querySelector('.bigBox> ul');
    var ol = focus.querySelector('.box> ol');
    var ico = focus.querySelector('.icoTop');
    var s_pan = focus.querySelector('.intro> span');

    var num = 0;
    var box_index = 0;
//触摸bigBox暂停 (OK)
    focus.addEventListener('mouseenter',function(){
        flag=false;
    })
    focus.addEventListener('mouseleave',function(){
        flag=true;
    })
    var flag = true;

    var arr = ['一','二','三','四','四'];
// 选中框切换（与bigBox联系）()
    for(var i = 0;i<ul.children.length;i++){
        var li = ol.querySelectorAll("li");
        li[i].setAttribute('index',i);
        li[i].addEventListener('click',function(){

            for(var i = 0;i<ol.children.length;i++){
                ol.children[i].className = '';
            }
            this.className = 'current';

            var index = this.getAttribute('index');
            num = index;
            box_index = index;
            if(ul.offsetLeft<-1555){
                ul.style.left = 0 ;
                ico.style.left = 47 + 'px';
            }        
            my_animate(ul,- index * focusWidth);
            ico.style.left = index * 96 +48+ 'px';
            s_pan.innerHTML = arr[index];
        })
        ol.children[0].className = 'current';   
    }    
    var first = ul.children[0].cloneNode('true');
    ul.appendChild(first);

    function boxChange(){
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className='';            
        }
        ol.children[box_index].className = 'current';
    }

//自动播放(影响选中框)(OK)
    this.setInterval(function(){
        if(flag){
            if(num==ul.children.length-1){
                ul.style.left = 0;
                //
                ico.style.left = 47 + 'px';
                num = 0;
            }  
            num++;  
            my_animate(ul,-num*focusWidth);
            //           
            ico.style.left = num*96+48+'px';
            box_index++;
            if(box_index==ol.children.length)
            {
                box_index=0;ico.style.left = 47 + 'px';
            }
            boxChange();
            s_pan.innerHTML = arr[box_index];
        }
    },3000);
})  
