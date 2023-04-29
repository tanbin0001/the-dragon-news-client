import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const Navigationbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (

        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/'>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                            }

                            {
                                user ? <Button variant="danger" onClick={handleLogOut}>Logout</Button> :
                                    <Link to='/login'>
                                        <Button variant="danger">Login</Button>
                                    </Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>

    );
};

export default Navigationbar;