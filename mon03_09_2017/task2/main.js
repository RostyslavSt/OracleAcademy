function Summ(value1, value2) {
    var _firstNumber = null;
    var _secondNumber = null;

    function validation(num) {
        if (typeof (num) === 'number') {
            return true;
        }
    }
    if (validation(value1) & validation(value2)) {
        _firstNumber = value1;
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
            calc();
        }
    }
    this.secondNumber = function (val) {
        if (val === undefined) {
            return _secondNumber;
        }
        if (validation(val)) {
            _firstNumber = val;
            calc();
        }
    }

    this.showNumbers = function () {
        console.log('firstNumber: ' + _firstNumber + '  ' + 'secondNumber: ' + _secondNumber);
    }

}
var todo = new Summ(5, 3);