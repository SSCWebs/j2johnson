import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Button } from 'reactstrap';
import Pagination from './pagination';

function Admin() {
    const [guestList, setGuestList] = useState([]);
    const [password, setPassword] = useState("");
    const [correctPassword, setCorrectPassword] = useState(false);
    const [error, setError] = useState("");
    const [currPage, setCurrPage] = useState(1);
    const [guestPerPage] = useState(25);
    const adminPassword = "Together2021";

    useEffect(() => {
        const fetchList = async () => {
            const resp = await axios.get("https://api.journey2johnson2021.com/list");
            setGuestList(resp.data);
        }
        fetchList();
    }, []);

    const indexOfLastGuest = currPage * guestPerPage;
    const indexOfFirstGuest = indexOfLastGuest - guestPerPage;
    const currentGuests = guestList.slice(indexOfFirstGuest, indexOfLastGuest);

    const paginate = (pageNumber) => setCurrPage(pageNumber);

    const handleChange = (e) => {
        setPassword(e.target.value);
        setError("");
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            login();
        }
    }

    const login = () => {
        if (password !== adminPassword) {
            setError("Invalid Password!");
        } else {
            setError("");
            setCorrectPassword(true);
            // fetchList();
        }
    }

    return (
        <div className="background">
            {!correctPassword
                ? <div className="adminBox col-md-10 center">
                    <h1 className="heading">Admin Portal</h1>
                    <Input className="center adminSrch"
                        type="password"
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        placeholder="Please enter your password"
                        autoComplete="off"
                    />
                    <Button className="srchBtn adminBtn center" onClick={login}>Enter</Button>
                    <p className="center error">{error}</p>
                </div>
                :
                <div className="col-md-8 center">
                    <h1 className="heading">Guest List</h1>
                    <div className="adminTable">
                        <table className="table rsvpTable">
                            <thead>
                                <tr className="tableHead">
                                    <th>Name</th>
                                    <th>Plus Name</th>
                                    <th>RSVP</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {currentGuests && currentGuests.map(guest => */}
                                {guestList && guestList.map(guest =>
                                    <tr key={+guest.guestId}
                                        className="tableInfo">
                                        <td>{guest.guestName}</td>
                                        <td>{guest.plusName}</td>
                                        <td>{(guest.rsvp === null
                                            ? "Not Yet Answered"
                                            : (guest.rsvp.toString() === "false"
                                                ? "Declined"
                                                : "Acceted Invite"
                                            ))
                                        }
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* <Pagination 
                        guestPerPage={guestPerPage}
                        totalGuest={guestList.length}
                        paginate={paginate}
                    /> */}
                </div>
            }
        </div>
    )
}

export default Admin;