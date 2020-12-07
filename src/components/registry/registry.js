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
                </div>
            </div>
        )
    }
}

export default Registry;