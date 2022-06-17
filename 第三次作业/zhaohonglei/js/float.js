window.addEventListener('load', function () {
    var stopFlag = true;
    var floatbox = this.document.querySelector('.float');
    var x_s = 1;
    var y_s = 1;
    this.setInterval(function () {
        move(floatbox, x_s, y_s);
    }, 10)

    function move(ele, next_x, next_y) {
        if (stopFlag) {
            stopFlag = false;
            // left，top 只读
            var Left = ele.offsetLeft;
            var Top = ele.offsetTop;

            var width = ele.offsetWidth;
            var height = ele.offsetHeight;
            // 卷去的（防止到不可视区域）
            var base_x = document.body.scrollLeft + document.documentElement.scrollLeft;
            var base_y = document.body.scrollTop + document.documentElement.scrollTop;

            //可视区域的
            var screen_X = document.documentElement.clientWidth;
            var screen_Y = document.documentElement.clientHeight;

            // 右边(ok)、左边、中间(ok)
			// 实际上可以将if else 里的代码再简化一下，看着更方便
            if (Left + next_x + width >= base_x + screen_X) {

                ele.style.left = base_x + screen_X - width + 'px';
                next_x = -1;
            } else if (Left + next_x <= base_x) {

                ele.style.left = 0 + base_x + 'px';
                next_x = 1;
            } else {
                ele.style.left = Left + next_x + 'px';
            }

            // 下边(ok)、上边、中间(ok)
            if (Top + next_y + height >= base_y + screen_Y) {

                ele.style.top = base_y + screen_Y - height + 'px';
                next_y = -1;
            } else if (Top + next_y <= base_y) {

                ele.style.top = base_y + 0 + 'px';
                next_y = 1;
            } else {
                ele.style.top = Top + next_y + 'px';
            }
            // 下一次的next_x,next_y;
            x_s = next_x;
            y_s = next_y;
            stopFlag = true;
        }

    }
})