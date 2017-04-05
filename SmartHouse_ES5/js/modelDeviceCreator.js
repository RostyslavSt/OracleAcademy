"use strict";

function CreateDevice() {
    this.devices = [];
}
CreateDevice.prototype.designDevice = function(type, name) {
    var newDevice = null;
    switch (type) {
        case 'tv':
            newDevice = new Tv(type, name);
            this.devices.push(newDevice);
            break;
        case 'refrigerator':
            newDevice = new Refrigerator(type, name);
            this.devices.push(newDevice);
            break;
    }
}


var creator = new CreateDevice();
// creator.designDevice('tv', 'sony');
// creator.designDevice('refrigerator', 'bosh');
// creator.designDevice('tv', 'samsung');