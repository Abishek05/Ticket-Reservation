const initState = {
    tickets: [
        {id:1, title:'ticket 1', content:'dummy ticket data 1'},
        {id:2, title:'ticket 2', content:'dummy ticket data 2'},
        {id:3, title:'ticket 3', content:'dummy ticket data 3'}
    ]
}

const ticketReducer = (state=initState, action) => {
    switch (action.type){
        case 'CREATE_TICKET':
            console.log('created ticket', action.ticket)
            return state
        default:
            return state
    }

}

export default ticketReducer


