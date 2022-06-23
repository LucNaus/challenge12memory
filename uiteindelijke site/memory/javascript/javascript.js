
var adjective = ["Hebben Jeremy en Luc bij elkaar in de klas gezeten?" , "Kende Joris en Jeremy elkaar al voordat ze op de opleiding kwamen?" , "Houd Luc van chips?" , "Kan Youri goed auto rijden?" , "hoelang heeft dennis zijn snor al niet geschoren?" , "welk broodje eet yorrick het liefste?"  , "Heeft Jeremy bij Youri op school gezeten vroeger?" , "Hoe heet de hond van merlijn?" , "Hoe heet de hond van youri?" , "Hoe heet de hond van Joris?" , "Wie is papa?" , "Wat is de bijnaam van Jeremy" , "hoe groot is luc?" , "hoeveel mensen zitten er in onze vistabenderniet?" , "wat is het favoriete liedje van Jeremy?" , "frisse morgen in …….(ook weer effe goed nadenken)"   ] 


 function generator() {
 document.getElementById("Vraag").innerHTML = adjective[Math.floor(Math.random() * adjective.length)] ;

 var image = document.getElementById("image");
 var currentPos = 0;
 var images = ["fotos/koen green background.gif", "fotos/koen green background.jpg", ]

 function volgendefoto() {
     if (++currentPos >= images.length)
         currentPos = 0;

     image.src = images[currentPos];
 }

 setInterval(volgendefoto, 3000);

}   


