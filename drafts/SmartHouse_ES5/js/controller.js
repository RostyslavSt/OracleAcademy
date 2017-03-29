'use strict';

function Controller(tvModel, view) {
    // view.renderTemplateTV(view.tvParent);
    // debugger;
    view.renderTvInfo();
    view.tvContainer.addEventListener('click', function (event) {
        console.log(event.target.id);
        if ()
        
        // tvModel.volumeUp();
        // view.renderTvInfo();
    });
     view.volumeDownBtn.addEventListener('click', function () {
        tvModel.volumeDown();
        view.renderTvInfo();
    });
    //  view.volumeUpBtn.addEventListener('click', function () {
    //     tvModel.volumeUp();
    //     view.renderTvInfo();
    // });
    //  view.volumeUpBtn.addEventListener('click', function () {
    //     tvModel.volumeUp();
    //     view.renderTvInfo();
    // });
}