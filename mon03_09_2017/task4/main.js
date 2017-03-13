'use strict';

//creating constructor square
function Square(val) {
    this._side = null;

    if (typeof (val) === 'number') {
        this._side = val;
    }

    this.side = function (val) {
        if (val === undefined) {
            return this._side
        }
        this._side = val
    }

    this.perimetr = function () {
        return 4 * this._side;
    }
}

//creating constructor cube
function Cube(side) {
    Square.apply(this, [side]);
    var parentPerimetr = this.perimetr;

    // 1. Без расширения (полностью переопределить метод родителя);
    this.perimetr = function () {
        return this._side * 12;
    }

    // 2. С расширением (использовать результат метода родителя для дальнейших расчетов).
    // - with call
    this.perimetr2 = function () {
        return parentPerimetr.call(this) + this._side * 8;
    }
    //  - with bind
    this.perimetr3 = function () {
        return parentPerimetr.bind(this)() + this._side * 8;
    }



}

var square = new Square(5);
var cube = new Cube(6);
console.dir(square);
console.dir(cube);
console.log(cube.perimetr());
console.log(cube.perimetr2());
console.log(cube.perimetr3());