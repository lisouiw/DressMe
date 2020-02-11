import React from 'react';
import { Signin } from '../Route';
import Input from '../component/Input';



function Home(props) {
    const signupPage = () => { props.history.push("/signup") }
    const className = "text-center d-flex justify-content-center "

    return (
        <div id="home" className={className}>
            <div className="col-md-6 m-auto">
                <Signin />
                <hr />
                <Input type="button" value="Sign Up" onClick={() => signupPage()} />
            </div>
        </div>
    )
}

export default Home
