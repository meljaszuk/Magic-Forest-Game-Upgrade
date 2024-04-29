class Monster {
    constructor(monsterX, monsterY, firstLimit, secondLimit, speedMonster, monsterType) {
        this.monsterPic = new Image();
        this.monsterPic.src = "images/world_monster.png";
        
        if (monsterType === 'horizontal') {
            this.x = monsterX;
            this.y = monsterY;
            this.name = "Monster";

            this.moveHorizontally = function() {
                if (isGameActive) {
                    this.x += speedMonster;

                    if (this.x < secondLimit) {
                        speedMonster *= -1;
                    }
                    if (this.x > firstLimit) {
                        speedMonster *= -1;
                    }
                } else {
                    this.x = -200;
                }
            };

            this.draw = function() {
                drawBitmapCenteredMonster(this.monsterPic, this.x, this.y, 0);
            };
        }

        if (monsterType === 'vertical') {
            this.x = monsterX;
            this.y = monsterY;
            this.name = "Monster";

            this.moveVertically = function() {
                if (isGameActive) {
                    this.y += speedMonster;

                    if (this.y < firstLimit) {
                        speedMonster *= -1;
                    }
                    if (this.y > secondLimit) {
                        speedMonster *= -1;
                    }
                } else {
                    this.y = -200;
                }
            };

            this.draw = function() {
                drawBitmapCenteredMonster(this.monsterPic, this.x, this.y, 0);
            };
        }
    }
}
