'use strict';

var rectangle = (function square(a, b) {
    function valid(param) {
        if ((param > 0) && (((param instanceof Number || typeof param === 'number') && !isNaN(param)))) {
            return true;
        } else {
            console.log('no, no  - it is not a number/ or num is below zero');
            return false;
        }
    }
    var sideA = a;
    var sideB = b;

    function calcArea() {
        if (!valid(sideA)) return false;
        if (!valid(sideB)) return false;
        var sq = sideA * sideB;
        return sq;
    }

    function calcPerimetr() {
        if (!valid(sideA)) return false;
        if (!valid(sideB)) return false;
        var per = 2 * (sideA + sideB);
        return per;
    }

    return {
        calcArea: function () {
            return calcAarea();
        },
        perimetr: function () {
            return calcPerimetr();
        },
        setSideA: function (newSideA) {
            if (!valid(newSideA)) return false;
            sideA = newSideA;
        },
        setSideB: function (newSideB) {
            if (!valid(newSideB)) return false;
            sideB = newSideB;
        },
        showSideA: function () {
            return sideA;
        },
        showSideB: function () {
            return sideB;
        }
    }
})();

// rectangle;
// debugger;
console.log(rectangle(3,2));