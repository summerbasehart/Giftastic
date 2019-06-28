$( document ).ready(function() {
    console.log( "ready!" );
    var characters = ["Bones", "Spock", "Kirk", "Uhura", "Chekov", "Sulu", "Scotty", "Chapel", "Rand", "Gaila"]
for (var i = 0; i < characters.length; i++) {
    var button = $("<button>")
    button.addClass("gif")
    button.text(characters[i])
    $('#buttons').append(button)
}
    function getGifs() {
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=6cwDdCnBsu7hiNOyheNhToCQiQTgei7r&limit=5");
        xhr.done(function (data) { 
            console.log(data)
        });
    }
    getGifs().append('#gifDiv')
});



//giphy api = 6cwDdCnBsu7hiNOyheNhToCQiQTgei7r