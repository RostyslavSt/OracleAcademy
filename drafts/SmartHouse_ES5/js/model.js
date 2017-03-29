'use strict';
//base CLASS
function parentClass(name) {
    this.isOn = false;
    this.name = name;
}
parentClass.prototype.turnOnOff = function () {
    this.isOn = !this.isOn;
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
    this.currentChannel++;
}
Tv.prototype.prevChannel = function () {
    this.currentChannel--;
}
Tv.prototype.volumeUp = function () {
    this.this.volume++;
}
Tv.prototype.volumeDown = function () {
    this.this.volume--;
}



//REFRIGERATOR CLASS
function Refrigerator(name) {
    parentClass.apply(this, [name]);
    this.temperature = 5;
}
Refrigerator.prototype = Object.create(parentClass.prototype);
Refrigerator.prototype.constructor = Refrigerator;
Refrigerator.prototype.tempUp = function() {
    this.temperature++;
}
Refrigerator.prototype.tempDown = function() {
    this.temperature++;
}


//LAMP CLASS
function Lamp(name) {
    parentClass.apply(this, [name]);
}
Lamp.prototype = Object.create(parentClass.prototype);
Lamp.prototype.constructor = Lamp;

var tv = new Tv('Sony', listChannel);
var refr = new Refrigerator('Bosh');
var lamp = new Lamp('maxus');

//CONDITIONER CLASS

//humidifier CLASS
