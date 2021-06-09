import React from 'react'
import TicketSummary from "./TicketSummary";

const TicketList = () => {
    return (
        <div className="project-list section">
            <TicketSummary/>
            <TicketSummary/>
            <TicketSummary/>
            <TicketSummary/>
        </div>
    )
}

export default TicketList