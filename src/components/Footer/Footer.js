import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (

        // footer start 
        <div className="bg-custom text-light text-center pt-5 cusFooter">
            <Container className="footerGrid">
                <div>
                    <ul className="d-block text-light p-0 m-0">
                        <li>Join course now</li>
                        <li>See more details</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Footer;