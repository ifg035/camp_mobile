$(function(){
    //nav gnb
    $(".gnb li").mouseenter(function(){
        $(this).children(".lnb").stop().slideToggle();
    })
    $(".gnb li").mouseleave(function(){
        $(this).children(".lnb").stop().slideToggle();
    })



    let isMobile =screen.availWidth >300 && screen.availWidth <= 393;
    let isClicked = true;
    $("#navi-btn").on("click",function(){
        if(isMobile){
            //눌렀을떄 =를 x로, 그러면서 nav를 보여주고
            //한번 더 클릭했을때 :x를 =로 바꾸고,nav 감추기
            if(isClicked){
                $("#navi-btn span").text("close");
                $(".navi").css("display","block");
                isClicked = false;
            } else{
                $("#navi-btn span").text("menu");
                $(".navi").css("display","none");
                isClicked = true;
            }
        }
    })
})