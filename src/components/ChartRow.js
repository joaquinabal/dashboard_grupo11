import React from 'react';

function ChartRow(props){
    return (
                <tr>
                    <td>{props.titulo}</td>
                    <td>{props.marca}</td>
                    <td>{props.descripcion}</td>                    
                    <td>{props.categoria}</td>                              
                    <td>$ {props.precio}</td>
                </tr>
            )
    }
    
        

export default ChartRow;