const WORLD_W = 50;
const WORLD_H = 50;
const WORLD_GAP = 2;
const WORLD_COLS = 16;
const WORLD_ROWS = 12;
let levelThree = [1, 8, 9, 1, 9, 8, 1, 9, 8, 1, 4, 0, 7, 1, 9, 8,
				  9, 0, 0, 8, 1, 0, 6, 0, 1, 9, 0, 0, 0, 7, 9, 1,
				  8, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 7, 1, 9,
				  9, 2, 0, 0, 5, 0, 0, 6, 0, 0, 0, 0, 0, 4, 1, 1,
				  8, 0, 0, 0, 1, 1, 1, 1, 0, 6, 1, 1, 1, 1, 1, 8,
				  1, 0, 0, 6, 1, 0, 1, 1, 7, 1, 1, 1, 7, 6, 6, 9,
				  9, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 3, 0, 0, 0, 1,
				  8, 0, 1, 5, 0, 0, 6, 1, 0, 0, 1, 1, 6, 6, 0, 8,
				  1, 0, 0, 4, 6, 0, 0, 1, 6, 0, 5, 0, 0, 0, 0, 9,
				  8, 0, 6, 1, 0, 7, 0, 0, 0, 0, 1, 1, 0, 6, 6, 1,
				  9, 1, 8, 8, 9, 8, 1, 9, 8, 1, 9, 1, 6, 6, 0, 8,
				  1, 8, 1, 9, 8, 1, 9, 8, 1, 9, 8, 1, 9, 8, 1, 9];
	
let levelTwo = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 7, 0, 5, 0, 6, 1, 4, 0, 0, 4, 0, 0, 0, 7, 1,
				1, 6, 0, 1, 0, 4, 1, 0, 0, 6, 6, 0, 1, 0, 3, 1,
				1, 2, 0, 1, 0, 0, 1, 6, 0, 6, 0, 0, 1, 0, 0, 1,
				1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 6, 1, 6, 0, 1,
				1, 0, 0, 5, 0, 0, 5, 0, 0, 5, 0, 0, 5, 0, 0, 1,
				1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1,
				1, 0, 4, 1, 0, 0, 1, 7, 7, 1, 0, 6, 1, 0, 6, 1,
				1, 0, 4, 1, 0, 0, 5, 7, 4, 1, 0, 0, 1, 0, 7, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	
let levelOne = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				0, 0, 0, 1, 7, 7, 7, 1, 0, 4, 0, 1, 0, 6, 0, 1,
				0, 2, 0, 1, 7, 7, 7, 1, 0, 6, 0, 1, 6, 4, 5, 1,
				0, 0, 0, 1, 7, 7, 7, 5, 0, 6, 0, 5, 0, 4, 0, 1,
				1, 1, 0, 1, 7, 7, 7, 1, 0, 0, 0, 1, 0, 0, 6, 1,
				1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
				1, 1, 0, 1, 1, 5, 1, 1, 0, 1, 1, 0, 0, 4, 3, 1,
				1, 1, 0, 0, 6, 0, 0, 6, 0, 1, 1, 6, 6, 0, 0, 1,
				1, 1, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 6, 0, 1,
				1, 1, 0, 0, 0, 6, 0, 0, 4, 1, 1, 6, 0, 6, 0, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 0, 0, 0, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	
let worldGrid = [];

const TILE_GROUND = 0;
const TILE_WALL = 1;
const TILE_PLAYERSTART = 2;
const TILE_GOAL = 3;
const TILE_KEY = 4;
const TILE_DOOR = 5;
const TILE_FIRE = 6;
const TILE_GEM = 7;
const TILE_WALL2 = 8;
const TILE_WALL3 = 9;

function getTileIndexAtPixelCoord(atX, atY) {
    let warriorWorldCol = Math.floor(atX / WORLD_W);
    let warriorWorldRow = Math.floor(atY / WORLD_H);
    let worldIndexUnderWarrior = rowColToArrayIndex(warriorWorldCol, warriorWorldRow);

    if (warriorWorldCol >= 0 && warriorWorldCol < WORLD_COLS &&
        warriorWorldRow >= 0 && warriorWorldRow < WORLD_ROWS) {
        return worldIndexUnderWarrior;
    } // end of valid col and row

    return undefined;
} // end of getTileIndexAtPixelCoord function

function rowColToArrayIndex(col, row) {
    return col + WORLD_COLS * row;
}

function tileTypeHasTransparency(checkTileType) {
    return (checkTileType == TILE_GOAL ||
        checkTileType == TILE_KEY ||
        checkTileType == TILE_FIRE ||
        checkTileType == TILE_DOOR);
}

function drawWorld() {
    let arrayIndex = 0;
    let drawTileX = 0;
    let drawTileY = 0;

    for (let eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
        for (let eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
            arrayIndex = rowColToArrayIndex(eachCol, eachRow);
            let tileKindHere = worldGrid[arrayIndex];
            let useImg = worldPics[tileKindHere];

            if (tileTypeHasTransparency(tileKindHere)) {
                canvasContext.drawImage(worldPics[TILE_GROUND], drawTileX, drawTileY);
            }
            canvasContext.drawImage(useImg, drawTileX, drawTileY);
            drawTileX += WORLD_W;
            arrayIndex++;
        } // end of for each col
		
        drawTileY += WORLD_H;
        drawTileX = 0;
    } // end of for each row
} // end of drawWorld function
