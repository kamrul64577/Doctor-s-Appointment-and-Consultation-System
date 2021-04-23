import React, {useState} from 'react'
import Axios from 'axios';



export default function IbnsinaSp() {

    const [name, setName ] = useState("");
    const [hname, setHname ] = useState("");
    const [email, setEmail ] = useState("");

    const [newhname, setNewHname] = useState('');

    const [Specialist, setSpecialist] = useState([]);

    const addSpecialist = () => {
        Axios.post('http://localhost:3001/ibnsinaSp', {
         
            name : name,
            hname: hname,
            email : email

        }).then(() => {
            setSpecialist([
              ...Specialist,
              {
                name: name,
                hname : hname,
                email : email
              },
            ]);
          });
        };
      
        const getSpecialist = () => {
          Axios.get("http://localhost:3001/ibnsinaSp").then((response) => {
            setSpecialist(response.data);
          });
        };

    return (
        <div>
            <div className="container py-5">
                <label>Name</label> <br/>
                <input type="text" placeholder="name" 
                    onChange={(event) => {
                        setName(event.target.value);
                    }} /><br/><br/>

                <label>Hospital Name</label><br/>
                <input type="text" placeholder="Hospital name" 
                    onChange={(event) => {
                        setHname(event.target.value);
                    }}/><br/><br/>

                <label>Email</label><br/>
                <input type="email" placeholder="email" 
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}/><br/><br/>

                <input onClick={addSpecialist} type="submit" value="Add Speacialist" />
                <button onClick={getSpecialist}>Show Employees</button>
                
                {Specialist.map((val,key) =>{
                    return <div>
                                <div className="card">
                                    <h1>{val.name}</h1>
                                    <h2>{val.hname}</h2>
                                    <h3>{val.email}</h3>
                                </div>
                                <div>
                                    <input type="text" placeholder="abcd" 
                                    onChange={(event) => {
                                        setNewHname(event.target.value);
                                    }} />
                                    <button>Update</button>
                                </div>

                            </div>
                })}

                
                </div> 
        

           
        </div>
    )
}
