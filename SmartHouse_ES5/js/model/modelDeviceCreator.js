"use strict";

function CreateDevice() {
    this.devices = [];
}
CreateDevice.prototype.designDevice = function(type, name) {
    var newDevice = null;
    switch (type) {
        case 'tv':
            newDevice = new Tv(name);
            this.devices.push(newDevice);
            break;
        case 'refrigerator':
            newDevice = new Refrigerator(name);
            this.devices.push(newDevice);
            break;
    }
}


var creator = new CreateDevice();