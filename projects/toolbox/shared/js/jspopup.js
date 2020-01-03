/****** Javascript to open a pop up window in a web page using Jquery */
$(document).ready(function() {    
    var pagewidth = document.documentElement.clientWidth * 0.83;
  
    $('.jspopupbt').click(function (e) {  
        //Cancel the link behavior  
        e.preventDefault();
        var src=$(e.target).attr("href");
        jspopup(1070,780,src);
    }); 
    // This for the open quiz in new window. don't use the link in the href 
    $('.jspopupquiz').click(function (e) {  
        //Cancel the link behavior  
        e.preventDefault();
        var src='quiz/quiz0.htm';
        jspopup(1070,700,src);
    });  
    
    // Added by Tony 
    $('.jspopuplink').click(function (e) {  
        //Cancel the link behavior  
        e.preventDefault();
        var src=$(e.target).attr("href");
        jspopup(pagewidth,650,src);
    });         
      
           
      //if close button is clicked  
    $('.jspopupclose').click(function (e) {  
        //Cancel the link behavior  
        e.preventDefault();  
        $('#mask, #jspopup').hide();  
    }); 
});  
  function jspopup(popW,popH,src)
  {
  		
  		//Get the screen height and width  
        var maskHeight = Math.max($(document).height(),$(window).height(),popH);
        var maskWidth = Math.max($(document).width(),$(window).width(),popW);
        
        //Set height and width to mask to fill up the whole screen  
        $('#mask').css({'top':0,'left':0,'width':maskWidth,'height':maskHeight});  
          
        //transition effect       
        $('#mask').fadeIn(1000);      
        $('#mask').fadeTo("slow",0.8);    
      
        //Get the window height and width  
        var winH = $(window).height();  
        var winW = $(window).width();
        
        $("#jspopup").height(popH);
        $("#jspopup").width(popW);
        
        $("#popupcontent").attr("src",src);
        $("#popupcontent").height(popH-21);
        
        $("#jspopup").css('top',  Math.max(winH/2-$("#jspopup").height()/2,0)+$(document).scrollTop());  
        $("#jspopup").css('left', Math.max(winW/2-$("#jspopup").width()/2,0)+$(document).scrollLeft());  
      
        //transition effect  
        $("#jspopup").fadeIn(2000);
        //$("#jspopup").show();
        $('#jspopup').fadeTo("fast",1.0);       
      
    }