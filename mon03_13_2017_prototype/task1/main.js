'use strict';

function Tv(channel) {
    this.currentChannel = channel;
}
Tv.prototype.nextChannel = function() {
    this.currentChannel++;
}
Tv.prototype.prevChannel = function() {
    this.currentChannel--;
}
Tv.prototype.setChannel = function(value) {
    this.currentChannel = value;
}

var lg = new Tv(15);
console.dir(lg);

// var tv = {
//     currentChannel: 1,
//     nextChannel: function () {
//         this.currentChannel++;
//         return this.currentChannel;
//     },
//     previousChannel: function () {
//         this.currentChannel--;
//         return this.currentChannel;
//     },
//     setChannel: function (newChannel) {
//         this.currentChannel = newChannel;
//     }
// };

// console.log(tv);