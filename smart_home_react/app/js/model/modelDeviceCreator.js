"use strict";

import { BaseClass } from "./baseclass";
import { TvChannels } from "./tv_channels.js"
import { Tv } from "./tv";
// import { Refrigerator } from "./refrigerator";
// import { FreezingBox } from "./freezing_box";
// import { CoolingBox } from "./cooling_box";


export class CreateDevice {
    constructor() {
        this.devices = [];
    }

    designDevice(type, name) {
        let newDevice = null;
        switch (type) {
            case 'tv':
                newDevice = new Tv(name, new TvChannels);
                this.devices.push(newDevice);
                break;
            case 'refrigerator':
                var coolingBox = new CoolingBox();
                var freezingBox = new FreezingBox();
                newDevice = new Refrigerator(name, coolingBox, freezingBox);
                this.devices.push(newDevice);
                break;
        }
    }
    removeDevice(idDevice) {
        creator.devices.forEach(function(item, index) {
            if (idDevice === item._id) {
                creator.devices.splice(index, 1);
            }
        });
    }
}