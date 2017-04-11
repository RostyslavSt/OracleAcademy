'use strict';

function View(template) {
    var self = this;

    this.templateTv = template.tv;
    this.templateRefr = template.refr;
    this.ProductContainer = template.ProductContainer;

    this.deviceList = document.querySelector('.device-list');
    // this.parentTag = document.querySelector('.device-list');
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
    creator.devices.forEach((function(item) {
        switch (item._type) {
            case 'tv':
                oneDeviceContent = this.templateTv
                    .replace('{{tv-id}}', item._id)
                    .replace('{{tv-name}}', item.name)
                    .replace('{{tv-info}}', item.toString());
                groupDevices += oneDeviceContent;
                break;
            case 'refrigerator':
                oneDeviceContent = this.templateRefr
                    .replace('{{refr-id}}', item._id)
                    .replace('{{refr-name}}', item.name)
                    .replace('{{refr-info}}', item.toString());
                // this.renderProducts();
                groupDevices += oneDeviceContent;
                break;
        }
    }).bind(this));
    this.deviceList.innerHTML = groupDevices;

}
View.prototype.renderProducts = function(typeContainer, idDevice) {
    var groupProducts = "";
    var oneProductContent = "";


    refrModel.products.forEach((function(item) {
        oneProductContent = this.templateProductContainer;
        oneProductContent
            .replace('{{id-product}}', item.idProduct)
            .replace('{{name-product}}', item.nameProduct);
        groupProducts += oneProductContent;
    }).bind(this));
    this.parentForproducts.innerHTML = groupProducts;
}