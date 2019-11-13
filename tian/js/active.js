$(".magnifier-a").children("ul").children("li").on("mouseenter",function(){
    $(this).addClass("active").siblings().removeClass("active")
    $(".magnifier-c").children(".magnifier-c-1").css("display","none").eq($(this).index()).css("display","block");
})