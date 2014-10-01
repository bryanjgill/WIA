/*
     Name: Bryan J. Gill, MCSE, MCSA, S+
     Date: 09/30/2014
     Class & Section:  WIA-1812
     Comments: "HTML5 Canvas Drawing"
*/

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
********************************************/
/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
*******************************************/
window.onload = function(){
	var canvas1 = document.getElementById("canvas1");
	var canvas2 = document.getElementById("canvas2");
	var canvas3 = document.getElementById("canvas3");
	var canvas4 = document.getElementById("canvas4");
	var canvas5 = document.getElementById("canvas5");
	var canvas6 = document.getElementById("canvas6");
	var canvas7 = document.getElementById("canvas7");

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/
//Draw Rectangle here
if(canvas1){
	var ctx = canvas1.getContext("2d");
	if(ctx){
		ctx.strokeStyle = "black";
		ctx.fillStyle = "blue";
		ctx.lineWidth = "5";
		ctx.fillRect(0, 0, 100, 50);
		ctx.strokeRect(0, 0,100, 50);
	}
}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/
//Draw Circle here
if (canvas2) {
	var ctx = canvas2.getContext("2d");
	if (ctx) {
		ctx.strokeStyle = "black";
		ctx.fillStyle = 'rgba(255, 0,0, 0.5)';
		ctx.lineWidth = 5;	
		var degrees = 360;
		var radians = (degrees / 180) * Math.PI;
		ctx.beginPath();
		ctx.arc(50, 50, 20, 0, radians);
		ctx.fill();
		ctx.stroke();
	}
}

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.
********************************************/
//Draw Star here
if (canvas3) {
	var ctx = canvas3.getContext("2d");
	if (ctx) {
		ctx.strokeStyle = "orange";
		ctx.fillStyle = "gold";
		ctx.lineWidth = 5;
		ctx.moveTo(100, 100);
		ctx.lineTo(300, 100);
		ctx.lineTo(125, 200);
		ctx.lineTo(200, 25);
		ctx.lineTo(275, 200);
		ctx.lineTo(100, 100);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}
}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.
********************************************/
//Draw Umbrella top here
if (canvas4) {
	var ctx = canvas4.getContext("2d");
	if (ctx) {
		ctx.lineJoin = "miter";
		ctx.miterLimit = "10";
		ctx.strokeStyle = "black";
		ctx.fillStyle = "blue";
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.moveTo(100,100);
		ctx.bezierCurveTo(100, 0, 300, 0, 300, 100);
		ctx.bezierCurveTo(300, 100, 275, 75, 250, 100);
		ctx.bezierCurveTo(250, 100, 225, 75, 200, 100);
		ctx.bezierCurveTo(200, 100, 175, 75, 150, 100);
		ctx.bezierCurveTo(150, 100, 125, 75, 100, 100);
		ctx.stroke();
		ctx.closePath();
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(200,100);
		ctx.quadraticCurveTo(200, 225, 180, 180);
		ctx.stroke();
	}
}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.
********************************************/
//Draw text here
if (canvas5) {
	var ctx = canvas5.getContext("2d");
	if (ctx) {
		var theString = "It's raining!";
		ctx.font = "48pt Marlett";
		ctx.fillStyle = "blue";
		ctx.strokeStyle = "gray";
		ctx.fillText(theString, 50, 100);
		ctx.strokeText(theString, 50, 200);
	}
}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.
********************************************/
//Draw images here
if (canvas6) {
	var ctx = canvas6.getContext("2d");
	if (ctx) {
		var srcImg = document.getElementById("img");
		ctx.drawImage(srcImg, 0, 0);
		ctx.drawImage(srcImg, 0, 1100, 1650, 544);
		ctx.drawImage(srcImg, 2535, 170, 175, 175, 0, 2000, 350, 350);
	}
}

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.
********************************************/
// Draw scene here
if (canvas7) {
		var ctx = canvas7.getContext("2d");
			if(ctx){
				ctx.fillStyle = "black";
				ctx.fillRect(0, 0, 400, 100);
			}
			var ctx = canvas7.getContext("2d");
			if(ctx){
				ctx.fillStyle = "blue";
				ctx.fillRect(0, 100, 400, 200);
			}
		var ctx = canvas7.getContext("2d");
		if (ctx) {
			ctx.lineJoin = "miter";
			ctx.miterLimit = "10";
			ctx.strokeStyle = "black";
			ctx.fillStyle = "black";
			ctx.lineWidth = 5;
			ctx.beginPath();
			ctx.moveTo(400,100);
			ctx.bezierCurveTo(400, 100, 375, 125, 350, 100);
			ctx.bezierCurveTo(350, 100, 325, 125, 300, 100);
			ctx.bezierCurveTo(300, 100, 275, 125, 250, 100);
			ctx.bezierCurveTo(250, 100, 225, 125, 200, 100);
			ctx.bezierCurveTo(200, 100, 175, 125, 150, 100);
			ctx.bezierCurveTo(150, 100, 125, 125, 100, 100);
			ctx.bezierCurveTo(100, 100, 75, 125, 50, 100);
			ctx.bezierCurveTo(50, 100, 25, 125, 0, 100);
			ctx.stroke();
			ctx.closePath();
			ctx.fill();
		}
		var ctx = canvas7.getContext("2d");
		if (ctx) {
			var theString = "Rectangle";
			ctx.font = "48pt Marlett";
			ctx.fillStyle = "white";
			ctx.strokeStyle = "white";
			ctx.fillText(theString, 25, 50);
		}
		var ctx = canvas7.getContext("2d");
		if (ctx) {
			var theString = "Beziers";
			ctx.font = "48pt Marlett";
			ctx.fillStyle = "red";
			ctx.strokeStyle = "red";
			ctx.fillText(theString, 150, 125);
		}
		var ctx = canvas7.getContext("2d");
		if (ctx) {
			var theString = "Rectangle";
			ctx.font = "48pt Marlett";
			ctx.fillStyle = "orange";
			ctx.strokeStyle = "orange";
			ctx.fillText(theString, 25, 200);
		}
		var ctx = canvas7.getContext("2d");
		if (ctx) {
			var theString = "Text";
			ctx.font = "48pt Marlett";
			ctx.fillStyle = "yellow";
			ctx.strokeStyle = "yellow";
			ctx.fillText(theString, 250, 300);
		}
	}
}
