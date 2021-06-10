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
            dispatch({ type: 'CREATE_TICKET', ticket})
        }).catch((err) => {
            console.log("err", err)
        })
    }
}




