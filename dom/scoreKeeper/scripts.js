
var playerOne = document.querySelector("#one");
var playerTwo = document.querySelector("#two");
var reset = document.querySelector("#reset");
var to = document.getElementById("to");
var h1 = document.querySelector("h1");
var h3 = document.querySelector("h3");
var p1 = 0;
var p2 = 0;

//If input is changed the "playing to:" will change as well
to.addEventListener("input", function(){
    h3.textContent = (`Playing to: ${to.value}`);
});

//If player one is clicked, it will increment the player score and show in HTMl
playerOne.addEventListener("click", function () {
    if (p1 < to.value && p2 < to.value) {
        p1++;       
        h1.textContent = (`${p1} to ${p2}`);
    }
});

//If player one is clicked, it will increment the player score and show in HTMl
playerTwo.addEventListener("click", function () {
    if (p1 < to.value && p2 < to.value){
        p2++;
        console.log(p1);
        h1.textContent = (`${p1} to ${p2}`);
    }
});

//Will reset evrything
reset.addEventListener("click", function () {
    p1 = 0;
    p2 = 0;
    h1.textContent = (`${p1} to ${p2}`);
    to.value = 5;
    h3.textContent = (`Playing to: ${to.value}`);
});


//*** Better Solucion from the tutor */

// var p1Button = document.querySelector("#p1");
// var p2Button = document.getElementById("p2");
// var resetButton = document.getElementById("reset");
// var p1Display = document.querySelector("#p1Display");
// var p2Display = document.querySelector("#p2Display");
// var numInput = document.querySelector("input");
// var winningScoreDisplay = document.querySelector("p span");
// var p1Score = 0;
// var p2Score = 0;
// var gameOver = false;
// var winningScore = 5;

// p1Button.addEventListener("click", function(){
// 	if(!gameOver){
// 		p1Score++;
// 		if(p1Score === winningScore){
// 			p1Display.classList.add("winner");
// 			gameOver = true;
// 		}
// 		p1Display.textContent = p1Score;
// 	}
// });

// p2Button.addEventListener("click", function(){
// 	if(!gameOver){
// 		p2Score++;
// 		if(p2Score === winningScore){
// 			p2Display.classList.add("winner");
// 			gameOver = true;
// 		}
// 		p2Display.textContent = p2Score;
// 	}
// });

// resetButton.addEventListener("click", function(){
// 	reset();
// });

// function reset(){
// 	p1Score = 0;
// 	p2Score = 0;
// 	p1Display.textContent = 0;
// 	p2Display.textContent = 0;
// 	p1Display.classList.remove("winner");
// 	p2Display.classList.remove("winner");
// 	gameOver = false;
// }

// numInput.addEventListener("change", function(){
// 	winningScoreDisplay.textContent = this.value;
// 	winningScore = Number(this.value);
// 	reset();
// });


