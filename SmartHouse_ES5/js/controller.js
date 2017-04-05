'use strict';

function Controller(tvModel, view) {
    view.tvContainer.addEventListener('click', function(event) {
        switch (event.target.id) {
            case 'power':
                tvModel.turnOnOff();
                view.renderTvInfo();
                break;
            case 'volumeUp':
                if (tvModel.isOn === true) {
                    tvModel.volumeUp();
                    view.renderTvInfo();
                }
                break;
            case 'volumeDown':
                if (tvModel.isOn === true) {
                    tvModel.volumeDown();
                    view.renderTvInfo();
                }
                break;
            case 'volumeOff':
                if (tvModel.isOn === true) {
                    tvModel.volumeOff();
                    view.renderTvInfo();
                }
                break;
            case 'nextChannel':
                if (tvModel.isOn === true) {
                    tvModel.nextChannel();
                    view.renderTvInfo();
                }
                break;
            case 'prevChannel':
                if (tvModel.isOn === true) {
                    tvModel.prevChannel();
                    view.renderTvInfo();
                }
                break;
        }
    });

}