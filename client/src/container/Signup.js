import React from 'react';
import { Input } from '../Route';

function Signup(props) {
    const className = "d-flex text-center"

    return (
        <div id="signup" className={className}>
            <div className="col-md-6 m-auto d-flex justify-content-center flex-column">
                <p className="w-med">Sign Up</p>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirmation" />
                <Input type="button" value="Create an account" />
            </div>
        </div>
    )
}



export default Signup
