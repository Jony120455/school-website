import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import SubHome from '../SubHome/SubHome';
import SubHomeTwo from '../SubHomeTwo/SubHomeTwo';
import './Home.css'

const Home = () => {
    return (
        // home area start 
        <>
        <div className="backgroundImage">
            <Container>
                <Row className="d-flex align-items-center pt-5">
                    <div className="col col-md-7">
                    <h1 className="fw-bold text-primary">How To Apply<br /></h1>
                    <Button variant="primary">Learn more</Button>
                    </div>
                </Row>
            </Container>
        </div>
            <SubHomeTwo></SubHomeTwo>
            <SubHome></SubHome> 
        </>      
    );
};

export default Home;