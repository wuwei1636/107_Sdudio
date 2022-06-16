$(function() {
	//teb窗口左右切换
	var ali = $(".tabtitle-top ul li");
	var adiv = $('.tabcontent div ');
	ali.click(function() {
		$(this).addClass('current').siblings().removeClass('current');
		var index = $(this).index();
		adiv.eq(index).show().siblings().hide();
	});

	$('.tabcontent>div>p').mouseover(function() {
		$(this).addClass('red').siblings().removeClass('red');
	});
	//滑动
	var ah2 = $('.pilot2 h2');
	var aul = $('.pilot2 ul');
	ah2.click(function() {
		$(this).addClass('current').siblings().removeClass('current');
		$(this).next('ul').slideDown().siblings('ul').slideUp();
	});

	//图片切换
	var oul = $('.img ul li');
	var nli = $('.circle ol li');
	var ali2 = $('.img ul li').eq(0).width();



	var i = 0;
	var timer;
	nli.click(function() {
		clearInterval(timer);
		i = $(this).index();

		change();

	});
	start();
	$('.left').click(function() {
		i--;
		if (i == -1) {
			i = 3;
		}
		change();
	});

	$('.right').click(function() {
		i++;
		if (i == 4) {
			i = 0;
		}
		change();
	});
	$('.img').mouseover(function(){
		clearInterval(timer);
	});
	$('.img').mouseout(function(){
		timer = setInterval(function() {
			i++;
			if (i == 4) {
				i = 0;
			}
			change();
		}, 2000);
	});
	function start() {
		timer = setInterval(function() {
			
			i++;
			
			if (i == 4) {
				i = 0;
			}
			change();
		}, 2000);
	}

	function change() {
		//$(oul).eq(i).fadeIn(300).siblings().stop(true,true).fadeOut(300);
		$(nli).eq(i).addClass('current').siblings().removeClass('current');
		$('.img ul ').animate({
			'left': -ali2 * i
		}, 520);
	}


	$('.text p').mouseover(function() {
		$(this).addClass('red').siblings().removeClass('red');
	});

	//img2
	var k = 0;
	$('.img22 ol li').eq(0).addClass('border').siblings().removeClass('border');
	$('.img22 ol li').click(function(){ 
		k = $(this).index();
		
		$('.img2 ul li').eq(k).show().siblings().hide();
		$('.img22 ol li').eq(k).addClass('border').siblings().removeClass('border');
	});
	
	var timeid2;
	timeid2 = setInterval(function() {
		if (k==4) {
			k = -1;
		}
		k++;
		$('.img2 ul li').eq(k).show().siblings().hide();
		$('.img22 ol li').eq(k).addClass('border').siblings().removeClass('border');
	}, 1500);
	
	$('.img22 ol li').mouseover(function() {
		clearInterval(timeid2);
	}); 
	$('.img22 ol li').mouseout(function() {
		timeid2 = setInterval(function() {
			if (k==4) {
				k = -1;
			}
			k++;
			$('.img2 ul li').eq(k).show().siblings().hide();
			$('.img22 ol li').eq(k).addClass('border').siblings().removeClass('border');
		}, 1500);
	});
//无缝滚动

var img3oul = $('.img3 ul');
var img3oulhtml = img3oul.html();
var timeid = null;

//右键滚
$('.right2').click(function() {
	if (img3oul.css('left') == '0px') {
		img3oul.css('left', '-1176px');
	}
	img3oul.css('left', '+=196');

});
//左键滚
$('.left2').click(function() {
	if (img3oul.css('left') == '-1176px') {
		img3oul.css('left', '0px');
	}
	img3oul.css('left', '-=196');

});
//自己滚
timeid = setInterval(function() {
	if (img3oul.css('left') == '0px') {
		img3oul.css('left', '-1176px');
	}
	img3oul.css('left', '+=196');
}, 1000);
//左右键滚的时候不自己滚
$('.next').mouseover(function() {
	clearInterval(timeid);
}); $('.next').mouseout(function() {
	timeid = setInterval(function() {
		if (img3oul.css('left') == '0px') {
			img3oul.css('left', '-1176px');
		}
		img3oul.css('left', '+=196');
	}, 1000);
});




//弹窗

$('.dog ul li').click(function() {
	var j = $(this).index();

	$('.dog2 ul li').eq(j).show().siblings().hide();
	$('.close').show();
	$('.close').click(function() {

		$('.dog2 ul li').eq(j).hide();
		$('.close').hide();
	});
});


});
