function my_animate(obj, target, callback) {

    clearInterval(obj.timer);

    obj.timer = setInterval(function () {

        var step = (target - obj.offsetLeft) / 5;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft >= target - 10 && obj.offsetLeft <= target + 10) {
            if (parseInt(obj.style.left) != target) {
                obj.style.left = target + 'px';
            }
            clearInterval(obj.timer);
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30)
}