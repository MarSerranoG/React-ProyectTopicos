import React from "react";
import "./style.css";

export default function Moto(props) {

  const estiloDiv= {

    backgroundColor: 'Pink',
    fontFamily:"Verdana"
  }

  const estiloH2 ={
    color: "Purple"
  };

  return (
    <div style={estiloDiv}>
      <h2 style={estiloH2}>Soy una moto {props.marca}</h2>
      <img src={props.imagen} 
      alt = "Imagen de la moto"
      width="300"
      />
      <p style={estiloH2}>Motor 2. Twin-Cooled™ Milwaukee-Eight™ 117.</p>
    </div>
  );
}