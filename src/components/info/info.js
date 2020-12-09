import React from 'react';

export class Info extends React.Component {
    render() {
        return (
            <div className="background">
                <div className="center">
                    <h1 className="heading center col-md-10">Wedding Info</h1>
                    <div className="scripture col-md-4 center">
                        <p>So they are no longer two, but one. Therefore what God
                        has joined together, let man not separate.
                        <br />Matthew 19:6</p>
                    </div>
                    <div className="col-md-6 center info">
                        <div className="row">
                            <div className="center">
                                <h3 className="candleMustard">Wedding</h3>
                                <p><b className="infoHead">New Testament Church</b>
                                <br />403 Rapidan Street Portsmouth, VA 23701
                                <br />4:00PM
                                </p>
                            </div>
                        </div>
                        <hr className="hr" />
                        <div className="row">
                            <div className="center">
                                <h3 className="candleMustard">Reception</h3>
                                <p><b className="infoHead">Historic Post Office</b>
                                <br />132 E Queen Street #4004 Hampton, VA 23669
                                <br />5:30PM - 6:30PM <span className="small">Cocktail Hour</span>
                                <br />6:30PM - 10:30PM <span className="small">Dine {`&`} Dance</span>
                                </p>
                            </div>
                        </div>
                        <hr className="hr" />
                        <div className="row">
                            <div className="center">
                                <h3 className="candleMustard">Dress Code</h3>
                                <p><b className="infoHead">Evening Affair Attire</b>
                                <br />Please do not wear white, as requested
                                    from the bride
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;