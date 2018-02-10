"use strict";

$(document).ready(function(){
    
    //const
    const iconDuration = 500;
    //vars
    
    //main
    iconEvent();
    paintingEvent();
    
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