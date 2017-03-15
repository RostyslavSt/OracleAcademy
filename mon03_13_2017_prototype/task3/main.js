'use strict';

//creating constructor square
function Square(val) {
    this._side = val;
}
Square.prototype.side = function (val) {
    if (val === undefined) {
        return this._side
    }
    this._side = val
}
Square.prototype.perimetr = function () {
    return this._side * 4;
}


//creating constructor cube
function Cube(side) {
    Square.call(this, side);
}
Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;

// 1. Без расширения (полностью переопределить метод родителя);
Cube.prototype.perimetr = function () {
    return this._side * 12;
}

// 2. С расширением (использовать результат метода родителя для дальнейших расчетов).
// - with call
Cube.prototype.perimetr2 = function () {
    return Square.prototype.perimetr.call(this) * 3;
}
//  - with bind
Cube.prototype.perimetr3 = function () {
    return Square.prototype.perimetr.bind(this).bind(this)() * 3;
}





var square = new Square(5);
var cube = new Cube(6);
console.dir(square);
console.dir(cube);
console.log(cube.perimetr());
console.log(cube.perimetr2());
console.log(cube.perimetr3());