"use strict";

$(document).ready(function(){
    
    //const
    const anmDuration = 400;
    const plsDuration = 1000;
    const scrllDuration = 1000;
    //vars
    
    //main
    paintingsEvents();
    closeEvent();
    scrollTopEvent();
    
    //functions
    function paintingsEvents(){
        $(".painting").each(function(){
            
            $(this).click(function(){
                
                var myHref = $(this).attr("src");
                
                $(".preview img").attr("src", myHref);
                
                $(".preview").animate({
                    top: 0
                },anmDuration,"swing",function(){
                    console.log("xd");
                    $(".preview img").fadeIn(anmDuration/2);
                });
            });

        });
    }
    
    function closeEvent(){
        $(".preview").click(function(){
            
            var myPic = $(".preview img")[0];
            var trgt = $(event.target)[0];
            
            if(myPic != trgt){
                $(".preview img").fadeOut(anmDuration/2, function(){
                    $(".preview").animate({
                        top: "-100%"
                    },anmDuration,"swing");
                });
            }
            
        });
    }
    
    function scrollTopEvent(){
        $(".scrollBack").click(function(){
            $("html").animate({
                scrollTop: 0
            },scrllDuration,"swing");
        });
    }
});