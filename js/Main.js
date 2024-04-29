let canvas, canvasContext;
let blueWarrior = new Warrior();
let verticalMonster = new Monster(275, 165, 80, 275, 4, 'vertical');
let horizontalMonster = new Monster(575, 375, 575, 725, 4, 'horizontal');

let isGameActive = true;
const COLLISION_THRESHOLD = 40;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorText("LOADING IMAGES", canvas.width / 2, canvas.height / 2, 'white');

    loadImages();
    loadSounds();
}

function imageLoadingDoneSoStartGame() {
    let framesPerSecond = 30;
    setInterval(updateAll, 1000 / framesPerSecond);
    setupInput();
    loadLevel(levelOne);
}

function loadLevel(whichLevel) {
    worldGrid = whichLevel.slice();
    blueWarrior.reset(warriorPic, "Blue Storm");
}

function updateAll() {
    if (isGameActive) {
        moveAll();
        drawAll();
    }
}

function moveAll() {
    if (isGameActive) {
        blueWarrior.move();
        verticalMonster.moveVertically();
        horizontalMonster.moveHorizontally();
    }
}

function drawAll() {
    if (isGameActive) {
        drawWorld();
        blueWarrior.draw();
        verticalMonster.draw();
        horizontalMonster.draw();

        if ((Math.abs(blueWarrior.x - verticalMonster.x) < COLLISION_THRESHOLD 
		&& Math.abs(blueWarrior.y - verticalMonster.y) < COLLISION_THRESHOLD) || 
		(Math.abs(blueWarrior.x - horizontalMonster.x) < COLLISION_THRESHOLD 
		&& Math.abs(blueWarrior.y - horizontalMonster.y) < COLLISION_THRESHOLD)) {
            endGame('lost');
        }
    }
}
