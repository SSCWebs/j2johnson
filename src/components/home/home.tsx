import React from 'react';
import { Countdown } from './countdown';
import ReactPlayer from 'react-player';

export class Home extends React.Component{

    render() {
        return (
            <div className="background">
                <div className="vidBox center">
                    <ReactPlayer 
                        className="video center"
                        url="https://s3.amazonaws.com/journey2johnson2021.com/EngagementVideo.mov" 
                        playing
                        width="100%"
                        controls={true} />
                </div>
                <Countdown />
            </div>
        )
    }
}

export default Home;