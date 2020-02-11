import React from 'react';
import { Input } from '../Route';
import { withRouter } from 'react-router-dom';

function Signin(props) {
    const signupPage = () => { props.history.push("/wardrobe") }

    return (
        <div>
            <p className="w-med">Sign In</p>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <p className="w-small-it"> forget password?</p>
            <Input type="button" value="Connect" onClick={() => signupPage() }/>
        </div>
    )
}

export default withRouter(Signin)
