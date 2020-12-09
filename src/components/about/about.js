import React from 'react';
import ReactPlayer from 'react-player';

export class About extends React.Component {
    render() {
        return (
            <div className="background">
                <div className="col-md-10 about">
                    <h1 className="heading center">The Journey...</h1>
                    <div className="vidBox center">
                    <ReactPlayer 
                        className="video center"
                        url="https://s3.amazonaws.com/journey2johnson2021.com/Wedding+Video.mp4" 
                        width="100%"
                        controls={true} />
                    </div>
                </div>
                <br />
                <br />
                <div className="col-md-10 about">
                    <h1 className="heading center">The Proposal...</h1>
                    <div className="vidBox center">
                    <ReactPlayer 
                        className="video center"
                        url="https://s3.amazonaws.com/journey2johnson2021.com/The+Proposal!.mov"
                        width="100%"
                        controls={true} />
                    </div>
                </div>
            </div>
        )
    }
}

export default About;