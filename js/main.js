$("#show").click(function(){
	$("img").show();

});

$("#hide").click(function() {
	$("img").hide();
});

$("#toggle").click(function() {
	$("img").toggle();
});

$("#dim").click(function(){
	$("img").toggleClass("fade");

	 if(
	  $("img").css("opacity") == '0') {
        $("#status").text("Image off");
      } else {
        $("#status").text("Image on");
      }
});


$("img").hover(function(){
	$(this).attr("src", "img/ironman.jpg");
},
function(){
	$(this).attr("src", "img/captinmarvel.jpg");
}
);

$("#add").click(function() {
    $("#quiz").append("<li>Who Saves the Day?</li>","<li>Who Is Your Favorite?</li>")});





$("#done").click(function() {
	$("body").append("<div id='body'></div>")
});


 $("li").hover(function() {
        $(this).css({"font-size" : "40px", "color": "purple"})
      }, function() {
        $(this).css({"font-size" : "initial", "color": "initial"})
      });


