'use strict';
//base CLASS
//basedevuce
function parentClass(name) {
    this.isOn = false;
    this.name = name;
}
parentClass.prototype.turnOnOff = function () {
    this.isOn = !this.isOn;
}

parentClass.prototype.tempUp = function () {
    this.temperature++;
}
parentClass.prototype.tempDown = function () {
    this.temperature--;
}
parentClass.prototype.getTemp = function () {
    return this.temperature;

}

//TV CLASS
var listChannel = ['discovery', 'sport', 'science', 'education', 'music', 'fishing', 'motosport', 'formula 1'];

function Tv(name, listChannel) {
    parentClass.apply(this, [name]);
    this.listChannel = listChannel;
    this.currentChannel = 0;
    this.volume = 4;
}
Tv.prototype = Object.create(parentClass.prototype);
Tv.prototype.constructor = Tv;
Tv.prototype.nextChannel = function () {
    if (this.currentChannel === this.listChannel.length - 1) {
        this.currentChannel = 0;
        return this.currentChannel + ': ' + this.listChannel[this.currentChannel];
    } else {
        this.currentChannel++;
        return this.currentChannel + ': ' + this.listChannel[this.currentChannel];
    }
}
Tv.prototype.prevChannel = function () {
    if (this.currentChannel === 0) {
        this.currentChannel = this.listChannel.length - 1;
    } else {
        this.currentChannel--;
    }

}

Tv.prototype.volumeUp = function () {
    this.volume++;
}
Tv.prototype.volumeDown = function () {
    this.volume--;
}
Tv.prototype.volumeOff = function () {
    this.volume = 0;
}
//to string
Tv.prototype.info = function () {
    return `State: ${this.isOn}, Volume: ${this.volume}, Current channel: ${this.currentChannel}: ${this.listChannel[this.currentChannel]}`;
}



//REFRIGERATOR CLASS
var produсts = ['milk', 'meat', 'soup', 'sandwich'];

function Refrigerator(name, products) {
    parentClass.apply(this, [name]);
    this.temperature = 5;
    this.products = products;
}
Refrigerator.prototype = Object.create(parentClass.prototype);
Refrigerator.prototype.constructor = Refrigerator;
Refrigerator.prototype.addProduct = function (productItem) {
    this.products.push(productItem);
}
Refrigerator.prototype.removeProduct = function (productIndex) {
    this.products.splice(productIndex, 1);
}


//LAMP CLASS
function Lamp(name) {
    parentClass.apply(this, [name]);
}
Lamp.prototype = Object.create(parentClass.prototype);
Lamp.prototype.constructor = Lamp;



//CONDITIONER CLASS
function Conditioner(name) {
    parentClass.apply(this, [name]);
    this.temperature = 19;
}

Conditioner.prototype = Object.create(parentClass.prototype);
Conditioner.prototype.constructor = Conditioner;


//humidifier CLASS