import React from 'react';
import FAQ from './faq';

class CovidFAQ extends React.Component {
    render() {
        return (
            <div className="background">
                <div className="col-md-9 center">
                    <h1 className="heading">Covid-19 {`&`} FAQ</h1>
                    <p className="covidText">As we all adapt to an uncertain time with
                    COVID-19 (coronavirus), we are monitoring the news carefully
                    and consulting the resources of the World Helath Organization
                    (WHO) and the Center for Disease Control and Prevention (CDC)
                    to appropriatley prepare for our wedding day and protect the
                    health and safety of our bridal party and guests.</p>
                    <p className="covidText">At the point, we plan to move forward with our May 8, 2021
                    wedding date and will use this page on our website and other
                    means of communication to alert you or any changes to our
                    plans.</p>
                    <p className="covidText">When booking your travel and accommodations, please be sure
                    tounderstand the booking and cancellation polocies of the
                    airlines and hotels that you book with through COVID-19
                    health and safety messages on their websites along with those
                    sent by email.</p>
                    <p className="covidText">Most importantly, the safety of our guests is a prioirty.
                    Please check our website and national/local public health
                    websites regualry for updates.</p>
                    <p className="covidText">We appreciate your love and patience!</p>
                </div>
                <div>
                    <FAQ />
                </div>
            </div>
        )
    }
};

export default CovidFAQ;