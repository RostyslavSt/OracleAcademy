'use strict';


function CreateDevice(type, name) {
    this._type = type;
    this._name = name;
    this.devices = []

}
CreateDe


//base CLASS
function baseClass(name) {
    this.isOn = false;
    this.name = name;
}
baseClass.prototype.turnOnOff = function() {
    this.isOn = !this.isOn;
}

//TV CLASS
var listChannel = ['discovery', 'sport', 'science', 'education', 'music', 'fishing', 'motosport', 'formula 1'];

function Tv(name, listChannel) {
    baseClass.apply(this, [name]);
    this.listChannel = listChannel;
    this.currentChannel = 0;
    this.volume = 4;
}
Tv.prototype = Object.create(baseClass.prototype);
Tv.prototype.constructor = Tv;
Tv.prototype.nextChannel = function() {
    if (this.currentChannel === this.listChannel.length - 1) {
        this.currentChannel = 0;
        return this.currentChannel + ': ' + this.listChannel[this.currentChannel];
    } else {
        this.currentChannel++;
        return this.currentChannel + ': ' + this.listChannel[this.currentChannel];
    }
}
Tv.prototype.prevChannel = function() {
    if (this.currentChannel === 0) {
        this.currentChannel = this.listChannel.length - 1;
    } else {
        this.currentChannel--;
    }

}
Tv.prototype.volumeUp = function() {
    this.volume++;
}
Tv.prototype.volumeDown = function() {
    this.volume--;
}
Tv.prototype.volumeOff = function() {
    this.volume = 0;
}
Tv.prototype.toString = function() {
    return `State: ${this.isOn}, Volume: ${this.volume}, Current channel: ${this.currentChannel}: ${this.listChannel[this.currentChannel]}`;
}


//REFRIGERATOR CLASS
var produсts = ['milk', 'meat', 'soup', 'sandwich'];

function Refrigerator(name, products) {
    baseClass.apply(this, [name]);
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