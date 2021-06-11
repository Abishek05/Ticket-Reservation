import React from 'react'

const TicketSummary = ({ticket}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{ticket.name}</span>
                <p>Ticket Price: {ticket.price}</p>
                <p className="grey-text">Tickets: Available: {ticket.stock}</p>
                <p className="grey-text">Last updated: {ticket.created}</p>
            </div>
        </div>
    )
}

export default TicketSummary