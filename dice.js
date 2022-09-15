//generate random number for dice 1
var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "img/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


//generate random number for dice 2
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "img/" + randomDiceImage;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins &#128681"
    document.querySelector("h1").style.fontSize = "5rem"
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 wins &#128681"
    document.querySelector("h1").style.fontSize = "5rem"
}else{
    document.querySelector("h1").innerHTML = "Draw &#127987"
    document.querySelector("h1").style.fontSize = "5rem"
}
