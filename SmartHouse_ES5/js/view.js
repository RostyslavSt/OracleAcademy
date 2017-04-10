'use strict';

function View(creator) {
    var self = this;
    this.templateTv = `<li class="tv-container" id="{{tv-id}}">
        <div class="remove-device-block"><p class="remove-device glyphicon glyphicon-remove"></p></div>
        <h2 class="tv-header">TV</h2>
        <p class="tv-name">{{tv-name}}</p>
        <p class="tv-info">{{tv-info}}</p>
        <button type="button" name="power" class="power btn btn-danger btn-xs"><i class="fa fa-power-off" aria-hidden="true"></i> Power</button>
        <button type="button" name="volumeUp" class="volumeUp btn btn-success btn-xs glyphicon glyphicon-volume-up" disable></button>
        <button type="button" name="volumeDown" class="volumeDown btn btn-success btn-xs glyphicon glyphicon-volume-down"></i></button>
        <button type="button" name="volumeOff" class="volumeOff btn btn-success btn-xs glyphicon glyphicon-volume-off"></i></button>
        <button type="button" name="prevChannel" class="prevChannel btn btn-primary btn-xs glyphicon glyphicon-step-backward"></button>
        <button type="button" name="nextChannel" class="nextChannel btn btn-primary btn-xs glyphicon glyphicon-step-forward"></button>
    </li>`;
    this.templateRefr = `<li class="refr-container" id="{{refr-id}}">
        <div class="remove-device-block"><p class="remove-device glyphicon glyphicon-remove"></p></div>
        <h2 class="refr-header">Refrigerator</h2>
        <p class="refr-name">{{refr-name}}</p>
        <p class="refr-info">{{refr-info}}</p>
        <div class="cooling-camera-container">
            <input class="name-product" type="text" placeholder="Enter name of product">
            <button class="add-product">Add product</button>
            <ul class="cooling-camera-list">

            </ul>
        </div>
        <button type="button" name="power" class="power btn btn-danger btn-xs"><i class="fa fa-power-off" aria-hidden="true"></i> Power</button>
        <button type="button" name="tempUp" class="tempUp btn btn-success btn-xs glyphicon glyphicon-plus" disable></button>
        <button type="button" name="tempDown" class="tempDown btn btn-success btn-xs glyphicon glyphicon-minus"></i></button>
    </li>`;

    this.templateProductContainer = `<li id={{id-product}}>
        <div class="remove-product-block"><p class="remove-device glyphicon glyphicon-remove"></p></div>
        <p class="name-product">{{name-product}}</p>
    </li>`;

    this.deviceList = document.querySelector('.device-list');
    this.parentTag = document.querySelector('.device-list');
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
    this.parentTag.innerHTML = groupDevices;

}
View.prototype.renderProducts = function() {
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