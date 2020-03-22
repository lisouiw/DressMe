import React, { useState } from 'react'
import { FormGroup } from '../Route';
import { withRouter } from 'react-router-dom';
import instance from '../utils/instance';
import { Form, Button } from 'react-bootstrap';

function Signin(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            instance({
                url: "/auth",
                method: 'get',
                params: {
                    email: event.target[0].value,
                    password: event.target[1].value
                }
            })
                .then(function (response) {
                    console.log(response);
                    setValidated(true);
                })
                .catch(function (error) {
                    console.log(error.response.data)
                    setValidated(true);
                })
        }

    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <p className="w-med">Sign In</p>
            <FormGroup type="input" component={{ placeholder: "Email", type: "email", required: true }} />
            <FormGroup type="input" component={{ placeholder: "Password", type: "password", required: true }} />
            <p className="w-small-it">forget password?</p>
            <Button type="sumit">Connect</Button>
        </Form>
    )
}

export default withRouter(Signin)