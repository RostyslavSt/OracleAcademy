'use strict';
//base CLASS
function parentClass(name) {
    this.isOn = false;
    this.name = name;
}
parentClass.prototype.turnOn = function () {
    this.isOn = true;
}
parentClass.prototype.turnOff = function () {
    this.isOn = false;
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
        return this.currentChannel + 1 + ': ' + this.listChannel[this.currentChannel];
    } else {
        this.currentChannel++;
        return this.currentChannel + 1 + ': ' + this.listChannel[this.currentChannel];
    }
}
Tv.prototype.prevChannel = function () {
    if (this.currentChannel === 0) {
        this.currentChannel = this.listChannel.length - 1;
        return this.currentChannel + 1 + ': ' + this.listChannel[this.currentChannel];
    } else {
        this.currentChannel--;
        return this.currentChannel + 1 + ': ' + this.listChannel[this.currentChannel];
    }

}

Tv.prototype.volumeUp = function () {
    this.volume++;
}
Tv.prototype.volumeDown = function () {
    this.volume--;
}
Tv.prototype.info = function () {
    return `State: ${this.isOn}, Volume: ${this.volume}, Current channel: ${this.currentChannel}`;
}



//REFRIGERATOR CLASS
function Refrigerator(name) {
    parentClass.apply(this, [name]);
    this.temperature = 5;
}
Refrigerator.prototype = Object.create(parentClass.prototype);
Refrigerator.prototype.constructor = Refrigerator;


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

