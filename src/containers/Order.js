import React, { Component } from 'react'
import OrderList from "../components/OrderList";
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'


class Order extends Component {
    render() {
        const {auth} = this.props
        if (!auth.token) return <Redirect to='/signin'/>
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <OrderList/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state in mapstatetoprops in order", state)
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Order)