'use strict';

function Mp3Pplayer(initVolume) {
    var _volume = 0;
    validator(initVolume);

    function validator(vol) {
        if (vol >= 0 & vol <= 100) {
            _volume = vol;
            // console.log('ok');
        }
    }
    this.setVolume = function (newVolume) {
        validator(newVolume);
    }
    this.getVolume = function () {
        console.log(_volume);
    }
}

var sony = new Mp3Pplayer(50);