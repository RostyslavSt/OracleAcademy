'use strict';

function Controller(tvModel, view) {
    view.tvContainer.addEventListener('click', function (event) {
        switch (event.target.id) {
            case 'power':
                console.log('ass');
                tvModel.turnOnOff();
                view.renderTvInfo();
                break;
            case 'volumeUp':
                tvModel.volumeUp();
                view.renderTvInfo();
                break;
            case 'volumeDown':
                tvModel.volumeDown();
                view.renderTvInfo();
                break;
            case 'volumeOff':
                tvModel.volumeOff();
                view.renderTvInfo();
                break;
            case 'nextChannel':
                tvModel.nextChannel();
                view.renderTvInfo();
                break;
            case 'prevChannel':
                tvModel.prevChannel();
                view.renderTvInfo();
                break;
        }
    });

}