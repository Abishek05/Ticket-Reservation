import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/'>Flights</NavLink></li>
                <li><NavLink to='/orders'>My Orders</NavLink></li>
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedInLinks