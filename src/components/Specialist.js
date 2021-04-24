import React, {useState} from 'react'
import Axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



 export default function Specialist() {
        const [specialist, setSpecialist] = useState([]);
        
      
        const getSpecialist = () => {
          Axios.get("http://localhost:3001/Specialist").then((response) => {
            setSpecialist(response.data);
          });
        };

        <button onclick="myFunction()"> Hello </button>

    return (
        <div>
            <div className="container ">
                
              
               {getSpecialist()}
                {specialist.map((val,key) =>{
                    return <div>
                            
                            <div className="hospital-information mt-5 ">
                            <Card className="hospital-card text-center my-3">
                                <Card.Body>
                                    <Card.Title>
                                        <h3><Link className="hospital-name" to="/ibnsina-category/{val.H-id}">{val.name}</Link></h3>
                                    </Card.Title>
                                    <Card.Text>
                                        <p>Location : {val.h_id}</p>
                                        
                                        
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
