import emailjs from "emailjs-com";
import React from 'react';

import './Footer.css'

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_xcun4zm', e.target, 'user_6IUusShDRkgWMWkFcFYj3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <>
            <div id="contact-header-section" >
                <div className="contact-inner-header text-center py-5 text-white">
                    <h1>Contact with Us</h1>
                </div>
            


                <div className="pb-5"> 
                    <div className="container pb-5 ">
                        <form onSubmit={sendEmail} >
                            <div className="row py-5 mx-auto" style={{boxShadow: '0px 1px 5px 9px rgba(202,190,190,0.76)'}}>
                                <div className="col-lg-8  form-group offset-lg-3">
                                    <input type="text" className="form-control" placeholder="Name" name="name"/>
                                </div>
                                <div className="col-lg-8 form-group pt-2 offset-lg-3">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                                </div>
                                <div className="col-lg-8 form-group pt-2 offset-lg-3">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                                </div>
                                <div className="col-lg-8 form-group pt-2 offset-lg-3">
                                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                </div>
                                <div className="col-lg-8 pt-3 offset-lg-3">
                                    <input  type="submit" className="btn btn-success" value="Send Message"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
