window.addEventListener('load',function(){
    var btnl = this.document.querySelector('.prev');
    var btnr = this.document.querySelector('.next');
    var focus = this.document.querySelector('.animate_1');
    var focusWidth = focus.offsetWidth;

//自动播放及触摸暂停欣赏
    var timer = null;
    focus.addEventListener('mouseenter',function(){
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave',function(){      
        timer = setInterval(function(){
            btnr.click();    
        },3000)
    })
    timer = setInterval(function(){
        btnr.click();    
    },3000)

    
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle ol');
    var num = 0;
    var circle = 0;
    var flag = true;
// 小圆圈导航
    for(var i = 0;i<ul.children.length;i++){
        var li = this.document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        li.addEventListener('click',function(){
            if(flag){
                for(var i = 0;i<ol.children.length;i++){
                    ol.children[i].className = '';
                }
                this.className = 'current';
                var index = this.getAttribute('index');
                num = index;
                circle = index;
                if(ul.offsetLeft<-4720){
                    ul.style.left = 0 ;
                }   
                my_animate(ul,- index * focusWidth);
                flag=true;
            }

        })
        ol.children[0].className = 'current';   
    }    
// 右按钮
    var first = ul.children[0].cloneNode('true');
    ul.appendChild(first);
    btnr.addEventListener('click',function(){

        if(flag){
            flag = false;
            

            if(num==ul.children.length-1){
                ul.style.left = 0;
                num = 0;
            }  
            num++;  
            
            my_animate(ul,-num*1570,function(){
                flag = true;
            });
            
            circle++;
            if(circle==ol.children.length)circle=0;
            circleChange();
        }
    });
//左按钮 
    btnl.addEventListener('click',function(){
        if(flag){
                flag = false;
            if(num==0){
                num = ul.children.length-1;
                ul.style.left = -(num)*focusWidth+'px';           
            }  
            num--;  
            my_animate(ul,-num*focusWidth,function(){
                flag = true;
            });
            circle--;
            circle=circle<0?ol.children.length-1:circle;
            circleChange();
        }
    });

    function circleChange(){
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className='';            
        }
        ol.children[circle].className = 'current';
    }

})  
