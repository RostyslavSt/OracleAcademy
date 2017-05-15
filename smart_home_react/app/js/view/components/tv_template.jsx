import React from "react";
import ReactDOM from "react-dom";

export class TvTemplate extends React.Component {
    render() {
        return ( <li className="tv-container" id={this.props.tvId}>
        <div className="remove-device-block"><p className="remove-device glyphicon glyphicon-remove"></p></div>
        <div className="tv-and-board">
            <div className="tv-box">
                <div className="tv-screen">
                    <div className="img-styles" style={this.props.currentChannel}>
                        <div className="channel-box">channel-number</div>
                        <div className="volume-box">
                            <div className="volume-blocks"> current-volume</div>
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
                <div><button type="button" name="volumeOff" className="volumeOff btn btn-success btn-xs glyphicon glyphicon-volume-off {{disabled}}"></button></div>
                 <div><button type="button" name="nextChannel" className="nextChannel btn btn-primary btn-xs glyphicon glyphicon-step-forward {{disabled}}"></button></div>
              
                    <div className="volume-buttons">
                        <button type="button" name="volumeDown" className="volumeDown btn btn-success btn-xs glyphicon glyphicon-volume-down {{disabled}}"></button>
                        <button type="button" name="volumeUp" className="volumeUp btn btn-success btn-xs glyphicon glyphicon-volume-up {{disabled}}"></button>
                    </div>
               
                <div><button type="button" name="prevChannel" className="prevChannel btn btn-primary btn-xs glyphicon glyphicon-step-backward {{disabled}}"></button></div>
            </div>
        </div>
    </li>
        );
    }
};

