var colors = [];
var wrongColor = document.querySelector("body.backgroundcolor");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var resetGame = document.querySelector("#resetGame");

console.log(resetGame.value);


function getRandomColors(){
	var rColors = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
	return rColors;
}

function getPickedColor(colors) {
	var rPicked = colors[Math.floor(Math.random() * 6)];
	return rPicked;
}


//if (resetGame.value == false) {
    
	console.log("teste");
	for (var i = 0; i < 6; i++) {
        colors[i] = getRandomColors();
    }

    var pickedColor = getPickedColor(colors);

    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        // add initial colors to squares
        squares[i].style.background = colors[i];

        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked squares
            var clickedColor = this.style.background;
            //compare color to pickedColor
            if (clickedColor == pickedColor) {
                message.textContent = "Correct";
                for (var i = 0; i < squares.length; i++) {
                    squares[i].style.background = clickedColor;
                    colorDisplay.style.color = clickedColor;
                }
            } else {
                this.style.background = wrongColor;
                message.textContent = "try again";
            }
        });
    }
//}