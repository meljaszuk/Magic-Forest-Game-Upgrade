let warriorPic = document.createElement("img");
let monsterPic = document.createElement("img")
let worldPics = [];

/* let soundsToLoad = 0; */
let picsToLoad = 0; // set automatically based on imageList in loadImages()

/* function countLoadedSounds() {
	if (soundsToLoad > 0) {
		soundsToLoad--;
	}
	console.log('sounds to load',soundsToLoad);
	
} */

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	console.log('pics to load',picsToLoad);
	if(picsToLoad === 0) {
		imageLoadingDoneSoStartGame();
	}
}


function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = "images/"+fileName;
}

/* function beginLoadingSounds(soundVar, fileName) {
	soundVar.onload = countLoadedSounds;
	soundVar.src = "sounds/"+fileName;
} */

function loadImageForWorldCode(worldCode, fileName) {
	worldPics[worldCode] = document.createElement("img");
	beginLoadingImage(worldPics[worldCode], fileName);
}




function loadImages() {
	let imageList = [
		{letName: warriorPic, theFile: "warrior.png"},
		{letName: monsterPic, theFile: "world_monster.png"},

		{worldType: TILE_GROUND, theFile: "world_ground.png"},
		{worldType: TILE_WALL, theFile: "world_wall.png"},
		{worldType: TILE_WALL2, theFile: "world_wall2.png"},
		{worldType: TILE_WALL3, theFile: "world_wall3.png"},
		{worldType: TILE_GOAL, theFile: "world_goal.png"},
		{worldType: TILE_KEY, theFile: "world_key.png"},
		{worldType: TILE_DOOR, theFile: "world_door.png"},
		{worldType: TILE_FIRE, theFile: "world_fire.png"},
		{worldType: TILE_GEM, theFile: "world_gem.png"}];

	picsToLoad = imageList.length;

	for(let i=0;i<imageList.length;i++) {
		if(imageList[i].letName != undefined) {
			beginLoadingImage(imageList[i].letName, imageList[i].theFile);
		} else {
			loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
		}
	}
}

/* function loadSounds() {
	let soundsList = [
		{soundName: gameOver, theFile: "game-over.mp3"},
		{soundName: levelUp, theFile: "level-up.mp3"},
		{soundName: magicName, theFile: "magic-gem.mp3"},
		{soundName: openDoors, theFile: "open-doors.mp3"},
		{soundName: takeKey, theFile: "take-key.mp3"},
	];
	soundsToLoad = soundsList.length;

	for(let i=0;i<soundsList.length;i++) {
		if(soundsList[i].soundName != undefined) {
			beginLoadingSounds(soundsList[i].soundName, soundsList[i].theFile);
		} 
	}

} */

function finishGame() {
    // Usunięcie obrazów z warriorPic i worldPics
    warriorPic.src = ''; // Usunięcie obrazka warriorPic
	soundGameOver.play();
    for (let worldCode in worldPics) {
        if (worldPics.hasOwnProperty(worldCode)) {
            worldPics[worldCode].src = ''; // Usunięcie obrazka z worldPics
        }
    }
	/* canvasContext.clearRect(0, 0, canvas.width, canvas.height); */
	colorRect(0,0, canvas.width,canvas.height, 'rgba(0, 0, 0, 0.5)');
	colorText("GAME OVER", canvas.width/2, canvas.height/2, 'white');
	isGameActive = false;
	console.log('GAME OVER')
}


function congratulate() {
    // Usunięcie obrazów z warriorPic i worldPics
    warriorPic.src = ''; // Usunięcie obrazka warriorPic
	
    for (let worldCode in worldPics) {
        if (worldPics.hasOwnProperty(worldCode)) {
            worldPics[worldCode].src = ''; // Usunięcie obrazka z worldPics
        }
    }
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	colorRect(0,0, canvas.width,canvas.height, 'green');
	colorText(`WOW! YOU DID IT! AND YOU HAVE ${numberOfGems} GEMS IN YOUR PACKET!`, canvas.width/3, canvas.height/2, 'white');
	isGameActive = false;
	console.log(`WOW! YOU DID IT! AND YOU HAVE ${numberOfGems} GEMS IN YOUR PACKET!`)
}