
import React from 'react'
import '../css/Home.css'
import image from '../images/about.jpg';
export default function About() {
    return (
        <>
           <div id="about" className="m-0">
                <div className="container text-white text-center p-5">
                    <h1 className="m-0">About Us</h1>
                </div>   
            </div> 

            <div className="inner-about">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-7 bg-success p-5">
                            <img className="img-fluid" src={image} alt="aboutpage"/>
                        </div>
                        <div className="col-lg-5 p-5 mt-4">
                            <h3>Why We Are Here?</h3>
                            <p className="f-mobile"></p>
                            <p className="about-paragraph">Our project is an online solution of all your healthcare needs. Our team of medical experts are there for you in every step of the way, from finding the right doctor and hospital to any kind of assistance. We educate and empower families to ensure that right health care decisions are made.With personalized advice, we are changing the face of health care delivery across Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
