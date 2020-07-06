$(document).ready(function(){
  $(".dropdown-parent").mouseenter(function(){
    $(this).children(".dropdown").css("display", "block");
    $(this).children("a").css("color", "black");
  });
  $(".dropdown-parent").mouseleave(function(){
    $(this).children(".dropdown").css("display", "none");
    $(this).children("a").css("color", "#555");
  });


});
