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
CreateDevice.prototype.removeDevice = function(idDevice) {
    creator.devices.forEach(function(item, index) {
        if (idDevice === item._id) {
            creator.devices.splice(index, 1);
        }
    });
}


var creator = new CreateDevice();