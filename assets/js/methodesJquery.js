$(document).ready(function(){

    //  .next()
    $("#btnNext").click(function(){
      $(".p").next().css({"color": "red", "border": "2px solid red"});
    });

    //  resetNext
    $("#resetNext").click(function(){
        $(".p2").css({"color": "lightgrey", "border": "2px solid lightgrey"});
      });

    //  .slideDown()
    $("#panel").hide();
    $("#btnSlideDown").click(function(){
      $("#panel").slideDown("slow");
    });

    //  resetSlideDown
    $("#resetSlideDown").click(function(){
      $("#panel").slideUp("fast");
    });

    //  .slideUp()
    $("#btnSlideUp").click(function(){
      $("#panel2").slideUp("slow");
    });

    //  resetSlideUp
    $("#resetSlideUp").click(function(){
        $("#panel2").slideDown("fast");
      });

    //  .slideToggle()
    $("#btnSlideToggle").click(function(){
      $("#panel3").slideToggle("slow");
    });

    //  .parent()
    $("#btnParent").click(function(){
        $("#parent").parent().css({"color": "red", "border": "2px solid red"});
    });

    //  resetParent
    $("#resetParent").click(function(){
        $("#parentLi").css({"color": "lightgrey", "border": "2px solid lightgrey"});
    });

    //  .html()
    $("#btnHtml").click(function(){
        $("#html").html("C'est une nouvelle paragraphe");
    });

    //  restHtml
    $("#resetHtml").click(function(){
        $("#html").html("C'est une paragraphe");
      });

    //  .fadeIn()
    $("#btnFadeIn").click(function(){
        $("#fadeIn").fadeIn(2000);
    });

    //  resetFadeIn
    $("#resetFadeIn").click(function(){
        $("#fadeIn").fadeOut("fast");
    });

    //  .fadeOut()
    $("#btnFadeOut").click(function(){
        $("#fadeOut").fadeOut(2000);
    });

    //  resetFadeOut
    $("#resetFadeOut").click(function(){
        $("#fadeOut").fadeIn("fast");
    });

    //  .fadeToggle()
    $("#btnFadeToggle").click(function(){
        $("#fadeToggle").fadeToggle(2000);
    });

    //  .fadeTo()
    $("#btnFadeTo").click(function(){
        $("#fadeTo").fadeTo("slow", 0.4);
    });

    //  resetFadeTo
    $("#resetFadeTo").click(function(){
        $("#fadeTo").fadeTo("fast", 1);
    });
});