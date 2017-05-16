class Controller {
    constructor(creator) {
        let self = this;
        this.creator = creator;

        // view.deviceList.addEventListener('click', (event) => {

        //     let idDevice = parseInt(event.target.closest('li').id);
        //     let buttonDeviceName = event.target.getAttribute('name');

        //     //there we handle with devices
        //     if (event.target.classList.contains('remove-device')) {
        //         creator.removeDevice(idDevice);
        //         view.renderDevices();
        //     }
        //     self.editDevices(idDevice, buttonDeviceName);

        // });
    }

    editDevices(idDevice, buttonDeviceName) {
        this.creator.devices.forEach((item) => {
            if (idDevice === item._id) {
                switch (buttonDeviceName) {
                    case 'power':
                        item.turnOnOff();
                        console.log(item.toString());

                        // if (item.isOn === true) {
                        //     // view.renderChannel(idDevice);
                        //     // view.renderVolume(idDevice, item.volume);
                        // }
                        break;
                    case 'volumeUp':

                        if (item.isOn === true) {
                            item.volumeUp();
                            console.log(item.toString());

                            // view.renderDevices();
                            // view.renderVolume(idDevice, item.volume);
                        }
                        break;
                    case 'volumeDown':
                        if (item.isOn === true) {
                            item.volumeDown();
                            console.log(item.toString());

                            // view.renderDevices();
                            // view.renderVolume(idDevice, item.volume);
                        }
                        break;
                    case 'volumeOff':
                        if (item.isOn === true) {
                            item.volumeOff();
                            console.log(item.toString());
                            //         view.renderDevices();
                        }
                        break;
                    case 'nextChannel':
                        if (item.isOn === true) {
                            item.nextChannel();
                            console.log(item.toString());
                            // view.renderDevices();
                            // view.renderChannel(idDevice);
                        }
                        break;
                    case 'prevChannel':
                        if (item.isOn === true) {
                            item.prevChannel();
                            console.log(item.toString());
                            // view.renderDevices();
                            // view.renderChannel(idDevice);
                        }
                        break;
                }
            }
        });
    }
    removeDevice(idDevice) {
        this.creator.removeDevice(idDevice);
    }


    // test() {
    //     this.creator.devices[0].volumeUp();
    //     console.log(this.creator.devices[0].toString());
    // }
}


export { Controller };