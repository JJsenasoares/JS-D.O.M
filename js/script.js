var titulo = document.getElementById("titulo")
var btn = document.querySelector("#btn")

function disparaAlerta(){
    alert("Jhuan")
    titulo.innerText = "Jhuan"
    
}

btn.addEventListener("click" , disparaAlerta)