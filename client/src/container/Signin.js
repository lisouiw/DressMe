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


// import React, { useState } from 'react';
// import { Input } from '../Route';
// import { withRouter } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { Form, Col, Modal, Button, InputGroup } from "react-bootstrap";
// import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

// function Signin(props) {
//     const [validated, setValidated] = useState(false);
//     const signupPage = () => { props.history.push("/wardrobe") }

//     const handleSubmit = event => {
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//         }

//         setValidated(true);
//     };



//     return (
//         <Form className="d-flex text-center  align-items-center flex-column " noValidate validated={validated} onSubmit={handleSubmit}>
//             <p className="w-med">Sign In</p>

//             <Form.Group as={Col} md="6" controlId="validationCustom01">
//                 <Form.Control
//                     type="text"
//                     placeholder="Username"
//                     required
//                 />
//                 <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="6" controlId="validationCustomUsername">
//                 <Form.Control
//                     type="text"
//                     placeholder="Password"
//                     aria-describedby="inputGroupPrepend"
//                     required
//                 />

//                 <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
//             </Form.Group>

//                          <p className="w-small-it"> forget password?</p>

//             <Input type="button" value="Connect" onClick={() => signupPage() }/>
//             {/* <Button className="text-center" type="submit md-6">Submit form</Button> */}
//         </Form>


//     )
// }

// export default withRouter(Signin)
