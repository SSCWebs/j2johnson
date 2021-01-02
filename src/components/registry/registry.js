import React from 'react';

export class Registry extends React.Component {
    render() {
        return (
            <div className="background test">
                <div className="col-md-11 center">
                    <h1 className="heading">Registry</h1>
                    <img className="regImg"
                        src={'https://s3.amazonaws.com/journey2johnson2021.com/registryPoem.png'}
                        alt="Bride and Groom" />
                    <p>Monetary gifts can be sent directly to the Bride and Groom via their home 
                        address or Cash App: $Journey2johnson2021</p>
                </div>
            </div>
        )
    }
}

export default Registry;