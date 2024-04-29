let warriorPic = document.createElement("img");
let monsterPic = document.createElement("img");
let worldPics = [];
let picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    if (picsToLoad === 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "images/" + fileName;
}

function loadImageForWorldCode(worldCode, fileName) {
    worldPics[worldCode] = document.createElement("img");
    beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages() {
    let imageList = [
        { letName: warriorPic, theFile: "warrior.png" },
        { letName: monsterPic, theFile: "world_monster.png" },
        { worldType: TILE_GROUND, theFile: "world_ground.png" },
        { worldType: TILE_WALL, theFile: "world_wall.png" },
        { worldType: TILE_WALL2, theFile: "world_wall2.png" },
        { worldType: TILE_WALL3, theFile: "world_wall3.png" },
        { worldType: TILE_GOAL, theFile: "world_goal.png" },
        { worldType: TILE_KEY, theFile: "world_key.png" },
        { worldType: TILE_DOOR, theFile: "world_door.png" },
        { worldType: TILE_FIRE, theFile: "world_fire.png" },
        { worldType: TILE_GEM, theFile: "world_gem.png" }
    ];

    picsToLoad = imageList.length;

    for (let i = 0; i < imageList.length; i++) {
        if (imageList[i].letName !== undefined) {
            beginLoadingImage(imageList[i].letName, imageList[i].theFile);
        } else {
            loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
        }
    }
}

function endGame(gameOutcome) {
    warriorPic.src = '';
    isGameActive = false;

    for (let worldCode in worldPics) {
        if (worldPics.hasOwnProperty(worldCode)) {
            worldPics[worldCode].src = '';
        }
    }

    switch (true) {
        case (gameOutcome === 'lost' && !isGameActive):
            soundGameOver.play();
            colorRect(0, 0, canvas.width, canvas.height, 'rgba(0, 0, 0, 0.5)');
            colorText("GAME OVER", canvas.width / 2, canvas.height / 2, 'white');
            console.log('GAME OVER');
            break;

        case (gameOutcome === 'won'):
            soundLevelUp.play();
            canvasContext.clearRect(0, 0, canvas.width, canvas.height);
            colorRect(0, 0, canvas.width, canvas.height, 'rgba(0, 0, 0, 0.5)');
            colorText(`WOW! YOU DID IT!`, canvas.width / 2, canvas.height / 2, 'white');
            console.log(`WOW! YOU DID IT!`);
            isGameActive = false;
            break;

        default:
            break;
    }
}

function loadSounds() {
    let soundData = [
        { name: 'soundOpenDoors', audioFile: 'sounds/open-doors.mp3' },
        { name: 'soundLevelUp', audioFile: 'sounds/level-up.mp3' },
        { name: 'soundMagicGem', audioFile: 'sounds/magic-gem.mp3' },
        { name: 'soundGameOver', audioFile: 'sounds/game-over.mp3' },
        { name: 'soundTakeKey', audioFile: 'sounds/take-key.mp3' }
    ];

    for (let i = 0; i < soundData.length; i++) {
        let name = soundData[i].name;
        window[name] = new Audio(soundData[i].audioFile);
        window[name].load();
    }
}
