import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from "react-redux";
import {signOut} from "../store/actions/authActions";


const SignedInLinks = (props) => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/create-ticket'>Create Ticket</NavLink></li>
                <li><NavLink to='/'>Flights</NavLink></li>
                <li><NavLink to='/signup'>Add User</NavLink></li>
                <li><NavLink to='/orders'>My Orders</NavLink></li>
                <li><a onClick={props.signOut}>Log Out</a></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">AA</NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)