import React, { Component } from 'react'
import TicketList from "../components/TicketList";
import {connect} from "react-redux";


class Dashboard extends Component {
    render() {
        console.log(this.props)
        const {tickets} = this.props
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
    return{
        tickets: state.ticket.tickets
    }
}

export default connect(mapStateToProps)(Dashboard)


