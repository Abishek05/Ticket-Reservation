import React from 'react'
import OrderSummary from "./OrderSummary";

const OrderList = () => {
    return (
        <div className="project-list section">
            <OrderSummary/>
            <OrderSummary/>
        </div>
    )
}

export default OrderList