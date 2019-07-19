import React, { Component } from "react";

import "./YouTubeMessage.css";

const buildYouTubeURL = ({ id, options }) =>
    `https://www.youtube.com/embed/${id}?${Object.entries(options)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")}`;

export class YouTubeMessage extends Component {
    render() {
        const { width, height, videoId: id } = this.props.data;
        const src = buildYouTubeURL({ id, options: {
            autoplay: 0,
            // origin: 'http://example.com',
            modestbranding: 1,
            iv_load_policy: 3,
            fs: 1,
            disablekb: 1,
        }});
        return (
            <div className="rce-mbox-photo video">
                <div
                    className="rce-mbox-photo--img"
                    style={
                        width &&
                        height && {
                            width,
                            height
                        }
                    }
                >
                    <iframe
                        // id="ytplayer"
                        type="text/html"
                        width="400"
                        height="225"
                        src={src}
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
};

export default YouTubeMessage;
