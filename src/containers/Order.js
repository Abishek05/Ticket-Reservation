import React, { Component } from 'react'
import OrderList from "../components/OrderList";
// import ProjectList from '../projects/ProjectList'
// import Notifications from './Notifications'

class Order extends Component {
    render() {
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

export default Order