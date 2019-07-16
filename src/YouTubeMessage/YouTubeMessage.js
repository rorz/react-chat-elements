import React, { Component } from "react";

import "./YouTubeMessage.css";

// import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
// import FaError from 'react-icons/lib/fa/exclamation-triangle';

// const ProgressBar = require('react-progress-bar.js');
// const Circle = ProgressBar.Circle;

export class YouTubeMessage extends Component {
    render() {
        // var progressOptions = {
        //     strokeWidth: 2.3,
        //     color: '#efe',
        //     trailColor: '#aaa',
        //     trailWidth: 1,
        //     step: (state, circle) => {
        //         circle.path.setAttribute('trail', state.color);
        //         circle.path.setAttribute('trailwidth-width', state.width);

        //         var value = Math.round(circle.value() * 100);
        //         if (value === 0)
        //             circle.setText('');
        //         else
        //             circle.setText(value);
        //     }
        // };

        // const error = this.props.data.status && this.props.data.status.error === true;

        return (
            <div className="rce-mbox-photo">
                <div
                    className="rce-mbox-photo--img"
                    style={
                        this.props.data.width &&
                        this.props.data.height && {
                            width: this.props.data.width,
                            height: this.props.data.height
                        }
                    }
                >
                    <iframe
                        id="ytplayer"
                        type="text/html"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                        frameborder="0"
                    />
                </div>
                {this.props.text && (
                    <div className="rce-mbox-text">{this.props.text}</div>
                )}
            </div>
        );
    }
}

YouTubeMessage.defaultProps = {
    text: "",
    data: {}
    // onDownload: null,
    // onOpen: null,
    // onLoad: null,
    // onPhotoError: null,
};

export default YouTubeMessage;
