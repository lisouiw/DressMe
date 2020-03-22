import React, { useState } from 'react'
import { FormGroup } from '../Route';
import { Form, Button, Col } from 'react-bootstrap';


function Signup(props) {
    const className = "d-flex text-center"
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form id="signup" className={className} noValidate validated={validated} onSubmit={handleSubmit}>
            <Col sm="4" className="m-auto">
                <p className="w-med">Sign Up</p>
                <FormGroup type="input" component={{ placeholder: "Email", type: "email", required: true }} />
                <FormGroup type="input" component={{ placeholder: "Password", type: "password", required: true }} />
                <FormGroup type="input" component={{ placeholder: "Confirmation", type: "password", required: true }} />
                <Button type="submit">Create an account</Button>
            </Col>
        </Form>
    )
}

export default Signup