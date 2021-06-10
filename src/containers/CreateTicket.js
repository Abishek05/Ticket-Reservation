import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createTicket} from "../store/actions/ticketActions";

class CreateTicket extends Component {
    state = {
        name: '',
        price: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createTicket(this.state);
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create a New Ticket</h5>
                    <div className="input-field">
                        <input type="text" id='name' onChange={this.handleChange} />
                        <label htmlFor="name">Ticket Name</label>
                    </div>
                    <div className="input-field">
                        <input type="number" id='price' onChange={this.handleChange} />
                        <label htmlFor="name">Ticket Price</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createTicket: (ticket) => dispatch(createTicket(ticket))
    }
}

export default connect(null, mapDispatchToProps)(CreateTicket)