import React from "react";
import "./style.css";

export default function Moto(props) {
  return (
    <div>
      <h1>Soy una moto {props.marca}</h1>
      <img src={props.imagen} 
      alt = "Imagen de la moto"
      width="300"
      />
    </div>
  );
}