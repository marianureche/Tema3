$(document).ready(onHtmlLoaded);
//document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
    var jokeUrl = "https://api.chucknorris.io/jokes/random";
    
    var jokeButton = document.getElementById("joke-button");
    jokeButton.addEventListener("click", function () {
       $.ajax({
           url: jokeUrl,
           method: 'GET',
           success: function(response) {
           console.log(response);
           displayJoke(response);
           }
       });
    });
}

function displayJoke(response) {
    console.log(response);
    var temp = document.getElementById("joke");
    temp.innerText = response.value ;
    
}
