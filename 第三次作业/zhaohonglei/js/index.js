window.addEventListener('load', function () {

    // 轮播图 Start
    var foucs = this.document.querySelector('.scroll_img');
    var foucsWidth = foucs.offsetWidth;

    var ul = foucs.querySelector('.scroll_img>ul');
    var ol = foucs.querySelector('.scroll_img>ol');
    var img_title = foucs.querySelector('.scroll_img>.title');
    // 节流阀
    var flag = true;

    // 索引号
    var box_index = 0;
    var index = 0;

    // 图片标题
    var arr = ['九三学社社员王学路教授团队科研成果入选2021年...', '王东伟莅临我校调研', '市校合作再谱新篇章——“河南大学开封研究院”...', '我校组织统战工作专题学习培训'];
    img_title.innerHTML = '<a title=' + '"' + arr[index] + '"' + '"href="javascript:;">' + arr[index] + '</a>';

    foucs.addEventListener('mouseenter', function () {
        flag = false;
    })
    foucs.addEventListener('mouseleave', function () {
        flag = true;
    })
    // 关联圆圈与图片
    for (var i = 0; i < ul.children.length; i++) {
        // 创建ol 的小li
        var li = this.document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);

        ol.children[i].innerHTML = i + 1;
        ol.children[0].className = 'current';
        // 监测click情况
        li.addEventListener('click', function () {
            index = this.getAttribute('index');
            box_index = index;

            boxChange();

            if (ul.offsetLeft < -foucsWidth * li.length) {
                ul.style.left = 0;
            }
            my_animate(ul, -box_index * foucsWidth);
            img_title.innerHTML = '<a title=' + '"' + arr[index] + '"' + '"href="javascript:;">' + arr[index] + '</a>';
        })
    }
    // clone
    var first = ul.children[0].cloneNode('true');
    ul.appendChild(first);
    // 自动播放
    function boxChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[index].className = 'current';
    }
    var timer = this.setInterval(function () {
        if (flag) {
            flag = false;
            if (box_index == ul.children.length - 1) {
                ul.style.left = 0;
                box_index = 0;
            }
            box_index++;
            index++;

            my_animate(ul, -box_index * foucsWidth);

            if (index == ol.children.length) {
                index = 0;
                box_index = 0;
            }
            boxChange();
            img_title.innerHTML = '<a title=' + '"' + arr[index] + '"' + '"href="javascript:;">' + arr[index] + '</a>';
            flag = true;
        }
    }, 3000);

    // 轮播图 End
	var gotop = document.querySelector('.back');
	
	document.addEventListener('scroll', function () {
	    if (window.pageYOffset >= 170) {
	        gotop.style.opacity = '1';
	    }
	    if (window.pageYOffset < 170) {
	        gotop.style.opacity = '0';
	
	    }
	})
	
})

$(function () {
    // 返回顶部 Start Jquery版
    var boxTop = $(".content").offset().top;
    // $(window).scroll(function () {
    //     if ($(document).scrollTop() >= boxTop) {
    //         $('.back').fadeIn();
    //     } else {
    //         $('.back').fadeOut();
    //     }
    // })

    // $('.back').click(function () {
    //     $("body,html").stop().animate({
    //         scrollTop: 0
    //     }, 300);
    // })
    // 返回顶部 End
})
// 回到顶部 Start






// 感觉逻辑没错，但浏览器计算出错？？？？？
// var back = this.document.querySelector('.back');
// var flag = true;

// function fadeIn(element, speed) {
//     if (flag) {
//         flag = false;
//         if (element.style.opacity != 1) {
//             var speed = speed || 30;
//             // 用逻辑||解决无参数问题
//             var num = 0;
//             var timer = setInterval(function () {
//                 num++;
//                 element.style.opacity = num / 10;
//                 if (num >= 10) {
//                     clearInterval(timer);
//                 }
//             }, speed);
//             element.style.display = 'block';
//         }
//         flag = true;
//     }
// }

// function fadeOut(element, speed) {
//     if (flag) {
//         flag = false;
//         var num = 10;
//         if (element.style.opacity != 0) {
//             var speed = speed || 30;
//             var timer = setInterval(function () {
//                 num = num - 1;
//                 element.style.opacity = num / 10;
//                 console.log(num);
//                 if (num <= 0) {
//                     clearInterval(timer);
//                 }
//             }, speed);
//             element.style.display = 'none';
//             console.log(100);
//         }
//         flag = true;
//     }

// }

// var scrollFlag = true;
// this.window.addEventListener('scroll', function () {
//     if (scrollFlag) {
//         scrollFlag = false;
//         var scrollTop = this.window.pageYOffset;
//         var body = this.document.querySelector('.header');
//         var bodyTop = body.offsetHeight;

//         if (scrollTop >= bodyTop) {
//             console.log('出现中');
//             fadeIn(back, 50);
//         } else if (scrollTop < bodyTop) {
//             console.log('消失中');
//             fadeOut(back, 50);
//         }
//         scrollFlag = true;
//     }
// })
// 回到顶部 End