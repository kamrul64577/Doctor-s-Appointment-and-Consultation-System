import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Home.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import HospitalName from './HospitalName'



export default function Home() {
    return (
        <>
             {/* START HEADER SECTION */}
            <div id="header-section">
                <div className="header-overlay">
                    <div className="container">
                        <div className="inner-header">
                            <h1 className="text-white">Welcome To Our Website You Can Find Your Doctor Easily</h1>
                            <button className="btn appointment-btn mt-3">Get An Appointment</button>
                        </div>
                    </div>
                </div>
            </div>



            {/* START Services SECTION */}
            <div id="service-section" className="py-5">
                <div className="container">
                    <div className="sevice-header text-center pt-3">
                        <h2 className="service-title">Our <span>Services</span></h2>
                    </div> 

                    <div className="service-information my-5">
                        <div className="row">
                            
                            <div className=" col-lg-4">
                                <Card className="text-center service-card">
                                    <Card.Body >
                                        <Card.Title className="mb-4 mt-2 service-name"><h4>Emergency Support</h4></Card.Title>
                                        <Card.Text>
                                            <p>We will provide you Hospital Contact number & You can get Emergency Support.</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className=" col-lg-4">
                                <Card className="text-center service-card">
                                    <Card.Body >
                                        <Card.Title className="mb-4 mt-2 service-name"><h4>Find Doctors</h4></Card.Title>
                                        <Card.Text>
                                            <p>You can find specialist Doctor and you can book an Appointment </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className=" col-lg-4">
                                <Card className="text-center service-card">
                                    <Card.Body >
                                        <Card.Title className="mb-4 mt-2 service-name"><h4>Consult with Doctors</h4></Card.Title>
                                        <Card.Text>
                                            <p>Chatting with Doctors and get the quick solution </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                        </div>
                    </div>  
                </div>
            </div>

           

            {/* START HOSPITAL SECTION */}
            <div id="hospital-section" className="py-5">
               <div class="container">
                    <div className="hospital-header text-center pt-3">
                        <h2 className="hospital-title">Find Your <span>Doctors</span> In Hospital</h2>
                        <p className="hospital-description mt-4">Now you can select the hospital and you can easily find the specialist Doctors</p>
                    </div>

                    <div className="hospital-information mt-5 ">
                    
                    <HospitalName/>

                        {/* <Card className="hospital-card text-center my-3">
                            <Card.Body>
                                <Card.Title>
                                    <h3><Link className="hospital-name" to="/ibnsina-category">Ibn Sina Hospital Sylhet</Link></h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>Location : Subhanighat Point, Sylhet</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="hospital-card text-center my-3">
                            <Card.Body>
                                <Card.Title>
                                    <h3><Link className="hospital-name" to="/alharamain-category">Al Haramain Hospital Sylhet</Link></h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>Location : BishwaRoad, Subhanighat, Sylhet</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="hospital-card text-center my-3">
                            <Card.Body>
                                <Card.Title>
                                    <h3><Link className="hospital-name" to="/amountadora-category">Mount Adora Hospital Sylhet</Link></h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>Location : Akhalia, Sylhet</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="hospital-card text-center my-3">
                            <Card.Body>
                                <Card.Title>
                                    <h3><Link className="hospital-name" to="/alharamain-category">Oasis Hospital Sylhet</Link></h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>Location : Subhanighat, Sylhet</p>
                                </Card.Text>
                            </Card.Body>
                        </Card> */}
                    </div>
                     
                </div>
            </div>
           

            {/* START EMERGENCY SUPPORT SECTION */}
            <div id="emergency-support-section" className="py-5">
               <div class="container">
                    <div className="hemergency-support-header text-center pt-3">
                        <h2 className="emergency-support-title">Contact with Hospital for any <span>Emergency</span> Support</h2>
                        
                    </div>

                    <div className="emergency-support-information mt-5 ">

                        <div className="row text-center text-white mt-3">
                                <div className="col-lg-8 bg-dark pt-3">
                                    <h5> Sylhet MAG Osmani Medical College Hospital</h5>
                                </div>
                                <div className="col-lg-4 bg-success pt-3">
                                    <h6>Call for get Information or help</h6>
                                    <p>0821-713487</p>
                                </div>
                        </div>

                        <div className="row text-center text-white mt-3">
                                <div className="col-lg-8 bg-dark pt-3">
                                    <h5> North East Medical College & Hospital</h5>
                                </div>
                                <div className="col-lg-4 bg-success pt-3">
                                    <h6>Call for get Information or help</h6>
                                    <p>0821-728587</p>
                                </div>
                        </div>

                        <div className="row text-center text-white mt-3">
                                <div className="col-lg-8 bg-dark pt-3">
                                    <h5>Jalalabad Ragib-Rabeya Medical College & Hospital</h5>
                                </div>
                                <div className="col-lg-4 bg-success pt-3">
                                    <h6>Call for get Information or help</h6>
                                    <p> 0821-719096</p>
                                </div>
                        </div>

                        <div className="row text-center text-white mt-3">
                                <div className="col-lg-8 bg-dark pt-3">
                                    <h5> Sylhet Women's Medical College Hospital</h5>
                                </div>
                                <div className="col-lg-4 bg-success pt-3">
                                    <h6>Call for get Information or help</h6>
                                    <p>01712-346858</p>
                                </div>
                        </div>

                        <div className="row text-center text-white mt-3">
                                <div className="col-lg-8 bg-dark pt-3">
                                    <h5> Park View Medical College Hospital</h5>
                                </div>
                                <div className="col-lg-4 bg-success pt-3">
                                    <h6>Call for get Information or help</h6>
                                    <p>0821-728878</p>
                                </div>
                        </div>
                        
                    </div>
                   
                </div>
            </div>

        </>
    )
}
