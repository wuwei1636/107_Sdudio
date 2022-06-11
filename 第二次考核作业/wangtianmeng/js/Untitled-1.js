window.addEventListener('load',function(){
    var imgs=this.document.querySelector('.imgs');
    var ul=imgs.children[0];
    
    var w =imgs.offsetWidth;
    var index =0;
    var timer = this.setInterval(function(){
        index++;
        var translatex = index*w;
        ul.style.transition='all .3s';
        ul.style.transform='translateX(' + translatex + 'px)';
    },2000);
})
