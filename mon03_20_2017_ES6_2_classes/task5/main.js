'use strict';

class Round {
    constructor(x, y, radius) {
        this.pointX = x;
        this.pointY = y;
        this.radius = radius;
    }
    static getLengthСircle(radius) {
        return 2 * 3.14 * radius;
    }
    // Определите статический метод, 
    // который принимает координаты центра круг, 
    // его радиус и возвращает объект круга с заданными параметрами;
    static createNewRound(x, y, radius) {
        return new Round(x, y, radius);
    }

    getLengthСircle() {
        return 2 * 3.14 * this.radius;
    }

    // (x-x1)^2+(y-y1)^2<R^2, где x1,y1 координаты центра круга
    enterPoint(x, y) {
        let x1 = x - this.pointX;
        let y2 = y - this.pointY;
        if ((Math.pow(x1, 2) + Math.pow(y2, 2)) < Math.pow(this.radius, 2)) {
            return true;
        } else return false;
    }

    makeCopy() {
        return new Round(this.pointX, this.pointY, this.radius)
    }
    toString() {
        for (var key in this) {
            console.log(`The key: '${key}'. And it is value: '${this[key]}'`);
        }
    }
}


let round = new Round(3, 4, 15);
let copyRound = round.makeCopy();
let round2 = Round.createNewRound(5, 11, 18);