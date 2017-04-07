'use strict';

function Controller(tvModel, view, creator) {
    var self = this;

    view.buttonCreator.addEventListener('click', function(event) {
        creator.designDevice('tv', 'lg');
        view.renderDevices();
    });

    view.deviceList.addEventListener('click', function(event) {
        var idDevice = parseInt(event.target.closest('li').id);
        var buttonDevice = event.target.getAttribute('name');
        self.editDevices(idDevice, buttonDevice);
        view.renderDevices();
    });
}

Controller.prototype.editDevices = function(idDevice, buttonDevice) {
    creator.devices.forEach(function(item) {
        // debugger;
        if (idDevice === item._id) {
            switch (buttonDevice) {
                case 'power':
                    item.turnOnOff();
                    break;
                case 'volumeUp':
                    if (item.isOn === true) {
                        item.volumeUp();
                    }
                    break;
                case 'volumeDown':
                    if (item.isOn === true) {
                        item.volumeDown();
                    }
                    break;
                case 'volumeOff':
                    if (item.isOn === true) {
                        item.volumeOff();
                    }
                    break;
                case 'nextChannel':
                    if (item.isOn === true) {
                        item.nextChannel();
                    }
                    break;
                case 'prevChannel':
                    if (item.isOn === true) {
                        item.prevChannel();
                    }
                    break;
            }
        }
    });
}



//  if (idDevice === item._id) {
//             switch (buttonDevice) {
//                 case 'power':
//                     tvModel.turnOnOff();
//                     // view.renderTvInfo();
//                     break;
//                 case 'volumeUp':
//                     if (tvModel.isOn === true) {
//                         tvModel.volumeUp();
//                         // view.renderTvInfo();
//                     }
//                     break;
//                 case 'volumeDown':
//                     if (tvModel.isOn === true) {
//                         tvModel.volumeDown();
//                         // view.renderTvInfo();
//                     }
//                     break;
//                 case 'volumeOff':
//                     if (tvModel.isOn === true) {
//                         tvModel.volumeOff();
//                         // view.renderTvInfo();
//                     }
//                     break;
//                 case 'nextChannel':
//                     if (tvModel.isOn === true) {
//                         tvModel.nextChannel();
//                         // view.renderTvInfo();
//                     }
//                     break;
//                 case 'prevChannel':
//                     if (tvModel.isOn === true) {
//                         tvModel.prevChannel();
//                         // view.renderTvInfo();
//                     }
//                     break;