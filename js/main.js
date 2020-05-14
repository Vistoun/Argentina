$(function () {
   
        $("#argentinaClick").css({"background-color" : "black"}).click(function () {
            $("#argentinaText").slideToggle("slow");
        });

    
        $("#historieClick").css({"background-color" : "black"}).click(function () {
            $("#historieText").slideToggle("slow");
        });
        $("#obyvatelstvoText").slideUp(1);
        $("#obyvatelstvoClick").css({"background-color" : "black"}).click(function () {
            $("#obyvatelstvoText").slideToggle("slow");
        });
        $("#geografieText").slideUp(1);
        $("#geografieClick").css({"background-color" : "black"}).click(function () {
            $("#geografieText").slideToggle("slow");
        });
})