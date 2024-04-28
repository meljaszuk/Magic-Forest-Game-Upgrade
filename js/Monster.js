 	function createHorizontalMonster(HorizontalMonsterX, HorizontalMonsterY, leftLimit, rightLimit, speedMonster) {
		/* let speedMonster = 2;
		let HorizontalMonsterX = 75;
		let HorizontalMonsterY = 275;
		let leftLimit = 40;
		let rightLimit = 700; */

		this.x = HorizontalMonsterX;
		this.y = HorizontalMonsterY;
		this.name = "Monster";
		this.monsterPic = new Image(); // Inicjalizacja obiektu Image

		// Ustawienie src obrazu
		this.monsterPic.src = "images/world_monster.png";

		console.log(this.monsterPic);


		this.moveHorizontally = function() {
		
			if (isGameActive) {
				this.x = this.x + speedMonster;
	
				if(this.x < rightLimit) {
					speedMonster *= -1;
				}
				if(this.x > leftLimit) {
					speedMonster *= -1;
				} 
			} else {
				this.x = -200;
			}
			
			} 



		this.draw = function() {
			drawBitmapCenteredMonster(this.monsterPic, this.x,this.y, 0);
		}
	}


	function createVerticalMonster(VerticalMonsterX,VerticalMonsterY,topLimit,bottomLimit,speedMonster) {
	/* 	let VerticalMonsterX = 275;
		let VerticalMonsterY = 175;
		let topLimit = 120;
		let bottomLimit = 500;
		let speedMonster = 2; */

		this.x = VerticalMonsterX;
		this.y = VerticalMonsterY;
		this.name = "Monster";
		this.monsterPic = new Image(); // Inicjalizacja obiektu Image

		// Ustawienie src obrazu
		this.monsterPic.src = "images/world_monster.png";

		console.log(this.monsterPic);

		
		this.moveVertically = function() {
		
		if (isGameActive) {
			this.y = this.y + speedMonster;

			if(this.y < topLimit) {
				speedMonster *= -1;
			}
			if(this.y > bottomLimit) {
				speedMonster *= -1;
			} 
		} else {
			this.y = -200;
		}
		
		} 

		this.draw = function() {
			drawBitmapCenteredMonster(this.monsterPic, this.x,this.y, 0);
		}
	}
