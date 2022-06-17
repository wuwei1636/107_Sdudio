window.addEventListener('load', function () {
    // 匿名发表的选择
    var name = document.querySelectorAll('.name');
    var noname = document.querySelector('.noname> input');
    noname.addEventListener('click', function () {
        console.log(this.checked);
        if (this.checked == true) {
            name[0].style.display = 'none';
            name[1].style.display = 'none';
        } else {
            name[0].style.display = 'inline-block';
            name[1].style.display = 'inline-block';
        }
    })

    // 发言按钮 的 确定
    var username = this.document.querySelector('.username input');
    var password = this.document.querySelector('.password input');
    var speak = this.document.querySelector('.yzm button');
    var inputTitle = this.document.querySelector('.input_title input');
    var text = this.document.querySelector('.area textarea');
    var yzm = this.document.querySelector('.yzm input');
    var yzm_imgbox = ['3dk9', '3r8h', '9w44', 'bhcv', 'c23c', 'p69d', 'qgkj'];
    var yzm_img = this.document.querySelector('.yzm span');
    var random_index = getRandom(0, 6);
    // 1.验证码模块
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    yzm_img.innerHTML = "<img src=" + "'images/yzm" + yzm_imgbox[random_index] + ".jpg'" + ">" + "</img>";
    //2. 检查用户输入的正确性
    function Checkit() {
        if (inputTitle.value == '') {
            alert('请输入标题');
        } else if (text.value == '') {
            alert('请输入内容');
        } else if (yzm.value == '') {
            alert('请输入验证码');
        } else if (yzm.value !== yzm_imgbox[random_index]) {
            alert('验证码有误');
        }
        // 判断用户存在与密码正确模块暂时搁置
    }
    speak.addEventListener('click', function () {
        if (noname.checked == true) {
            Checkit();
        } else {
            if (username.value == '' || password.value == '') {
                alert('请输入用户名与密码,或者选择匿名发言');
            } else {
                Checkit();
            }
        }
    })

    // inputTitle.addEventListener('keydown', function (e) {
    //     // 允许删除与回车
    //     if (e.keyCode != 8 && e.keyCode != 46) {
    //         if (this.value.length >= 40) {
    //             this.value = this.value.substr(0, 40);
    //         }
    //     }

    // })
    //文本输入样式更改
    //调一下颜色盒子
    var colorBox = ['0', '3', '6', '9', 'c', 'f'];
    var cell_1 = this.document.querySelectorAll(".cell_1 tr");
    var cell_2 = this.document.querySelectorAll(".cell_2 tr");
    Colorset(cell_1);
    Colorset(cell_2);

    function Colorset(element) {
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                element[i].children[j].style.backgroundColor = '#' + colorBox[5 - i] + colorBox[5 - j] + 'f';
            }
        }
        for (var i = 0; i < 6; i++) {
            for (var j = 6; j < 12; j++) {
                element[i].children[j].style.backgroundColor = '#' + colorBox[5 - i] + colorBox[11 - j] + 'c';
            }
        }
        for (var i = 6; i < 12; i++) {
            for (var j = 0; j < 6; j++) {
                element[i].children[j].style.backgroundColor = '#' + colorBox[11 - i] + colorBox[5 - j] + '9';
            }
        }
        for (var i = 6; i < 12; i++) {
            for (var j = 6; j < 12; j++) {
                element[i].children[j].style.backgroundColor = '#' + colorBox[11 - i] + colorBox[11 - j] + '6';
            }
        }
        element[11].children[11].style.backgroundColor = '#000';
    }
    // 正式设置文本样式
    var li = this.document.querySelectorAll('.area li');
    // 1.显示选择栏
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function (e) {
            // for里面的i是var声明的局部变量,不能进入function()
            var option = this;
            // 阻止冒泡
            e.stopPropagation();
            // 排他
            for (var j = 0; j < li.length; j++) {
                // 对于存在的chilren[1]才可以
                if (li[j].children[1]) {
                    li[j].children[1].style.display = 'none';
                }
            }
            // 留己
            if (option.children[1]) {
                option.children[1].style.display = 'block';
            }
            // 点击空白处关闭
            document.addEventListener('click', function () {
                if (option.children[1])
                    option.children[1].style.display = 'none';
            })
        })
    }

})