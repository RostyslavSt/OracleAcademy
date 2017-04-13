'use strict';

function View(template) {
    var self = this;

    this.templateTv = template.tv;
    this.templateRefr = template.refr;
    this.productContainer = template.productContainer;

    this.deviceList = document.querySelector('.device-list');
    this.renderDevices(this.deviceList);
    this.buttonCreator = document.querySelector(".add-device-btn");
    //select
    this.typeDevice = document.querySelector('.type-device');
    this.nameDevice = document.querySelector('.name-device') || 'no Name';
    this.parentForproducts = document.querySelector('.cooling-camera-list');
}
View.prototype.renderDevices = function() {
    var groupDevices = "";
    var oneDeviceContent = "";
    var productContent = "";
    creator.devices.forEach((function(item) {
        switch (item._type) {
            case 'tv':
                oneDeviceContent = this.templateTv
                    .replace('{{tv-id}}', item._id)
                    .replace('{{tv-name}}', item.name)
                    .replace('{{tv-info}}', item.toString());
                //onOff buttons

                if (item.isOn === false) {
                    while (oneDeviceContent.indexOf('{{') > 0) {
                        oneDeviceContent = oneDeviceContent.replace('{{disabled}}', 'disabled');
                    }
                } else {
                    while (oneDeviceContent.indexOf('{{') > 0) {
                        oneDeviceContent = oneDeviceContent.replace('{{disabled}}', '');
                    }
                }
                groupDevices += oneDeviceContent;
                break;
            case 'refrigerator':
                //create products template
                //  create cooling
                var outputCoolingProducts = "";
                var outputFreezingProducts = "";

                item.coolingCamera.products.forEach((function(item) {
                    productContent = this.productContainer
                        .replace('{{id-product}}', item.idProduct)
                        .replace('{{name-product}}', item.nameProduct);
                    outputCoolingProducts += productContent;
                }).bind(this));
                //  create freezing
                item.freezingCamera.products.forEach((function(item) {
                    productContent = this.productContainer
                        .replace('{{id-product}}', item.idProduct)
                        .replace('{{name-product}}', item.nameProduct);
                    outputFreezingProducts += productContent;
                }).bind(this));
                //  create device
                oneDeviceContent = this.templateRefr
                    .replace('{{refr-id}}', item._id)
                    .replace('{{refr-name}}', item.name)
                    .replace('{{refr-info}}', item.toString())
                    .replace('{{cooling-camera-list}}', outputCoolingProducts)
                    .replace('{{freezing-camera-list}}', outputFreezingProducts);
                //onOff buttons
                if (item.isOn === false) {
                    while (oneDeviceContent.indexOf('{{') > 0) {
                        oneDeviceContent = oneDeviceContent.replace('{{disabled}}', 'disabled');
                    }
                } else {
                    while (oneDeviceContent.indexOf('{{') > 0) {
                        oneDeviceContent = oneDeviceContent.replace('{{disabled}}', '');
                    }
                }
                groupDevices += oneDeviceContent;
                break;
        }
    }).bind(this));
    this.deviceList.innerHTML = groupDevices;
    console.log(this.buttonCreator)
        // this.buttonCreator.innerHTML = "";

}

// in this method we synс model and view
View.prototype.renderProducts = function(idDevice, typeContainer) {
    var currentCameraList = "";
    var arrayProducts = [];
    var groupProducts = "";
    var oneProductContent = "";
    var currentDeviceInModel = {};
    var currentDeviceInDom = document.getElementById(idDevice);

    creator.devices.forEach(function(item) {
        if (idDevice === item._id) {
            currentDeviceInModel = item;
        }
    });
    switch (typeContainer) {
        case 'cooling-camera-list':
            currentCameraList = currentDeviceInDom.querySelector('.cooling-camera-list');
            arrayProducts = currentDeviceInModel.coolingCamera;
            break;
        case 'freezing-camera-list':
            currentCameraList = currentDeviceInDom.querySelector('.freezing-camera-list');
            arrayProducts = currentDeviceInModel.freezingCamera;
            break;
    }
    arrayProducts.products.forEach((function(item) {
        oneProductContent = this.productContainer
            .replace('{{id-product}}', item.idProduct)
            .replace('{{name-product}}', item.nameProduct);
        groupProducts += oneProductContent;
    }).bind(this));
    currentCameraList.innerHTML = groupProducts;
}

View.prototype.onOffButtons = function(idDevice) {
    var currentDevice = document.getElementById(idDevice);
    var buttonsDevice = currentDevice.querySelectorAll('button');
    buttonsDevice.forEach(function(item) {

        // if (!item.classList.contains('power')) {
        //     item.classList.toggle('disabled');
        // }
    });
    console.log(idDevice);
}