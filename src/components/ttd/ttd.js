import React from 'react';
import places from './places';

export class TTD extends React.Component {
    render() {
        return (
            <div className="background">
                <h1 className="heading center">A Night Out On The Town</h1>
                <div className="col-md-8 center ttd">
                    <div className="row ttdRow">
                        {places.map((place) => {
                            return <div className="col-md-6">
                                <img className="ttdImg center" src={place.img} alt={place.name} />
                                <h2 className="subHead">{place.name}</h2>
                                <hr className="hr" />
                                <p>{place.street}
                                    <br />{place.cityState}
                                    <br />{place.phone}</p>
                                <p>{place.description}</p>
                            </div>
                        }
                        )}
                    </div>
                </div>
            </div >
        )
    }
}

export default TTD;