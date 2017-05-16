import React from "react";
import ReactDOM from "react-dom";

export class TvTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.channelImagePath = {};

    }
    edit(event) {
        let idDevice = parseInt(event.target.closest('li').id);
        let buttonDeviceName = event.target.getAttribute('name');
        this.channelImagePath = {
            backgroundImage: 'url(' + this.props.device.listChannel.channels[this.props.device.currentChannel].path + ')'
        }
        console.log(this.props.device.currentChannel);

        if (event.target.classList.contains('remove-device')) {
            console.log(this.props.creator.devices);


            this.props.controller.removeDevice(idDevice);

        }
        // console.log(event.target.classList);
        // console.log(this.props.controller.test());

        // console.log(idDevice, buttonDeviceName);
        this.props.controller.editDevices(idDevice, buttonDeviceName);

    }

    render() {
        return (<li className="tv-container" id={this.props.device._id} onClick={this.edit}>
            <div className="remove-device-block"><p className="remove-device glyphicon glyphicon-remove"></p></div>
            <div className="tv-and-board">
                <div className="tv-box">
                    <div className="tv-screen">
                        <div className="img-styles" style={this.channelImagePath}>
                            <div className="channel-box">{this.props.device.currentChannel}</div>
                            <div className="volume-box">
                                <div className="volume-blocks">{this.props.device.volume}</div>
                            </div>
                        </div>
                    </div>
                    <div className="tv-bottom">
                        <div className="tv-indicator" style={this.props.indicatorColor}></div>
                    </div>
                </div>
                <div className="board">
                    <div className="tv-name">{this.props.tvName}</div>
                    <div><button type="button" name="power" className="power btn btn-danger btn-xs"><i className="fa fa-power-off" aria-hidden="true"></i> Power</button></div>
                    <div><button type="button" name="volumeOff" className="volumeOff btn btn-success btn-xs glyphicon glyphicon-volume-off {{disabled"></button></div>
                    <div><button type="button" name="nextChannel" className="nextChannel btn btn-primary btn-xs glyphicon glyphicon-step-forward {{disabled"></button></div>

                    <div className="volume-buttons">
                        <button type="button" name="volumeDown" className="volumeDown btn btn-success btn-xs glyphicon glyphicon-volume-down {{disabled"></button>
                        <button type="button" name="volumeUp" className="volumeUp btn btn-success btn-xs glyphicon glyphicon-volume-up {{disabled"></button>
                    </div>

                    <div><button type="button" name="prevChannel" className="prevChannel btn btn-primary btn-xs glyphicon glyphicon-step-backward {{disabled"></button></div>
                </div>
            </div>
        </li>
        );
    }
};

