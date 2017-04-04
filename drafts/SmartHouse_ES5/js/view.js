'use strict';

function View(tvModel) {
    this.templateTv = `<div class="tv-container">
        <h2 class="tv-header">TV</h2>
        <p class="tv-info"></p>
        <button type="button" id="power" name="power" class="btn btn-danger btn-xs"><i class="fa fa-power-off" aria-hidden="true"></i> Power</button>
        <button type="button" id="volumeUp" name="volumeUp" class="btn btn-success btn-xs glyphicon glyphicon-volume-up" disable></button>
        <button type="button" id="volumeDown" name="volumeDown" class="btn btn-success btn-xs glyphicon glyphicon-volume-down"></i></button>
        <button type="button" id="volumeOff" name="volumeOff" class="btn btn-success btn-xs glyphicon glyphicon-volume-off"></i></button>
        <button type="button" id="prevChannel" name="prevChannel" class="btn btn-primary btn-xs glyphicon glyphicon-step-backward"></button>
        <button type="button" id="nextChannel" name="nextChannel" class="btn btn-primary btn-xs glyphicon glyphicon-step-forward"></button>
    </div>`;

    this.tvParent = document.querySelector('.tv-wrapper');
    this.renderTemplateTV(this.tvParent);
    this.tvContainer = document.querySelector('.tv-container');
    this.info = document.querySelector('.tv-info');
    this.volumeUpBtn = document.querySelector('#volumeUp');
    this.volumeDownBtn = document.querySelector('#volumeDown');
    this.nextChanneBtn = document.querySelector('#nextChannel');
    this.prevChannelBtn = document.querySelector('#prevChannel');
    this.renderTvInfo();

}
View.prototype.renderTemplateTV = function(parentTag) {
    parentTag.innerHTML = this.templateTv;
}
View.prototype.renderTvInfo = function() {
    this.info.innerHTML = tvModel.toString();
}

function ViewRefr(refrModel) {
    // this.templateRefr = `<div class="tv-container">
    //     <h2 class="tv-header">TV</h2>
    //     <p class="tv-info"></p>
    //     <button type="button" id="power" name="power" class="btn btn-danger btn-xs"><i class="fa fa-power-off" aria-hidden="true"></i> Power</button>
    //     <button type="button" id="volumeUp" name="volumeUp" class="btn btn-success btn-xs glyphicon glyphicon-volume-up"></button>
    //     <button type="button" id="volumeDown" name="volumeDown" class="btn btn-success btn-xs glyphicon glyphicon-volume-down"></i></button>
    //     <button type="button" id="volumeOff" name="volumeOff" class="btn btn-success btn-xs glyphicon glyphicon-volume-off"></i></button>
    //     <button type="button" id="prevChannel" name="prevChannel" class="btn btn-primary btn-xs glyphicon glyphicon-step-backward"></button>
    //     <button type="button" id="nextChannel" name="nextChannel" class="btn btn-primary btn-xs glyphicon glyphicon-step-forward"></button>
    // </div>`;
    this.addProductBtn = document.querySelector('.add-product');
    this.refrParent = document.querySelector('.refrigerator-wrapper');
    this.productMenuTemplate = `<ul class="product-list"></ul>`;
    this.renderProductMenuTemplate();
    this.productMenu = document.querySelector('.product-list');


}
ViewRefr.prototype.renderProductList = function(productList) {
    refrModel.products.forEach(function(index) {
        var productItem = document.createElement('li');
        productItem.innerHTML = refrModel.products[index];
        this.productMenu.appendChild(productItem);

    });
    // var productItem = document.createElement('li');
}
ViewRefr.prototype.renderProductMenuTemplate = function() {
    this.refrParent.innerHTML = this.productMenuUl;
}