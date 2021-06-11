import axios from "axios";

export const signIn = (credentials) => {
    return(dispatch, getState) =>{
        // make async call to APIs
        const data = {
            ...credentials,
            "user": 1
        }
        axios.post('http://127.0.0.1:8000/login/', data).then(res => {
            console.log("res", res)
            dispatch({ type: 'LOGIN_SUCCESS', res})
        }).catch((err) => {
            console.log("err", err)
            dispatch({ type: 'LOGIN_ERROR', err})
        })
    }
}


export const signOut = () => {
    return(dispatch, getState) => {
        // remove token from localstorage here
        dispatch({type: 'SIGNOUT_SUCCESS'})
    }
}







