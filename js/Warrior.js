//CLEAN CODE!!!!!!!!!!!!!
let soundOpenDoors = new Audio('sounds/open-doors.mp3');
let soundLevelUp = new Audio('sounds/level-up.mp3');
let soundMagicGem = new Audio('sounds/magic-gem.mp3');
let soundGameOver = new Audio('sounds/game-over.mp3');
let soundTakeKey = new Audio('sounds/take-key.mp3');
soundOpenDoors.load();
soundLevelUp.load();
soundMagicGem.load();
soundGameOver.load();
soundTakeKey.load();



const PLAYER_MOVE_SPEED = 8.0;
let numberOfGems;
/* let numberOfLevels=document.getElementById("countLevels").value;
console.log(numberOfLevels) */

function warriorClass() {
	
	this.x = 75;
	this.y = 75;
	this.myWarriorPic; // which picture to use
	console.log(this.myWarriorPic);
	this.name = "dUntitle Warrior";
	this.keysHeld = 0;
	this.gemsHeld = 0;
	this.levels = 1;
	
	this.keyHeld_North = false;
	this.keyHeld_South = false;
	this.keyHeld_West = false;
	this.keyHeld_East = false;

	this.controlKeyUp;
	this.controlKeyRight;
	this.controlKeyDown;
	this.controlKeyLeft;

	this.setupInput = function(upKey, rightKey, downKey, leftKey) {
		this.controlKeyUp = upKey;
		this.controlKeyRight = rightKey;
		this.controlKeyDown = downKey;
		this.controlKeyLeft = leftKey;
	}

	this.reset = function(whichImage, warriorName) {
		this.name = warriorName;
		this.myWarriorPic = whichImage;
		console.log(this.myWarriorPic);
		this.keysHeld = 0;
		this.updateKeyReadout();
		numberOfGems = this.gems;
		this.updateGemsReadout();
		this.updateLevelsReadout();
		

		for(let eachRow=0;eachRow<WORLD_ROWS;eachRow++) {
			for(let eachCol=0;eachCol<WORLD_COLS;eachCol++) {
				let arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
				if(worldGrid[arrayIndex] == TILE_PLAYERSTART) {
					worldGrid[arrayIndex] = TILE_GROUND;
					this.x = eachCol * WORLD_W + WORLD_W/2;
					/* this.y = eachRow * WORLD_H + WORLD_H/2; */
					return;
				} // end of player start if
			} // end of col for
		} // end of row for
		console.log("NO PLAYER START FOUND!");
	} // end of warriorReset func

	this.updateKeyReadout = function() {
		document.getElementById("countKeys").innerHTML = "Keys: " + this.keysHeld;
	}

	this.updateGemsReadout = function() {
		document.getElementById("countGems").innerHTML = "Gems: " + this.gemsHeld;
	}

	this.updateLevelsReadout = function() {
	
			document.getElementById("countLevels").innerHTML = "Level: " + this.levels;
			
			/* numberOfLevels = this.levels
			console.log(numberOfLevels) */
	}

	this.move = function() {
		let nextX = this.x;
		let nextY = this.y;
	
		if(this.keyHeld_North) {
			nextY -= PLAYER_MOVE_SPEED;
		}
		if(this.keyHeld_East) {
			nextX += PLAYER_MOVE_SPEED;
		}
		if(this.keyHeld_South) {
			nextY += PLAYER_MOVE_SPEED;
		}
		if(this.keyHeld_West) {
			nextX -= PLAYER_MOVE_SPEED;
		}

		let walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
		let walkIntoTileType = TILE_WALL;

		if(walkIntoTileIndex != undefined) {
			walkIntoTileType = worldGrid[walkIntoTileIndex];
		}

		switch(walkIntoTileType) {
			case TILE_GROUND:
				this.x = nextX;
				this.y = nextY;
				break;
			case TILE_GOAL:
				console.log(this.name + " WINS!");
				this.levels++;
				soundLevelUp.play();
				console.log(this.levels)
				/* numberOfLevels++; */
				if (this.levels < 4 ) {
				  this.updateLevelsReadout();
				}

				if (this.levels === 2) {
					loadLevel(levelTwo);
					verticalMonster = new createVerticalMonster(575,125,125,475,1);
					horizontalMonster = new createHorizontalMonster(375,125,375,725,1);
				} else if (this.levels === 3){
					loadLevel(levelThree);
					verticalMonster = new createVerticalMonster(275,375,275,475,1);
					horizontalMonster = new createHorizontalMonster(275,175,275,675,1);
				} else if (this.levels === 4){
					congratulate();
				};
				break;
			case TILE_FIRE:
				
				finishGame();
				isGameActive = false;
				break;
			case TILE_DOOR:
				if(this.keysHeld > 0) {
					this.keysHeld--; // one less key
					soundOpenDoors.play();
					this.updateKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_GROUND;
				}
				break;
			case TILE_KEY:
				this.keysHeld++; // one more key
				soundTakeKey.play();
				this.updateKeyReadout();
				worldGrid[walkIntoTileIndex] = TILE_GROUND;
				break;
			case TILE_GEM:
				this.gemsHeld++; // one more key
				soundMagicGem.play();
				this.updateGemsReadout();
				worldGrid[walkIntoTileIndex] = TILE_GROUND;
				break;
			case TILE_WALL:
			default:
				break;
		}
	}


	this.draw = function() {
		drawBitmapCenteredWithRotation(this.myWarriorPic, this.x,this.y, 0);
	}
/* 	numberOfLevels = this.levels;
			console.log("levs",numberOfLevels); */
}


