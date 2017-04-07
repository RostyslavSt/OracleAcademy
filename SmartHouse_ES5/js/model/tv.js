'use strict';

function Tv(name, listChannel) {
    baseClass.apply(this, [name]);
    this._type = 'tv';
    this.listChannel = listChannel || ['discovery', 'sport', 'science', 'education', 'music', 'fishing', 'motosport', 'formula 1'];;
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