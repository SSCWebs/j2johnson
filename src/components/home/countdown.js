import React from 'react';

export class Countdown extends React.Component {
    constructor() {
        super();
        this.state = {
            second: 0,
            minute: 0,
            hour: 0,
            day: 0
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            const distance = new Date(+new Date("May 8, 2021 16:00:00") - +new Date());
            
            let setDays = Math.floor(+distance / 86400000);
            let setHours = distance.getUTCHours();
            let setMins = distance.getUTCMinutes();
            let setSec = distance.getUTCSeconds();
            
            this.setState({
                ...this.state,
                second: setSec,
                minute: setMins,
                day: setDays,
                hour: setHours
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <h2 className="center heading subHead">We Tie the Knot In...</h2>
                <ul className="countdown center">
                    <li><span id="days">{this.state.day}</span>days</li>
                    <li><span id="hours">{this.state.hour}</span>hours</li>
                    <li><span id="minutes">{this.state.minute}</span>minutes</li>
                    <li><span id="seconds">{this.state.second}</span>seconds</li>
                </ul>
            </div>
        )
    }
}