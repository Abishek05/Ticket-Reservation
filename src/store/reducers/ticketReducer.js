const initState = {
    tickets: [
        {id:111, name:'ticket 1', price:2000, stock:50, created: null},
        {id:112, name:'ticket 2', price:2000, stock:50, created: null},
        {id:113, name:'ticket 3', price:2000, stock:50, created: null}
    ]
}

const ticketReducer = (state=initState, action) => {
    switch (action.type){
        case 'CREATE_TICKET':
            console.log('created ticket result', action.res.data)
            return {
                ...state,
                tickets: [
            ...state.tickets,
            ...action.res.data
        ]
            }
        case 'CREATE_TICKET_ERROR':
            console.log('create ticket error', action.err)
            return state
        case 'LIST_TICKET':
            return {
                ...state,
                tickets: [
                    ...state.tickets,
                    ...action.res.data
                ]
            }
        case 'LIST_TICKET_ERROR':
            console.log('create ticket error', action.err)
            return state
        default:
            return state
    }

}

export default ticketReducer


