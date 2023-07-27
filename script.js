var header = document.querySelector("h1");

function colorChanger(){
    var letter = "0123456789ABCDEF";
    var color = "#";
    for (var i=0; i<6; i++){
        color+=letter[Math.floor(Math.random()*16)];
    }
    return color;
}

function headerColor(){
    var inputColor = colorChanger();
    header.style.color = inputColor;
}

setInterval("headerColor()",500);