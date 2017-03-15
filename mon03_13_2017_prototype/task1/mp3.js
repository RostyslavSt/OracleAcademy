'use strict';

var mediaLibrary = [{
        author: 'Selin Dion',
        track: 'I`am alive'
    },
    {
        author: 'Alan Walker',
        track: 'fade in'
    },
    {
        author: 'Whitney Houston',
        track: 'When You Believe'
    },
    {
        author: 'Mariah Carey',
        track: 'Hero'
    },
]

function MP3Player(model, color, mediaLibrary) {
    this.mediaLibrary = mediaLibrary;
    this.volume = 5;
    this._numTrack = 0;
    this.model = model;
    this.color = color;
}
MP3Player.prototype.play = function () {
    console.log(this.model + ' ' + 'is playing now - ' + mediaLibrary[this._numTrack].author + ' : ' + mediaLibrary[this._numTrack].track);
}
MP3Player.prototype.stop = function () {
    console.log(this.model + ' ' + 'stoped');
}
MP3Player.prototype.volumeUp = function () {
    this.volume++;
    return this.volume;
}
MP3Player.prototype.volumeDown = function () {
    this.volume--;
    return this.volume;
}
MP3Player.prototype.nextTrack = function () {
    if (this._numTrack === mediaLibrary.length - 1) {
        this._numTrack = 0;
        return mediaLibrary[this._numTrack].author + ' : ' + mediaLibrary[this._numTrack].track
    } else {
        this._numTrack++;
        return mediaLibrary[this._numTrack].author + ' : ' + mediaLibrary[this._numTrack].track
    }

}
MP3Player.prototype.previousTrack = function () {
    if (this._numTrack === 0) {
        this._numTrack = mediaLibrary.length - 1;
        return mediaLibrary[this._numTrack].author + ' : ' + mediaLibrary[this._numTrack].track
    } else {
        this._numTrack--;
        return mediaLibrary[this._numTrack].author + ' : ' + mediaLibrary[this._numTrack].track
    }

}


var mp = new MP3Player('Sony Xperia T3', 'grey', mediaLibrary);
console.dir(mp);