'use strict';

function Figure(num1, num2) {
    this.x = num1;
    this.y = num2;
}
Figure.prototype.pointX = function (val) {
    if (val === undefined) {
        return this.x;
    }
    this.x = val;
}
Figure.prototype.pointY = function (val) {
    if (val === undefined) {
        return this.y;
    }
    this.y = val;
}


//creating rectangle
function Rectangle(num1, num2, dioganal) {
    Figure.apply(this, arguments);
    this._dioganal = dioganal;
}

Rectangle.prototype = Object.create(Figure.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.info = function () {
    console.log('point X: ', this.pointX());
    console.log('point Y: ', this.pointY());
    console.log('dioganal: ', this._dioganal);
}


//creating round
function Round(num1, num2, radius) {
    Figure.apply(this, arguments);
    this._radius = radius;
}

Round.prototype = Object.create(Figure.prototype);
Round.prototype.constructor = Round;

Round.prototype.info = function () {
    console.log('point X: ', this.pointX());
    console.log('point Y: ', this.pointY());
    console.log('radius: ', this._radius);
}

var figure = new Figure(5, 7);
var rectangle = new Rectangle(10, 12, 55);
var round = new Round(5, 4, 16);
console.dir(figure);
console.dir(rectangle);
console.dir(round);