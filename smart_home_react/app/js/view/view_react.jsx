import React from "react";
import ReactDOM from "react-dom";
import { Tv } from "../model/tv";
import { TvTemplate } from "./components/tv_template.jsx";
import { CreateDevice } from "../model/modelDeviceCreator.js";

class View extends React.Component {
    constructor(props) {
        super(props);
        this.devicesObj = new CreateDevice();
        this.create = this.create.bind(this);
        this.state =
            {
                devices: this.devicesObj
            };

    }

    create() {
        this.state.devices.designDevice('Tv', 'sony');
        console.log(this.devicesObj.devices);
    }
    render() {
        return (
            <div className="row">
                <div className="panel panel-success col-md-12 col-xs-12 col-lg-12">
                    <div className="panel-heading">
                        <h3 className="panel-title">KITCHEN</h3>
                    </div>
                    <div className="panel-body">
                        <input className="name-device input-height" type="text" name="device" value="" placeholder="Enter name of device" />
                        <select name="typeDevice" className="type-device input-height">
                            <option value="tv">TV</option>
                            <option value="refrigerator">Refrigerator</option>
                        </select>
                        <button type="button" onClick={this.create} className="add-device-btn input-height">Add device</button>

                        <div className="device-wrapper">
                            <ul className="device-list">
                                {
                                    this.state.devices.devices.map(
                                        (device) => <TvTemplate tvId={device._id} />
                                    )}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <View mapDevices="" />,
    document.querySelector(".main")
);

// export { View };