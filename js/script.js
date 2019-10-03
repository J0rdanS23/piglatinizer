$( "document" ).ready(function() {
    $("#button").click(function(){
    var word = $(".input").val();
    $(".output").append("<p>"+word+"</p>");
    });
});