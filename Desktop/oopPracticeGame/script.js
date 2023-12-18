function player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
};

player.prototype.gainXp = function (xp) {
    this.points += xp;

    if (this.points >= 10) {
        this.lvl++;
        this.points -=10;
    }
    console.log(this.describe());

};

player.prototype.describe = function () {
    return `${this.name} is level ${this.lvl} with ${this.points} experience points`

};

const player1 = new Player ('Bob');
const player2 = new Player ('Alice');
