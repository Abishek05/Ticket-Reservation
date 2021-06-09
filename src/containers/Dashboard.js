import React, { Component } from 'react'
import TicketList from "../components/TicketList";

// import ProjectList from '../projects/ProjectList'
// import Notifications from './Notifications'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <TicketList/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard