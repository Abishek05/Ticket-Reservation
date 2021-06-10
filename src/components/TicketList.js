import React from 'react'
import TicketSummary from "./TicketSummary";

const TicketList = ({tickets}) => {
    return (
        <div className="project-list section">
            {tickets && tickets.map(ticket => {
                return(
                    <TicketSummary ticket={ticket} key={ticket.id}/>
                )
            })}
        </div>
    )
}

export default TicketList