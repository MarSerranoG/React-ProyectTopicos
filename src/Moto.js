import React from "react";
import "./style.css";

export default function Moto(props) {
  return (
    <div>
      <h2>Soy una moto {props.marca}</h2>
      <img src={props.imagen} 
      alt = "Imagen de la moto"
      width="300"
      />
      <p>Motor 2. Twin-Cooled™ Milwaukee-Eight™ 117.</p>
    </div>
  );
}