window.addEventListener('load',function(){
    var imgs=document.querySelector('.imgs');
    var ul=imgs.children(0);
    
    var w =imgs.offsetWidth;
    var index =0;
    var timer = setInterval(function(){
        index++;
        var translatex = -index*w;
        ul.style.transition='all .3s';
        ul.style.transform='translateX(' + translatex + 'px)';
    },2000);
    ul.addEventListener('transitionend',function(){
        if(index==4){
            index=0;
            // console.log(index);
            ul.style.transition='none';
            var translatex=-index*w;
            ul.style.transform='translateX(' + translatex + 'px)';
        }
        else if (index<0){
            index=3;
            ul.style.transition='none';
            var translatex=-index*w;
            ul.style.transform='translateX(' + translatex + 'px)';
        }
    })
})
