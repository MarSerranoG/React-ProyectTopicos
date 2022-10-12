import React from "react";
import "./style.css";

export default function Carro(props) {

  const estiloDiv= {

    backgroundColor: 'Pink',
    fontFamily:"Verdana"
  }

  const estiloH2 ={
    color: "Purple"
  };



  return (
    <div style={estiloDiv}>
      <h2 style={estiloH2}>Soy un carro {props.marca}</h2>
      <img src={props.imagen} 
      alt = "Imagen del carro"
      width="300"
      />
    <p>1969 Chevy Camaro/Stylo</p>
    </div>
  );
}