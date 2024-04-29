function drawBitmapCenteredWithRotation(useBitmap, atX, atY) {
    canvasContext.save();
    canvasContext.translate(atX, atY); // Initial warrior location
    canvasContext.drawImage(useBitmap, -useBitmap.width / 2, -useBitmap.height / 2);
    canvasContext.restore();
}

function drawBitmapCenteredMonster(useBitmap, atXMonster, atYMonster) {
    canvasContext.save();
    canvasContext.translate(atXMonster, atYMonster); // Initial warrior location
    canvasContext.drawImage(useBitmap, -useBitmap.width / 2, -useBitmap.height / 2);
    canvasContext.restore();
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorText(showWords, textX, textY, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(showWords, textX, textY);
}
