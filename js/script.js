$(document).ready(function(){

  $("nav .dropdown-parent").mouseenter(function(){
    $(this).children(".dropdown").show();
    $(this).children("a").addClass("hover");
  });

  $("nav .dropdown-parent").mouseleave(function(){
    $(this).children(".dropdown").hide();
    $(this).children("a").removeClass("hover");
  });

  $(".menu-toggle").click(function(){
    $(".hamburger-menu").toggleClass("active");
    $(this).children("i").toggle();
  });


  $(".hamburger-menu .dropdown-parent").click(function(){
    $(this).children(".dropdown-click").slideToggle();
    $(this).children("a").toggleClass("hover");
  });

  $(".dropdown-click a, .dropdown a").mouseenter(function(){
    $(this).addClass("hover");
  });

  $(".dropdown-click a, .dropdown a").mouseleave(function(){
    $(this).removeClass("hover");
  });
});
