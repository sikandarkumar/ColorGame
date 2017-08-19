var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;

var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");

var easyButton = document.querySelector("#easyBtn");
var hardButton= document.querySelector("#hardBtn");

easyButton.addEventListener("click",function(){
	hardButton.classList.remove("selected");
	this.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});

hardButton.addEventListener("click",function(){
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
	}
});

resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}

	h1.style.background="steelblue";
});


for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
}

for(var i=0;i<squares.length;i++)
{
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		if(clickedColor == pickedColor){
			messageDisplay.textContent="Correct";
			changeColors(clickedColor);
			h1.style.background=pickedColor;
			resetButton.textContent="PLAY AGAIN?";
		}
		else{
			this.style.background="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}


function changeColors(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}


function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];

	for(var i=0;i<num;i++){
		//get random colors
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	 //pick a random no from 0 - 255 for "red"
	 var r = Math.floor(Math.random()*256);
	 //pick a random no from 0 - 255 for "green"
	 var g = Math.floor(Math.random()*256);
	 //pick a random no from 0 - 255 for "blue"
	 var b = Math.floor(Math.random()*256);
	 "rgb(255, 255, 255)"
	 return "rgb("+r+", "+g+", "+b+")";
}