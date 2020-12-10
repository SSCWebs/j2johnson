import React from 'react';
import { Input, Button } from 'reactstrap';
import GuestList from '../../models/guestList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons'

interface IState {
    list: GuestList[]
    name: string
    error: string
    guestMsg: string
}

export class RSVP extends React.Component<{}, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            list: [],
            name: "",
            error: "",
            guestMsg: ""
        }
        this.setResponse = this.setResponse.bind(this);
    }

    handleChange = (e: any) => {
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            this.findByName();
        }
    }

    findByName = async () => {
        try {
            if (this.state.name === null || this.state.name === '') {
                alert("Please enter a valid name");
            }
            else if (!!this.state.name) {
                const resp = await fetch(`http://J2johnson-env.eba-nmx7pa4w.us-east-1.elasticbeanstalk.com/list/${this.state.name}`, {
                    credentials: 'include'
                })
                const guest = await resp.json();

                let seatCount;
                if (guest.rsvp === false || guest.rsvp === true) {
                    seatCount = `You have already accepted your invitation. If there is a change
                    in your response please contact the Bride & Groom.`
                } else if (guest.plusName === "") {
                    seatCount = "We have 1 seat reserved for you."
                } else {
                    seatCount = "We have 2 seats reserved for you."
                }

                this.setState({
                    ...this.state,
                    list: [guest],
                    error: "",
                    guestMsg: seatCount
                })
            }
        } catch (err) {
            console.log(err);
            this.setState({
                ...this.state,
                list: [],
                error: "No Results Found",
                guestMsg: ""
            })
        }
    }

    setResponse = async (e: any) => {
        let setVal = e.target.value;
        const updateRSVP = {
            name: this.state.name,
            rsvp: e.target.value,
        }
        console.log(updateRSVP);

        try {
            const res = await fetch(`J2johnson-env.eba-nmx7pa4w.us-east-1.elasticbeanstalk.com/list`, {
                method: 'PATCH',
                credentials: 'include',
                body: JSON.stringify(updateRSVP),
                headers: {
                    'content-type': 'application/json'
                }
            });
            console.log(res);
            if (setVal === "true") {
                alert("Thank you so much for accepting the invitation to celebrate our special day with us. See you there.");
            } else {
                alert("While we’re sad you can’t make it, we truly understand. Please feel free to view the registry page because we would love for you to be a blessing to us.");
            }
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const list = this.state.list;

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
                    {/* <br /> */}
                </div>
                <div className="col-md-11 center">
                    <div className="row searchDiv">
                        <Input className="rsvpSearch"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress}
                            placeholder="Please enter your first and last name" />
                        <Button className="arapey srchBtn" onClick={this.findByName}>
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
                            {
                                list && list.map(guest =>
                                    <tr key={+guest.guestId}
                                        className="tableInfo">
                                        <td>{guest.guestName}</td>
                                        <td>{guest.plusName}</td>
                                        <td>{(guest.rsvp === null
                                            ? <div>
                                                <button className="btn btn-outline-success btnSpace"
                                                    value="true" onClick={this.setResponse}>
                                                    Accept
                                                </button>
                                                <button className="btn btn-outline-danger"
                                                    value="false" onClick={this.setResponse}>
                                                    Decline
                                                </button>
                                            </div>
                                            : <button className="btn btn-outline-info">
                                                <a className="cbg" 
                                                href="mailto:journey2johnson@gmail.com"
                                                    target="__blank">Contact Bride {`&`} Groom</a>
                                            </button>
                                        )}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <h3 className="center arapey">{this.state.error}</h3>
                    <p className="center">{this.state.guestMsg}</p>
                </div>
            </div>
        )
    }
}

export default RSVP;