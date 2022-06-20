
var adjective = ["Wie kreeg een boete voor tegen de richting in te rijden?", "Wie is het oudste?", "Waar staat Jerbo voor?"  ] 


 function generator() {
 document.getElementById("Vraag").innerHTML = adjective[Math.floor(Math.random() * adjective.length)] ;
 document.getElementById('myImage').src='fotos/koen green background.gif'
}   


