var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	//choose colors and picked color
	reset();
}

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected")
			modeButtons[1].classList.remove("selected")
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
	//add clicklisteners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked sqaure
			var clickedColor = this.style.backgroundColor;
			//compare color to picked color
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//Changes reset button to New Colors
	resetButton.textContent = "New Colors";
	//change colors of array
	for (var i = 0; i < squares.length; i++) {
	if (colors[i]) {
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	} else {
		squares[i].style.display = "none";
	}
	//add initial colors to squares
	}
	h1.style.backgroundColor = "steelblue";
	//removes Correct message
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
	reset();
});

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	//change each color to match given colors
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 
}

function generateRandomColors(num) {
	//make an array
	var arr = []
	//add num random colors to array
	for (var i = 0; i < num; i++) {
	 	//get random color and push into arr
	 	arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a red from  0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}