'use strict';

function Summ(value1, value2) {
    var _firstNumber = null;
    var _secondNumber = null;

    function validation(num) {
        if (typeof (num) === 'number') {
            return true;
        }
    }
    if (validation(value1)) {
        _firstNumber = value1;
    }
    if (validation(value2)) {
        _secondNumber = value2;
    }

    this.result = null;
    var calc = function () {
        this.result = _firstNumber + _secondNumber;
        console.log('Result = ', this.result);
    }
    
    this.firstNumber = function (val) {
        if (val === undefined) {
            return _firstNumber;
        }
        if (validation(val)) {
            _firstNumber = val;
            // 1-st method: 
            calc.call(this);
            // 2-d method: 
            calc.apply(this);
            
            // 3-th method:
            var f = calc.bind(this);
            f();
            // 4-th method: with anonym function?
            calc();
            
            // 5-d method: self
        }
    }
    this.secondNumber = function (val) {
        if (val === undefined) {
            return _secondNumber;
        }
        if (validation(val)) {
            _secondNumber = val;
            calc.call(this);
        }
    }

    this.showNumbers = function () {
        console.log('firstNumber: ' + _firstNumber + '  ' + 'secondNumber: ' + _secondNumber);
    }

}
var todo = new Summ(5, 3);