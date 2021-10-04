import React from 'react';
import { Accordion, Container, Nav } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <>
        {/* about page heading start */}

        <div className="aboutBackdround">
            <h1 className="mb-1 text-center pt-5 fw-bold"><span style={{fontSize:'5rem'}}> POLASH CATED SCHOOL</span></h1>
        </div>

        {/* about page heading end */}

        <Container className="text-center">
            <h1 className="mb-3">About Us</h1>
        </Container>
        </>
    );
};

export default About;