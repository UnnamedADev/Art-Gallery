"use strict";

$(document).ready(function(){
    
    //const
    const anmDuration = 500;
    const plsDuration = 1000;
    //vars
    
    //main
    paintingsEvents();
    closeEvent();
    
    //functions
    function paintingsEvents(){
        $(".painting").each(function(){
            
            $(this).click(function(){
                
                var myHref = $(this).attr("src");
                
                $(".preview img").attr("src", myHref);
                $(".preview").animate({
                    top: 0
                },anmDuration,"swing");
            });

        });
    }
    
    function closeEvent(){
        $(".preview").click(function(){
            
            var myPic = $(".preview img")[0];
            var trgt = $(event.target)[0];
            
            if(myPic != trgt){
                $(this).animate({
                    top: "-100%"
                },anmDuration,"swing");
            }
            
        });
    }
    
});