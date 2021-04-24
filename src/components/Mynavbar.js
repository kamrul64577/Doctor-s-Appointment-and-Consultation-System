import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/Mynavbar.css'
import { Image } from 'react-bootstrap';
import Logo from '../images/logo.png'

export default class Mynavbar extends Component {
    render() {
        return (
            <>

                <Navbar bg="dark" expand="lg">
                    <div className="container">
                        <Navbar.Brand><Image className="logo" src={Logo} fluid /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav"> 
                        <Nav className="navitems">
                            <NavLink exact className="navlink" activeStyle={{color:"lightblue"}} to="/">Home</NavLink>
                            <NavLink exact className="navlink" activeStyle={{color:"lightblue"}} to="/specialist">Specialist</NavLink>
                            <NavLink className="navlink" activeStyle={{color:"lightblue"}} to="/contact">Contact</NavLink>
                            <NavLink className="navlink" activeStyle={{color:"lightblue"}} to="/about">About</NavLink>
                            
                        </Nav>
                        </Navbar.Collapse>
                        <Form inline >
                            <FormControl className="form-control" type="text" placeholder="Search" />
                            <button className="btn btn-success src-btn">Search</button>
                           
                        </Form>
                        

                    </div>
                </Navbar>
                

            </>
        )
    }
}
