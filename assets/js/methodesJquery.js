$(function () {

  // Exemple 1 .text()

  $("#btnChangeTexte").on("click", function () {

      $("#exemple1").text("Bravo! Vous avez changé mon texte.");
  });

  // Bouton reset exemple 1
  $("#reset1").on("click", function () {

      $("#exemple1").text("Changez mon texte !");
  });

  // Exemple 2 .css()

  $("#btnExemple2").on("click", function () {

      $("#exemple2").css({ "font-size": "35px", "color": "hsla(301, 53%, 71%, 1) 66%", "font-weight": "bold", "font-family": "Cormorant Garamond" });
  });

  // Bouton reset exemple 2

  $("#reset2").on("click", function () {

      $("#exemple2").css({ "font-size": "16px", "color": "black", "font-weight": "normal", "font-family": "Open Sans" });
  });


  //Exemple 3 .hide()
  $("#btnExemple3").on("click", function () {

      $("#exemple3").hide();
  });
  // Bouton reset exemple 3
  $("#reset3").on("click", function () {

      $("#exemple3").show();
  });



  //Exemple 4 .show()
  $("#btnExemple4").on("click", function () {

      $("#exemple4").show();
  });
  // Bouton reset exemple 3
  $("#reset4").on("click", function () {

      $("#exemple4").hide();
  });


  //Exemple 5 .remove()
  $("#btnExemple5").on("click", function () {

      $("#exemple5").remove();
  });
  // Bouton reset exemple 3
  $("#reset5").on("click", function () {

      $("#exemple5Reset").show();
  });


  //Exemple 6 .after()
  // Stocke la valeur initiale de l'élément pour le bouton reset
  var initialContentExemple6 = $("#exemple6").parent().html();

  $("#btnExemple6").on("click", function () {

      $("#exemple6").after('<div class="text-center pt-2 mt-2" id="resetAfter">Voici le contenu ajouté !</div>');
      $("#btnExemple6").prop("disabled", true);
  });
  // Bouton reset exemple 6
  $("#reset6").on("click", function () {

      $("#exemple6").parent().html(initialContentExemple6);
  });

  //Exemple 7 .prepend()
  // Stocke la valeur initiale de l'élément pour le bouton reset
  var initialContent7 = $("#exemple7").parent().html();

  $("#btnExemple7").on("click", function () {

      $("#exemple7").prepend("<span>Me voici juste avant maintenant </span>");
      $("#btnExemple7").prop("disabled", true);
  });
  // Bouton reset exemple 6
  $("#reset7").on("click", function () {

      $("#exemple7").parent().html(initialContent7);
  });

  //Exemple 8 .before()
  // Stocke la valeur initiale de l'élément pour le bouton reset
  var initialContent8 = $("#exemple8").parent().html();

  $("#btnExemple8").on("click", function () {

      $("#exemple8").before("<div class='text-center pt-4 mt-5 mb-2'>Me voici juste avant maintenant </div>");
      $("#btnExemple8").prop("disabled", true);
  });
  // Bouton reset exemple 6
  $("#reset8").on("click", function () {

      $("#exemple8").parent().html(initialContent8);
  });


  //Exemple 9 .replaceWith()
  // Stocke la valeur initiale de l'élément pour le bouton reset
  var initialContent9 = $("#exemple9").parent().html();

  $("#btnExemple9").on("click", function () {

      $("#exemple9").replaceWith('<div class="text-center pt-5 mt-4" id="exemple9">Me voici changé</div>');
  });
  // Bouton reset exemple 6
  $("#reset9").on("click", function () {

      $("#exemple9").parent().html(initialContent9);
  });


  //Exemple 10 .animate()
  // Stocke la valeur initiale de l'élément pour le bouton reset

  var initialContent10 = $("#exemple10").parent().html();
  $("#btnExemple10").on("click", function () {
      $("#exemple10").queue(function (next) {
          $("#exemple10").animate({ width: "200px" }, 1000);
          next();
      }).queue(function (next) {
          $("#exemple10").animate({ height: "150px" }, 1000);
          next();
      }).queue(function (next) {
          $("#exemple10").animate({ borderRadius: "70px" }, 1000);
          next();
      })
  });
  // Bouton reset exemple 10
  $("#reset10").on("click", function () {

      $("#exemple10").parent().html(initialContent10);
  });



  //  .next()
  $("#btnNext").click(function () {
      $(".p").next().css({ "color": "red", "border": "2px solid red" });
  });

  //  resetNext
  $("#resetNext").click(function () {
      $(".p2").css({ "color": "lightgrey", "border": "2px solid lightgrey" });
  });

  //  .slideDown()
  $("#panel").hide();
  $("#btnSlideDown").click(function () {
      $("#panel").slideDown("slow");
  });

  //  resetSlideDown
  $("#resetSlideDown").click(function () {
      $("#panel").slideUp("fast");
  });

  //  .slideUp()
  $("#btnSlideUp").click(function () {
      $("#panel2").slideUp("slow");
  });

  //  resetSlideUp
  $("#resetSlideUp").click(function () {
      $("#panel2").slideDown("fast");
  });

  //  .slideToggle()
  $("#btnSlideToggle").click(function () {
      $("#panel3").slideToggle("slow");
  });

  //  .parent()
  $("#btnParent").click(function () {
      $("#parent").parent().css({ "color": "red", "border": "2px solid red" });
  });

  //  resetParent
  $("#resetParent").click(function () {
      $("#parentLi").css({ "color": "lightgrey", "border": "2px solid lightgrey" });
  });

  //  .html()
  $("#btnHtml").click(function () {
      $("#html").html("Je suis un nouveau paragraphe !");
  });

  //  restHtml
  $("#resetHtml").click(function () {
      $("#html").html("Je suis un paragraphe");
  });

  //  .fadeIn()
  $("#btnFadeIn").click(function () {
      $("#fadeIn").fadeIn(2000);
  });

  //  resetFadeIn
  $("#resetFadeIn").click(function () {
      $("#fadeIn").fadeOut("fast");
  });

  //  .fadeOut()
  $("#btnFadeOut").click(function () {
      $("#fadeOut").fadeOut(2000);
  });

  //  resetFadeOut
  $("#resetFadeOut").click(function () {
      $("#fadeOut").fadeIn("fast");
  });

  //  .fadeToggle()
  $("#btnFadeToggle").click(function () {
      $("#fadeToggle").fadeToggle(2000);
  });

  //  .fadeTo()
  $("#btnFadeTo").click(function () {
      $("#fadeTo").fadeTo("slow", 0.4);
  });

  //  resetFadeTo
  $("#resetFadeTo").click(function () {
      $("#fadeTo").fadeTo("fast", 1);
  });


});
