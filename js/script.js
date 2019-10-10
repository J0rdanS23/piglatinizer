$( "document" ).ready(function() {
    $("#button").click(function(){
    var vowels = ["a","e","i","o","u"];
    var input = $(".input").val();
    var word = input.toLowerCase();
    if (word[0] || "a" || "i" || "o" || "u"){
        let wordsVowel = word.slice(0,1);
        let restOfWord = word.slice(1,-1);
        $(".output").append("<p>"+restOfWord+wordsVowel+"ay</p>");
    }else{
        $(".output").append("<p>"+word+"ay</p>");
    }
    });
});

