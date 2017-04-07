"use strict";

//REFRIGERATOR CLASS
var produсts = ['milk', 'meat', 'soup', 'sandwich'];

function Refrigerator(name, products) {
    baseClass.apply(this, [name]);
    this._type = 'refrigerator';
    this.temperature = 5;
    this.products = products;
}

Refrigerator.prototype = Object.create(baseClass.prototype);
Refrigerator.prototype.constructor = Refrigerator;
Refrigerator.prototype.addProduct = function(productItem) {
    this.products.push(productItem);
}
Refrigerator.prototype.removeProduct = function(productIndex) {
    this.products.splice(productIndex, 1);
}
Refrigerator.prototype.tempUp = function() {
    this.temperature++;
}
Refrigerator.prototype.tempDown = function() {
    this.temperature--;
}
Refrigerator.prototype.getTemp = function() {
    return this.temperature;
}