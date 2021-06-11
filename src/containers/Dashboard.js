import React, { Component } from 'react'
import TicketList from "../components/TicketList";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


class Dashboard extends Component {
    render() {
        const {tickets, auth} = this.props
        if (!auth.token) return <Redirect to='/signin'/>

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <TicketList tickets={tickets}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state in mapstatetoprops in dash", state)
    return{
        tickets: state.ticket.tickets,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Dashboard)


