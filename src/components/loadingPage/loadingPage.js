import React from 'react';
import { Button } from 'reactstrap';

export class LoadingPage extends React.Component {
    render() {
        return (
            <div className="landingPage center fireworks">
                <div className="before"></div>
                <div classname="after"></div>
                <div className="animation">
                    <img className="landingImg"
                        src="https://s3.amazonaws.com/journey2johnson2021.com/Engage9.JPG"
                        alt="Krystle and Joseph" />
                    <h1 className="heading landingHeading">Journey to Johnson 2021</h1>
                    <Button className="srchBtn adminBtn" href="/home">Enter Site</Button>
                </div>
            </div>
        )
    }
}

export default LoadingPage;