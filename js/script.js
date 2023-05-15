$(window).scroll(function(){
    if( $(window).scrollTop() > 1000){
        $(".nav-scroll-bg").addClass('nav-scroll')
    }
})





// $('.top-scroll-btn').on("click",function(){
//     $("html,body").animate({scrollTop:0}, 1000)
// })

// $(window).scroll("scroll", function(){
//     var scroll = $ (this).scrollTop();
//     if(scroll >300){
//         $(".top-scroll-btn").fadeIn(100)
//     }else{
//         $(".top-scroll-btn").fadeOut(100)
//     }
// })
