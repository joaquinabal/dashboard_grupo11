import React from 'react';
// import imagenFondo from '../assets/images/zapatilla.jpg';
import { useState, useEffect } from "react";

let lastUserHardCoded = [
    {
    name: "",
    email: "",
    url: ""
  }
]

function LastUserInDb(){

const [lastUser, setLastUser] = useState([lastUserHardCoded[0]]);

let callApi = (url, consecuencia) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        consecuencia(data);        
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {    

    callApi("/api/users/", mostrarUltimoUser);
  }, []);
  
  let mostrarUltimoUser = (data) => {    
    let posicionUltUser = data.users.length - 1
    let temporalData = 
    {   
            name: data.users[posicionUltUser].name,            
            email: data.users[posicionUltUser].email,
            url: data.users[posicionUltUser].URL,
            
    }          
    setLastUser(temporalData);
  }; 

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Usuario en la Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-left">
                        <h5 className="m-0 font-weight-bold text-gray-800">{lastUser.name}</h5>                                               
                    </div>
                    <p>{lastUser.email}</p>
                    <p> <a href={lastUser.url}>{lastUser.url} </a> </p>
                </div>
            </div>
        </div>
    )
}

export default LastUserInDb;