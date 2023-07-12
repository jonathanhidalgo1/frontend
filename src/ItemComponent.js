import React from "react";

export default function ItemComponent(props){
    const status = props.status;
    return <li>Item: {props.name} 
            tatus: {status ? <div>Finalizado</div> : <div>Nao Finalizado</div>}</li>
}