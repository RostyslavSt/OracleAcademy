'use strict';

function CreateFigure(num1, num2) {
    var x = null;
    var y = null;

    function vdn(val) {
        if (typeof (val) === 'number') {
            return true;
        }
    }
    if (vdn(num1)) {
        x = num1;
    }
    if (vdn(num2)) {
        y = num2;
    }

    this.pointX = function (val) {
        if (val === undefined) {
            return x;
        }
        if (vdn(val)) {
            x = val;
        }
    }
    this.pointY = function (val) {
        if (val === undefined) {
            return y;
        }
        if (vdn(val)) {
            y = val;
        }
    }

    this.showPoint = function () {
        console.log('x:', x + '  ' + 'y:', y);
    }
}

//creating rectangle
function Rectangle(num1, num2, dioganal) {
    CreateFigure.apply(this, arguments);
    var _dioganal = dioganal;
    var x = arguments[0];
    var y = arguments[1];

    var objProperties = {
        pointX: x,
        pointY: y,
        dioganal: _dioganal
    };

    this.info = function () {
        for (var item in objProperties) {
            console.log(item + ': ' + objProperties[item])
        }
    }

}

//creating round
function Round(num1, num2, radius) {
    CreateFigure.apply(this, arguments);
    var _radius = radius;
    var x = arguments[0];
    var y = arguments[1];

    var objProperties = {
        pointX: x,
        pointY: y,
        radius: _radius
    };

    this.info = function () {
        for (var item in objProperties) {
            console.log(item + ': ' + objProperties[item])
        }
    }

}


var figure = new CreateFigure(5, 7);
var rectangle = new Rectangle(10, 12, 55);
var round = new Round(5, 4, 16);
console.dir(figure);
console.dir(rectangle);
console.dir(round);