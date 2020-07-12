$(document).ready(function(){   //When page loads

    //Hide name and slogan
    $("#name").hide();       
    $("#slogan").hide();   
    $("#arrow-down").hide(); 
    $("#arrow-top").hide();   
      
    //Slide down name and fade in slogan
    $("#name").slideDown(1500);             
    $("#slogan").fadeIn(2500); 
    $("#arrow-down").slideDown(1500);              
});
     