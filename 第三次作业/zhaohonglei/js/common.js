window.addEventListener('load', function () {
    var set = this.document.querySelector('.set');
    var add = this.document.querySelector('.add');
    // 浏览器顶部设置 start
    set.addEventListener('click', function () {
        alert('浏览器不支持自动设为首页，请手动设置');
    })
    add.addEventListener('click', function () {
        alert('无法自动添加到收藏夹，请用CTRL+D手动添加');
    })

    var search = this.document.querySelector('.search');

    search.addEventListener('mouseenter', function () {
        this.lastElementChild.style.display = 'none';
    })
    search.addEventListener('mouseleave', function () {
        this.children[this.children.length - 1].style.display = 'block';
    })
    // 浏览器设置 End

    // 导航栏 Start
    var nav_li = this.document.querySelectorAll('.header_nav >ul >li');

    for (var i = 0; i < nav_li.length; i++) {
        nav_li[i].addEventListener('mouseenter', function () {
            this.className = 'nav_choose';
        })
        nav_li[i].addEventListener('mouseleave', function () {
            this.className = '';
        })
    }
    //导航栏 End 
})