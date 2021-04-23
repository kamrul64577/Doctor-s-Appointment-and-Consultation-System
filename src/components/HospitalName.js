import React, {useState} from 'react'
import Axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



 export default function HospitalName() {
        const [Hospitallist, setHospitallist] = useState([]);
        
      
        const getHospitallist = () => {
          Axios.get("http://localhost:3001/HospitalName").then((response) => {
            setHospitallist(response.data);
          });
        };

    return (
        <div>
            <div className="container ">
                
              
               {getHospitallist()}
                {Hospitallist.map((val,key) =>{
                    return <div>
                        
                        <div className="hospital-information mt-5 ">
                        <Card className="hospital-card text-center my-3">
                            <Card.Body>
                                <Card.Title>
                                    <h3><Link className="hospital-name" to="/ibnsina-category/{val.H-id}">{val.hname}</Link></h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>Location : {val.hlocation}</p>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>

                                

                            </div>
                })}

                
                </div> 
        

           
        </div>
    )
}
