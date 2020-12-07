import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <h6 className="footerHead">Journey to Johnson 2021</h6>
                <h6 className="footerSub">Copyright &copy; 2018 by SSC Webservices. All rights reserved</h6>
                <a className="contact" href="mailto:Journey2Johnson21@gmail.com" 
                    target="__blank">Contact Bride {`&`} Groom </a>
                |
                <a className="contact" href="https://sscwebservices.com/" 
                    target="__blank"> Contact SSCWebservices</a>
            </div>
        )
    }
}

export default Footer;