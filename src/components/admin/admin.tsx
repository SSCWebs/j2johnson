import React from 'react';
import { Input, Button } from 'reactstrap';
import GuestList from '../../models/guestList';

interface IState {
    list: GuestList[]
    adminPassword: string
    password: string
    error: string
    checkPassword: string
}

export class Admin extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            list: [],
            adminPassword: "21",
            // adminPassword: "Together2021",
            password: "",
            error: "",
            checkPassword: ""
        }
    }

    componentDidMount = async () => {
        const resp = await fetch('http://localhost:8012/list', {
            credentials: 'include'
        })
        const list = await resp.json();

        this.setState({
            ...this.state,
            list
        })
    }

    handleChange = (e: any) => {
        this.setState({
            ...this.state,
            password: e.target.value,
            error: ""
        })
    }

    handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            this.login();
        }
    }

    login = () => {
        if (this.state.password !== this.state.adminPassword) {
            this.setState({
                ...this.state,
                error: "Invalid Password!"
            })
        } else {
            this.setState({
                ...this.state,
                error: "",
                checkPassword: "Pass"
            })
        }
    }

    render() {
        const list = this.state.list;

        return (
            <div className="background">
                {this.state.checkPassword !== "Pass"
                    ? <div className="adminBox col-md-10 center">
                        <h1 className="heading">Admin Portal</h1>
                        <Input className="center adminSrch"
                            type="password"
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress}
                            placeholder="Please enter your password"
                            autoComplete="off"
                        />
                        <Button className="srchBtn adminBtn center" onClick={this.login}>Enter</Button>
                        <p className="center error">{this.state.error}</p>
                    </div>
                    : <div className="col-md-8 center">
                        <h1 className="heading">Guest List</h1>
                        <table className="table rsvpTable tableBody">
                            <thead>
                                <tr className="tableHead">
                                    <th>Name</th>
                                    <th>Plus Name</th>
                                    <th>RSVP</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {list && list.map(guestList =>
                                    <tr key={+guestList.guestId}
                                        className="tableInfo">
                                        <td>{guestList.guestName}</td>
                                        <td>{guestList.plusName}</td>
                                        <td>{(guestList.rsvp === null
                                            ? "Not Yet Answered"
                                            : (guestList.rsvp.toString() === "false"
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
                }
            </div>
        )
    }
}

export default Admin;