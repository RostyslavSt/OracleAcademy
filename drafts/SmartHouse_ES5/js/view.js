'use strict';

function View(tvModel) {
    this.templateTv = `<div class="tv-container">
        <h2 class="tv-header">TV</h2>
        <p class="tv-info"></p>
        <button type="button" id="power" name="power" class="btn btn-danger btn-xs">Power</button>
        <button type="button" id="volumeUp" name="volumeUp" class="btn btn-success btn-xs">volumeUp</button>
        <button type="button" id="volumeDown" name="volumeDown" class="btn btn-success btn-xs">volumeDown</button>
        <button type="button" id="nextChannel" name="nextChannel" class="btn btn-primary btn-xs">nextChannel</button>
        <button type="button" id="prevChannel" name="prevChannel" class="btn btn-primary btn-xs" >prevChannel</button>
    </div>`;

    this.tvParent = document.querySelector('.tv-wrapper');
    this.tvContainer = document.querySelector('.tv-container');
    this.info = document.querySelector('.tv-info');
    this.volumeUpBtn = document.querySelector('#volumeUp');
    this.volumeDownBtn = document.querySelector('#volumeDown');
    this.nextChanneBtn = document.querySelector('#nextChannel');
    this.prevChannelBtn = document.querySelector('#prevChannel');
}
View.prototype.renderTemplateTV = function (parentTag) {
    parentTag.innerHTML = this.templateTv;
}
View.prototype.renderTvInfo = function () {
    this.info.innerHTML = tvModel.info();
}
//toDo
// View.prototype.renderChannel = function (currentChannel) {
//     return tvModel.currentChannel + 1 + ': ' + tvModel.listChannel[tvModel.currentChannel];
// }