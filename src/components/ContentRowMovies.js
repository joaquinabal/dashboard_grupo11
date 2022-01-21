import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from "react";


/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let totalProductos = {
    title: 'Total de Productos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalUsuarios = {
    title:' Total de Usuarios', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let totalCategorias = {
    title:'Total de Categorias' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartas = [totalProductos, totalUsuarios, totalCategorias];


function ContentRowMovies() {

    const [smallCardLists1, setSmallCardLists1] = useState([ cartas[0], cartas[1]]);
    const [smallCardLists2, setSmallCardLists2] = useState([ cartas[2] ]);
  

    let callApi = (url, consecuencia) => {
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            consecuencia(data);        
            
          })
          .catch((e) => console.log(e));
        }

 useEffect(() => {    
            callApi("/api/products", mostrarTotalProductos);
          }, []);
        
          useEffect(() => {    
            callApi("/api/users", mostrarTotalUsuarios);
          }, []);


        let mostrarTotalProductos = (data) => {
            cartas[0].cuantity = data.count;
            cartas[2].cuantity = Object.keys(data.countByCategory).length;
            setSmallCardLists1([ cartas[0], cartas[2] ]);
        }
            let mostrarTotalUsuarios = (data) => {
                cartas[1].cuantity = data.count;    
                setSmallCardLists2([cartas[1]]);
              };

         
    return (
    
    <div className="row">
      {smallCardLists1.map((item, i) => {
        return <SmallCard {...item} key={i} />;
      })}

      {smallCardLists2.map((item, i) => {
        return <SmallCard {...item} key={i} />;
      })}
    </div>
    )
    }

export default ContentRowMovies;