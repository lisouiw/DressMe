import React from 'react';
import { Signin } from '../Route';
import { Container, Button, Col } from 'react-bootstrap';



function Home(props) {
    const signupPage = () => { props.history.push("/signup") }
    const className = "text-center d-flex justify-content-center "

    return (
        <Container id="home" fluid className={className}>
            <Col sm="4" className="m-auto">
                <Signin />
                <hr />
                <Button type="submit" onClick={() => signupPage()}>Sign Up</Button>
            </Col>
        </Container>
    )
}

export default Home
