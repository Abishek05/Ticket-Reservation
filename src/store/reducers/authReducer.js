const initState = {
    authError: null,
    token: null
}

const authReducer = (state=initState, action) => {
    switch (action.type){
        case 'LOGIN_ERROR':
            return{
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success', action.res.data)
            return {
                ...state,
                token: action.res.data['token']
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout success')
            return {
                ...state,
                token: null
            }
        case 'REGISTER_SUCCESS':
            console.log('register success')
            return state
        case 'REGISTER_ERROR':
            console.log('register failed', action.err)
            return state
        default:
            return state
    }
}

export default authReducer


