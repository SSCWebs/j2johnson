import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';

const RSVP = () => {
    const [guestList, setGuestList] = useState();
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [guestMsg, setGuestMsg] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.findByName();
        }
    }

    const findByName = async () => {
        try {
            if (name === null || name === '') {
                alert("Please enter a valid name");
            }
            else if (!!name) {
                const resp = await axios.get(`http://100.26.163.236:8080/list/${name}`);
                const guest = await resp.data;

                let seatCount;
                if (guest.rsvp === false || guest.rsvp === true) {
                    seatCount = `You have already accepted your invitation. If there is a change
                    in your response please contact the Bride & Groom.`
                } else if (guest.plusName === "") {
                    seatCount = "We have 1 seat reserved for you."
                } else {
                    seatCount = "We have 2 seats reserved for you."
                }
                setGuestList(guest);
                setError("");
                setGuestMsg(seatCount);
            }
        } catch (err) {
            setError("No Results Found");
            setGuestMsg("");
        }
    }

    const setResponse = async (e) => {
        let setVal = e.target.value;
        const updateRSVP = {
            guestName: name,
            rsvp: e.target.value,
        }

        try {
            await fetch(`http://100.26.163.236:8080/list`, {
                method: 'PATCH',
                credentials: 'include',
                body: JSON.stringify(updateRSVP),
                headers: {
                    'content-type': 'application/json'
                }
            });
            if (setVal === "true") {
                alert("Thank you so much for accepting the invitation to celebrate our special day with us. See you there.");
            } else {
                alert("While we’re sad you can’t make it, we truly understand. Please feel free to view the registry page because we would love for you to be a blessing to us.");
            }
            window.location.reload();
        } catch (err) {
            return err;
        }
        setGuestList([]);
    }

    return (
        <div className="background">
            <div className="col-md-10 rsvpInfo">
                <h1 className="heading">Be Our Guest</h1>
                <p>Please enter your first and last name to unlock your RSVP invitation. If you're
                responding for you and your plus one you'll be able to RSVP for
                your entire group. We ask that you kindly accept or decline by February
                    1st, 2021.</p>
                <br />
                <h3>With Respect <FontAwesomeIcon icon={faHeart} size="sm" /> ...</h3>
                <p>“We have decided to have our wedding be an adult-only occasion. <br />
                    We hope this advance notice means you are still able to share our big day!”</p>
            </div>
            <div className="col-md-11 center">
                <div className="row searchDiv">
                    <Input className="rsvpSearch"
                        type="text"
                        value={name}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        placeholder="Please enter your first and last name" />
                    <Button className="arapey srchBtn" onClick={findByName}>
                        <FontAwesomeIcon icon={faSearch} size="sm" />
                    </Button>
                </div>
                <table className="table rsvpTable">
                    <thead>
                        <tr className="tableHead">
                            <th>Name</th>
                            <th>Plus One</th>
                            <th>RSVP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guestList && <tr key={+guestList.guestId}
                            className="tableInfo">
                            <td>{guestList.guestName}</td>
                            <td>{guestList.plusName}</td>
                            <td>{(guestList.rsvp === null
                                ? <div>
                                    <button className="btn btn-outline-success btnSpace"
                                        value="true" onClick={setResponse}>
                                        Accept
                                    </button>
                                    <button className="btn btn-outline-danger"
                                        value="false" onClick={setResponse}>
                                        Decline
                                    </button>
                                </div>
                                : <button className="btn btn-outline-info">
                                    <a className="cbg"
                                        href="mailto:journey2johnson@gmail.com"
                                        target="__blank">Contact Bride {`&`} Groom</a>
                                </button>
                            )}</td>
                        </tr>}
                    </tbody>
                </table>
                <h3 className="center arapey">{error}</h3>
                <p className="center">{guestMsg}</p>
            </div>
        </div>
    )
}

export default RSVP;