import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

import { AuthContext } from '../../../providers/AuthProvider';




const Header = () => {


    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <img src={logo} alt="" srcSet="" />
                <p className='text-secondary'><small>Journalism Without Fear of Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;