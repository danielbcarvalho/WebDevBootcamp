var num = 6;
var colors = getRandomColors(num);
var pickedColor = getPickedColor();
var wrongColor = document.querySelector("body.backgroundcolor");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var resetGame = document.querySelector("#resetGame");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

hard.classList.add("on");

easy.addEventListener("click", function(){
    easy.classList.add("on");
    hard.classList.remove("on");
    num = 3;
    for (let index = 3; index < 6; index++){
        squares[index].style.background = "#232323";       
    }
    reset();
    console.log(easy.className);
});

hard.addEventListener("click", function(){
    hard.classList.add("on");
    easy.classList.remove("on");
    num = 6;
    reset();
    console.log(hard.className);
});

resetGame.addEventListener("click", reset);

colorDisplay.textContent = pickedColor;
console.log(squares.length);
for (var i = 0; i < num; i++) {
    console.log(i);
    // add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked squares
        var clickedColor = this.style.background;

        //compare color to pickedColor
        if (clickedColor == pickedColor) {
            message.textContent = "Correct";
            resetGame.textContent = "Play Again?";
            for (var i = 0; i < num; i++) {
                squares[i].style.background = clickedColor;
                colorDisplay.style.color = clickedColor;
            }
        } else {
            this.style.background = wrongColor;
            message.textContent = "try again";
        }
    });
}

function getRandomColors(num) {
    var arr = [];
    for (var i=0; i<num; i++){
        arr[i] = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
    return arr;
}

function getPickedColor() {
    var rPicked = Math.floor(Math.random() * num);
    return colors[rPicked];
}

function reset() {
    resetGame.textContent = "New Colors";

    colors = getRandomColors(num);
    
    pickedColor = getPickedColor();

    colorDisplay.textContent = pickedColor;
    
    for (var i = 0; i < num; i++) {
        // add initial colors to squares
        squares[i].style.background = colors[i];
    }
    //location.reload();
}