'use strict';

function Controller(tvModel, refrModel, view, creator) {
    var self = this;

    view.buttonCreator.addEventListener('click', function(event) {
        creator.designDevice(view.typeDevice.value, view.nameDevice.value);
        // console.log('');
        view.renderDevices();
    });

    view.deviceList.addEventListener('click', function(event) {

        var idDevice = parseInt(event.target.closest('li').id);
        var buttonDevice = event.target.getAttribute('name');

        //there we handle with devices
        if (event.target.classList.contains('remove-device')) {
            creator.removeDevice(idDevice);
            view.renderDevices();
        }
        self.editDevices(idDevice, buttonDevice);


        //there we handle with refrigarator containers(products)
        if (event.target.classList.contains('add-product-cooling')) {
            var typeContainer = 'coolingCamera';
            var currentDevice = event.target.closest('li');
            var currentProductGroup = currentDevice.querySelector('.cooling-camera-list');
            var currentNameProduct = currentDevice.querySelector('.name-product-cooling').value;
            refrModel.addProduct(idDevice, typeContainer, currentNameProduct);
            currentDevice.querySelector('.name-product-cooling').value = "";

            console.log(idDevice);
            // console.log(currentDevice);
            // console.log(currentProductGroup);
            console.log(currentNameProduct);


            // view.renderProducts();
            // self.removeDevice(idDevice);
            // view.renderDevices();
        }

        if (event.target.classList.contains('add-product-freezing')) {
            var typeContainer = 'freezingCamera';
            var currentDevice = event.target.closest('li');
            var currentProductGroup = currentDevice.querySelector('.freezing-camera-list');
            var currentNameProduct = currentDevice.querySelector('.name-product-freezing').value;
            refrModel.addProduct(idDevice, typeContainer, currentNameProduct);
            currentDevice.querySelector('.name-product-freezing').value = "";

            // console.log(idDevice);
            // console.log(currentDevice);
            // console.log(currentProductGroup);
            // console.log(currentNameProduct);

            // view.renderProducts();
            // self.removeDevice(idDevice);
            // view.renderDevices();
        }
    });
}

Controller.prototype.editDevices = function(idDevice, buttonDevice) {
    creator.devices.forEach(function(item) {
        // debugger;
        if (idDevice === item._id) {
            switch (buttonDevice) {
                case 'power':
                    item.turnOnOff();
                    view.renderDevices();
                    break;
                case 'volumeUp':
                    if (item.isOn === true) {
                        item.volumeUp();
                        view.renderDevices();
                    }
                    break;
                case 'volumeDown':
                    if (item.isOn === true) {
                        item.volumeDown();
                        view.renderDevices();
                    }
                    break;
                case 'volumeOff':
                    if (item.isOn === true) {
                        item.volumeOff();
                        view.renderDevices();
                    }
                    break;
                case 'nextChannel':
                    if (item.isOn === true) {
                        item.nextChannel();
                        view.renderDevices();
                    }
                    break;
                case 'prevChannel':
                    if (item.isOn === true) {
                        item.prevChannel();
                        view.renderDevices();
                    }
                    break;
                case 'tempUp':
                    if (item.isOn === true) {
                        item.tempUp();
                        view.renderDevices();
                    }
                    break;
                case 'tempDown':
                    if (item.isOn === true) {
                        item.tempDown();
                        view.renderDevices();
                    }
                    break;
            }
        }
    });
}

Controller.prototype.removeDevice = function(idDevice) {
    creator.removeDevice(idDevice);
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