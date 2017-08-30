$(".icon-search").bind("click", function(){
   $(".input-search").toggleClass("active"); 
});
$(".icon-menu").bind("click", function(){
    $(".panel").toggleClass("menu-show");
    $(".menu").toggleClass("active");
});