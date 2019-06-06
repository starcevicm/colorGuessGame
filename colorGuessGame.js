var squares = document.querySelectorAll(".square");
var currentColor = document.querySelector("#currentColor");
var solution;
var h1 = document.querySelector("h1");
var isCorrect = document.querySelector("#isCorrect");
var resetButton = document.querySelector("#resetButton");
var allDisplayed;
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var squareCount = 6;

function pickSolution(){
	return squares[Math.floor(Math.random()*squareCount)].style.backgroundColor; 
}

function pickColor(){
	var rgb = [];
	for(var i = 0; i < 3; i++){
		rgb[i] = Math.floor(Math.random()*256);
	}
	return "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
}



function randomize(){
	resetButton.textContent = "NEW COLORS";
	for(var i = 0; i < squareCount; i++){
		var color = pickColor();
		squares[i].style.backgroundColor = color ;
	}
	solution = pickSolution();
	currentColor.innerHTML = solution.toUpperCase();
}

function solutionCheck(){
	resetButton.textContent = "PLAY AGAIN";
	if(this.style.backgroundColor == solution){
		h1.style.backgroundColor = solution;
		isCorrect.textContent = "Well done";
		for(var i = 0; i < squareCount; i++){
			squares[i].classList.add("show");
			squares[i].classList.remove("hide");
			squares[i].style.backgroundColor = solution;
		}
	}
	else{
		this.classList.add("hide");
		isCorrect.textContent = "Try again";
	}
}





function hideExcess(){
	for(var i = squareCount; i < squares.length; i++){
		squares[i].removeEventListener("click", solutionCheck);
		squares[i].classList.add("hide");
	}
}

function reset(){
	for(var i = 0; i < squareCount; i++){
		squares[i].addEventListener("click", solutionCheck);
	}
	hideExcess();
	for(var i = 0; i < squareCount; i++){
		squares[i].classList.remove("show");
		squares[i].classList.remove("hide");
		squares[i].classList.add("show");
	}
	h1.style.backgroundColor = "#2b63a8";
	isCorrect.textContent = "";
	randomize();
}

function easy(){
	squareCount = 3;
	hardButton.classList.remove("activeButton");
	this.classList.add("activeButton");
	reset();
}

function hard(){
	squareCount = 6;
	easyButton.classList.remove("activeButton");
	this.classList.add("activeButton");
	reset();
}

resetButton.addEventListener("click", reset);
easyButton.addEventListener("click", easy);
hardButton.addEventListener("click", hard);

reset();