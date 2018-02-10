"use strict";

$(document).ready(function(){
    
    //const
    const iconDuration = 500;
    const pntEffectDuration = 400;
    const pntAnimationDuration = 500;
    //vars
    
    //main
    iconEvent();
    paintingEvent();
    navEvent();
    
    //FUNCTIONS
    // # Add icon "next" and "previous" buttons animation events
    function iconEvent(){
        
        var actlRt = undefined;
        var isTaken = false; 
        
        $(".icon").mouseenter(function(){
            
            if(returnRotation($(this))!=0 && isTaken == false){
                actlRt = returnRotation($(this));
            }
            
            $(this).animate({ borderSpacing:-90}, {
                step: function(now,fx) {
                  $(this).css('-webkit-transform','rotate(0deg)');
                },
                duration: iconDuration
            },"swing");
            
        });
        
        $(".icon").mouseleave(function(){
            isTaken = true;
            $(this).animate({ borderSpacing:-90}, {
                step: function(now,fx) {
                  $(this).css('-webkit-transform','rotate('+actlRt+'deg)');
                },
                duration: iconDuration
            },"swing");
        });
    }
    // # Painting autoplay event, when mouse is over it
    function paintingEvent(){
        
        $(".activePainting").mouseenter(function(){
            $(this).trigger("play");
        });
        
        $(".activePainting").mouseleave(function(){
            $(this).trigger("pause");
        });
        
        $(".activePainting").click(function(){
            console.log("block it");
        });
    }
    // # Navigation buttons events
    function navEvent(){
        $(".icon").each(function(){
            $(this).click(function(){
                
                switch($(this).attr("mvDirection")){
                    // # Left side
                    case "left":
                        
                        var previousOne = $(".activePainting").prev();
                        
                        if(previousOne[0] == undefined){
                            break;
                        }
                        
                        $(".activePainting").animate({
                            marginLeft: "1000%"
                        },pntAnimationDuration,"swing", function(){
                            $(".activePainting").removeClass("activePainting");
                            
                            $(previousOne).css("display", "block");
                            $(previousOne).css("margin-left", "-1000%")
                            $(previousOne).animate({
                                marginLeft: 0
                            },pntAnimationDuration,"swing",function(){
                                $(previousOne).addClass("activePainting");
                                paintingEvent();
                            });
                        });
                        
                        break;
                    // # Right side
                    case "right":
                        
                        var nextOne = $(".activePainting").next();
                        
                        if(nextOne[0] == undefined){
                            break;
                        }
                        
                        $(".activePainting").animate({
                            marginLeft: "-1000%"
                        },pntAnimationDuration,"swing", function(){
                            $(".activePainting").removeClass("activePainting");
                            
                            $(nextOne).css("display", "block");
                            $(nextOne).css("margin-left", "1000%")
                            $(nextOne).animate({
                                marginLeft: 0
                            },pntAnimationDuration,"swing",function(){
                                $(nextOne).addClass("activePainting");
                                paintingEvent();
                            });
                        });
                        
                        break;
                    // # Default
                    default:
                        console.log("xd");
                }
                
                
            });
        });
    }
    //IMPORTANT FX
    // # Return a angle of actual transform rotation
    function returnRotation(obj){
            var actTrf = $(obj).css("transform");
            
            var matrixValues = actTrf.split("(")[1].split(")")[0].split(",");
            
            var scale = Math.sqrt(Math.sqrt(matrixValues[0])+Math.sqrt(matrixValues[1]));
            
            var sin = matrixValues[1]/scale;
            
            var angle = Math.round(Math.atan2(matrixValues[1], matrixValues[0]) * (180/Math.PI));
            
            return angle;
    }
});