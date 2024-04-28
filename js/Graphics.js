//PLACE WARRIOR
function drawBitmapCenteredWithRotation(useBitmap, atX,atY) {
	canvasContext.save();
	canvasContext.translate(atX, atY); //initial warrior location
	/* canvasContext.rotate(withAng); */
	canvasContext.drawImage(useBitmap, -useBitmap.width/2, -useBitmap.height/2); 
	canvasContext.restore();
}

function drawBitmapCenteredMonster(useBitmap, atXMonster,atYMonster) {
	canvasContext.save();
	canvasContext.translate(atXMonster, atYMonster); //initial warrior location
	/* canvasContext.rotate(withAng); */
	canvasContext.drawImage(useBitmap, -useBitmap.width/2, -useBitmap.height/2); 
	canvasContext.restore();
}


//DRAW WORLD
function colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
}

/* function colorCircle(centerX,centerY, radius, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX,centerY, 10, 0,Math.PI*2, true);
	canvasContext.fill();
} */

//PRINT TEXT
function colorText(showWords, textX,textY, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillText(showWords, textX, textY);
}

