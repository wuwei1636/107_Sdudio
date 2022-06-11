$(function(){
    $(".image_normal").click(function(){
        var large_image = '<img src=' + $(this).attr("src") + '></imag>';
        console.log(large_image)
        $('.image_large').html($(large_image).css({
            display:"block",
            height:'50%',
            width:'50%',
            position:"absolute",
            left:"50%",
            top:"50%",
            transform:"translate(-50%,-50%)",

        },500));
        $('.image_large').css("display","block");
    });
    $('.image_large').click(function(){
        $(this).css("display","none");
    })
});