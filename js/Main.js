let canvas, canvasContext;
let blueWarrior = new warriorClass();
let verticalMonster = new createVerticalMonster(275,165,80,275,1);
let horizontalMonster = new createHorizontalMonster(575,375,575,725,1);
/* let verticalMonster;
let horizontalMonster;
let numberOfLevels =1; */

/* switch (true) {
	case (numberOfLevels === 2):
		verticalMonster = new createVerticalMonster(375,175,120,500,5);
		horizontalMonster = new createHorizontalMonster(375,275,40,700,5);
		break;
	case (numberOfLevels === 3):
		verticalMonster = new createVerticalMonster(275,175,120,500,30);
		horizontalMonster = new createHorizontalMonster(375,275,40,700,30);
		break;
	case (numberOfLevels === 1):
		verticalMonster = new createVerticalMonster(275,175,120,500,1);
		horizontalMonster = new createHorizontalMonster(375,275,40,700,1);
		break;

	default:
		break;
} */


let isGameActive = true;
const COLLISION_THRESHOLD = 40;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0,0, canvas.width,canvas.height, 'black');
	colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

	loadImages();


}

function imageLoadingDoneSoStartGame() {
	let framesPerSecond = 30;

	
	setInterval(updateAll, 1000/framesPerSecond);
	
	setupInput();

	loadLevel(levelOne);
}

function loadLevel(whichLevel) {
	worldGrid = whichLevel.slice();
	blueWarrior.reset(warriorPic, "Blue Storm");
}

function updateAll() {

	moveAll();
	drawAll();
}

function moveAll() {
	blueWarrior.move();
	verticalMonster.moveVertically();
	horizontalMonster.moveHorizontally();
}

function drawAll() {
	drawWorld();
	blueWarrior.draw();
	verticalMonster.draw();
	horizontalMonster.draw();
	
	if (isGameActive) {

	if ((Math.abs(blueWarrior.x - verticalMonster.x) < COLLISION_THRESHOLD
	&& Math.abs(blueWarrior.y - verticalMonster.y) < COLLISION_THRESHOLD) 
	|| (Math.abs(blueWarrior.x - horizontalMonster.x) < COLLISION_THRESHOLD) 
	&& Math.abs(blueWarrior.y - horizontalMonster.y) < COLLISION_THRESHOLD)	{
	  finishGame();
	}

	/* console.log(blueWarrior.x,verticalMonster.x,blueWarrior.y,verticalMonster.y) */
}
} 

