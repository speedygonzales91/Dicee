var randomNumber1 = Math.floor(Math.random() * 6 )+ 1;
var player1ImageName = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6 )+ 1;
var player2ImageName = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",player1ImageName);
document.querySelector(".img2").setAttribute("src",player2ImageName);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 won";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 won";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}