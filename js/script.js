$(document).ready(function(){

  $("nav .dropdown-parent").mouseenter(function(){
    $(this).children(".dropdown").css("display", "block");
    $(this).children("a").css("color", "black");
  });

  $("nav .dropdown-parent").mouseleave(function(){
    $(this).children(".dropdown").css("display", "none");
    $(this).children("a").css("color", "#555");
  });

  $(".fa-bars").click(function(){
    $(".hamburger-menu").addClass("active");

  });

  $(".fa-times").click(function(){
    $(".hamburger-menu").removeClass("active");

  });

  var active = false
    $(".hamburger-menu .dropdown-parent").click(function(){
      if (active) {
        $(this).children(".dropdown-click").slideUp();
        $(this).children("a").css("color", "#555");
        active = false;
      }
      else {
      $(this).children(".dropdown-click").slideDown();
      $(this).children("a").css("color", "black");
      active = true;
      }
    });

});
