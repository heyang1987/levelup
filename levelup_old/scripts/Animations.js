"use strict";
var speed = 1000;  // The speed of the animation.
/* A function that moves a spark from the input box to the register specified.
   The register must be character: a, b, c or d. */
function inputSparks(reg, callback){
   // Resets the positions of all the sparks.
   $("#spark1").css({"top":"421px","left":"510px"});
   $("#spark2").css({"top":"421px","left":"510px"});
   $("#spark3").css({"top":"421px","left":"510px"});
   $("#spark4").css({"top":"421px","left":"510px"});
   if(reg == "a")
   {
      // alert("Function is reached: " + reg);
      $("#spark1").css({"visibility": "visible"});
      $("#spark1").animate({left:"877px"},speed).animate({top:"307px"},speed).animate({left:"640px"},speed).animate({top:"215px"},speed,function()	  {$("#spark1").css({"visibility":"hidden"}), callback()});    
   }
   else if(reg == "b")
   {
      $("#spark2").css({"visibility": "visible"});
      $("#spark2").animate({left:"877px"},speed).animate({top:"307px"},speed).animate({left:"797px"},speed).animate({top:"215px"},speed,function(){$("#spark2").css({"visibility":"hidden"}), callback()});
   }
   else if(reg == "c")
   {
      $("#spark3").css({"visibility": "visible"});
      $("#spark3").animate({left:"877px"},speed).animate({top:"307px"},speed).animate({left:"953px"},speed).animate({top:"215px"},speed,function(){$("#spark3").css({"visibility":"hidden"}), callback()});    
   }
   else if(reg == "d")
   {
      $("#spark4").css({"visibility": "visible"}); 
      $("#spark4").animate({left:"877px"},speed).animate({top:"307px"},speed).animate({left:"1110px"},speed).animate({top:"215px"},speed,function(){$("#spark4").css({"visibility":"hidden"}), callback()}); 
   }
}
/* A function that moves a spark from the code area to the register specified, intended for literal values.
   The register must be character: a, b, c or d. */
function codeSparks(reg, callback){
   // Resets the positions of all the sparks.
   $("#spark5").css({"top":"60px","left":"510px"});
   $("#spark6").css({"top":"60px","left":"510px"});
   $("#spark7").css({"top":"60px","left":"510px"});
   $("#spark8").css({"top":"60px","left":"510px"});
   if(reg == "a")
   {
      //$("#spark5").css({"visibility": "visible"});
      $("#spark5").animate({left:"638px"},speed).animate({top:"90px"},speed,function(){$("#spark5").css({"visibility":"hidden"}), callback()});    
   }
   else if(reg == "b")
   {
      //$("#spark6").css({"visibility": "visible"});
      $("#spark6").animate({left:"797px"},speed).animate({top:"90px"},speed,function(){$("#spark6").css({"visibility":"hidden"}), callback()});    
   }
   else if(reg == "c")
   {
      //$("#spark7").css({"visibility": "visible"});
      $("#spark7").animate({left:"950px"},speed).animate({top:"90px"},speed,function(){$("#spark7").css({"visibility":"hidden"}), callback()});  
   }
   else if(reg == "d")
   {
      //$("#spark8").css({"visibility": "visible"});
      $("#spark8").animate({left:"1107svpx"},speed).animate({top:"90px"},speed,function(){$("#spark8").css({"visibility":"hidden"}), callback()});    
   }
}
/* A function that moves a spark from the register specified to the output area.
   The register must be character: a, b, c or d. */
function outputSparks(reg){
   // Resets the positions of all the sparks.
   $("#spark9").css({"top":"220px","left":"638px"});
   $("#spark10").css({"top":"220px","left":"797px"});
   $("#spark11").css({"top":"220px","left":"950px"});
   $("#spark12").css({"top":"220px","left":"1107px"});
   if(reg == "a")
   {
      $("#spark9").css({"visibility": "visible"});
      $("#spark9").animate({top:"257px"},speed).animate({left:"1033px"},speed).animate({top:"457px"},speed).animate({left:"510px"},speed,function(){$("#spark9").css({"visibility":"hidden"})}); 
   }
   else if(reg == "b")
   {
      $("#spark10").css({"visibility": "visible"});
      $("#spark10").animate({top:"257px"},speed).animate({left:"1033px"},speed).animate({top:"457px"},speed).animate({left:"510px"},speed,function(){$("#spark10").css({"visibility":"hidden"})}); 
   }
   else if(reg == "c")
   {
      $("#spark11").css({"visibility": "visible"});
      $("#spark11").animate({top:"257px"},speed).animate({left:"1033px"},speed).animate({top:"457px"},speed).animate({left:"510px"},speed,function(){$("#spark11").css({"visibility":"hidden"})});  
   }
   else if(reg == "d")
   {
      $("#spark12").css({"visibility": "visible"});
      $("#spark12").animate({top:"257px"},speed).animate({left:"1033px"},speed).animate({top:"457px"},speed).animate({left:"510px"},speed,function(){$("#spark12").css({"visibility":"hidden"})});  
   }
}
/** a function that serves to combine two spark animations, after they both leave the specified registers, comb1 and comb2. After the sparks have left the two registers, they combine in the middle and then finish heading to the reg destination. 
The parameters are all register labels; a, b, c or d. comb1 and comb2 are the ones to combine, and reg is the destination. */
function combineSparks(comb1, comb2, reg){
   // Resets the positions of all the sparks.
   $("#spark9").css({"top":"220px","left":"640px"});
   $("#spark10").css({"top":"220px","left":"797px"});
   $("#spark11").css({"top":"220px","left":"953px"});
   $("#spark12").css({"top":"220px","left":"1107px"});
   if((comb1 == "a") || (comb2 == "a"))
   {
      $("#spark9").css({"visibility": "visible"});
   }
   if((comb1 == "b") || (comb2 == "b"))
   {
      $("#spark10").css({"visibility": "visible"});
   }
   if((comb1 == "c") || (comb2 == "c"))
   {
      $("#spark11").css({"visibility": "visible"});
   }
   if((comb1 == "d") || (comb2 == "d"))
   {
      $("#spark12").css({"visibility": "visible"});
   }
   if(reg == "a")
   {
      $("#spark9").animate({top:"257px"},speed).animate({left:"640px"},speed).animate({top:"220px"},speed,function(){$("#spark9").css({"visibility":"hidden"})}); 
      $("#spark10").animate({top:"257px"},speed).animate({left:"640px"},speed).animate({top:"220px"},speed,function(){$("#spark10").css({"visibility":"hidden"})});
      $("#spark11").animate({top:"257px"},speed).animate({left:"640px"},speed).animate({top:"220px"},speed,function(){$("#spark11").css({"visibility":"hidden"})});
      $("#spark12").animate({top:"257px"},speed).animate({left:"640px"},speed).animate({top:"220px"},speed,function(){$("#spark12").css({"visibility":"hidden"})});
   }
   else if(reg == "b")
   {
      $("#spark9").animate({top:"257px"},speed).animate({left:"797px"},speed).animate({top:"220px"},speed,function(){$("#spark9").css({"visibility":"hidden"})}); 
      $("#spark10").animate({top:"257px"},speed).animate({left:"797px"},speed).animate({top:"220px"},speed,function(){$("#spark10").css({"visibility":"hidden"})});
      $("#spark11").animate({top:"257px"},speed).animate({left:"797px"},speed).animate({top:"220px"},speed,function(){$("#spark11").css({"visibility":"hidden"})});
      $("#spark12").animate({top:"257px"},speed).animate({left:"797px"},speed).animate({top:"220px"},speed,function(){$("#spark12").css({"visibility":"hidden"})});
   }
   else if(reg == "c")
   {
      $("#spark9").animate({top:"257px"},speed).animate({left:"953px"},speed).animate({top:"220px"},speed,function(){$("#spark9").css({"visibility":"hidden"})}); 
      $("#spark10").animate({top:"257px"},speed).animate({left:"953px"},speed).animate({top:"220px"},speed,function(){$("#spark10").css({"visibility":"hidden"})});
      $("#spark11").animate({top:"257px"},speed).animate({left:"953px"},speed).animate({top:"220px"},speed,function(){$("#spark11").css({"visibility":"hidden"})});
      $("#spark12").animate({top:"257px"},speed).animate({left:"953px"},speed).animate({top:"220px"},speed,function(){$("#spark12").css({"visibility":"hidden"})}); 
   }
   else if(reg == "d")
   {
      $("#spark9").animate({top:"257px"},speed).animate({left:"1107px"},speed).animate({top:"220px"},speed,function(){$("#spark9").css({"visibility":"hidden"})}); 
      $("#spark10").animate({top:"257px"},speed).animate({left:"1107px"},speed).animate({top:"220px"},speed,function(){$("#spark10").css({"visibility":"hidden"})});
      $("#spark11").animate({top:"257px"},speed).animate({left:"1107px"},speed).animate({top:"220px"},speed,function(){$("#spark11").css({"visibility":"hidden"})});
      $("#spark12").animate({top:"257px"},speed).animate({left:"1107px"},speed).animate({top:"220px"},speed,function(){$("#spark12").css({"visibility":"hidden"})}); 
   } 
}
