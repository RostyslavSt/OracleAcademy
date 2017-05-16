import React from "react";
import ReactDOM from "react-dom";
import { Tv } from "../model/tv";
import { TvTemplate } from "./components/tv_template.jsx";
import { creator } from "../model/modelDeviceCreator.js";
import { Controller } from "../controller.js";
let controller = new Controller(creator);


class View extends React.Component {
    constructor(props) {
        super(props);
        this.create = this.create.bind(this);
        this.reRender = this.reRender.bind(this);
        this.state =
            {
                devicesArray: creator.devices
            };
    }

    create() {
        creator.designDevice('tv', 'Sony');
        this.setState({ devicesArray: creator.devices });
    }
    reRender(event) {
        this.setState({ devicesArray: creator.devices });
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
                            {/*<option value="refrigerator">Refrigerator</option>*/}
                        </select>
                        <button type="button" onClick={this.create} className="add-device-btn input-height">Add device</button>

                        <div className="device-wrapper">
                            <ul className="device-list" onClick={this.reRender}>
                                {
                                    this.state.devicesArray.map(
                                        (device, index) =>
                                            <TvTemplate device={device} creator={creator} controller={controller} key={index} />
                                            /*<TvTemplate device={device} tvId={device._id} creator={creator} controller={controller} key={index} channelNumber={device.currentChannel} volume={device.volume}/>*/

                                    )
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <View />,
    document.querySelector(".root")
);

// export { View };