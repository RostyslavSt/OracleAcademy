"use strict";

//REFRIGERATOR CLASS

function Refrigerator(name, products) {
    baseClass.apply(this, [name]);
    this._type = 'refrigerator';
    this.temperature = 5;
    this.products = [{
        nameProduct: 'potatoes',
        idProduct: 1111111
    }];

}


//inheritance
Refrigerator.prototype = Object.create(baseClass.prototype);
Refrigerator.prototype.constructor = Refrigerator;

//methods
Refrigerator.prototype.addProduct = function(idDevice, nameProduct) {
    var newProduct = {};
    newProduct.nameProduct = nameProduct;
    newProduct.idProduct = Date.now() - 10000;
    creator.devices.forEach(function(item) {
        if (item.id === idDevice) {
            item.products.push(newProduct);
        }
    });
}

Refrigerator.prototype.removeProduct = function(idProduct) {
    this.products.forEach(function(item, index) {
        if (idProduct === item.id) {
            this.products.splice(index, 1);
        }
    });

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
Refrigerator.prototype.toString = function() {
    return `State: ${this.isOn}  Temperature: ${this.temperature}`;
}