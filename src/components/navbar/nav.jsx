import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className="divNavbar row">
                <h1 className="navheader center col-md-12" fixed="top" >Krystle {'&'} Joseph</h1>
                <nav className="navbar navbar-expand-lg center navbar-template">
                    <button className="navbar-toggler center" type="button" data-toggle="collapse" 
                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">bride and groom</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/rsvp">rsvp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/registry">registry</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/gallery">gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/info">wedding info</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/thingstodo">things to do</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/covidfaq">covid and faq</a>
                            </li>
                        </ul>
                    </div>
                    </nav>
            </div>
        );
    }
}

export default Menu;