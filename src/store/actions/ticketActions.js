import axios from "axios";


export const createTicket = (ticket) => {
    return (dispatch, getState) => {
        // make async call to APIs
        const data = {
            ...ticket,
            "user": 1
        }
        axios.post('http://127.0.0.1:8000/api/v1/tickets/', data).then(res => {
            console.log("res", res)
            dispatch({ type: 'CREATE_TICKET', res})
        }).catch((err) => {
            console.log("err", err)
            dispatch({ type: 'CREATE_TICKET_ERROR', err})
        })
    }
}

export const listTicket = (ticket) => {
    return (dispatch, getState) => {
        // make async call to APIs
        axios.get('http://127.0.0.1:8000/api/v1/tickets/').then(res => {
            console.log("res", res)
            dispatch({ type: 'LIST_TICKET', res})
        }).catch((err) => {
            console.log("err", err)
            dispatch({ type: 'LIST_TICKET_ERROR', err})
        })
    }
}




