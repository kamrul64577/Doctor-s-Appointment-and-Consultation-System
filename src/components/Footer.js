import React from 'react'



import './Footer.css'


export default function Footer() {
    return (
        <div>
            <div id="footer" className="">

                <div className="main-footer bg-dark py-5 text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <h3>Corona Info</h3> <hr className="horizontal-role"/>
                                <p><strong>Covid-19 Telehealth:</strong>  09666777222</p>
                                <p><strong>Shastho Batayon:</strong>  16263</p>
                                <p><strong>IEDCR:</strong>  10655</p>
                                <p className="f-mobile"></p>
                            </div>

                            <div className="col-lg-5 offset-lg-1">
                                <h3>Ambulance Service In Sylhet</h3> <hr className="horizontal-role"/>
                                <p><strong>Emergency Helpline:</strong> 01721-520585</p>
                                <p className="f-mobile"></p>
                                <p> <strong>24 Hours Sylhet Ambulance Service:</strong> Provide General Ambulance-Freezer Ambulance-Life Support Ambulance-Dead body Coffin Services</p>
                                
                            </div>

                        </div>
                    </div>
                </div>
                <div className="sub-Footer">
                    <p className="sub-footer-title m-0"> &copy;2021 Kamrul Islam & Fatema Jannat All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}
