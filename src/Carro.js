import React from "react";
import "./style.css";

export default function Carro(props) {

  const estiloDiv= {

    backgroundColor: 'Pink',
    fontFamily:"Verdana",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
  }

  const estiloH2 ={
    color: "Purple"
  };

  const estiloImg ={
    width:'100%'
  };

  return (
    <div style={estiloDiv}>
      <h2 style={estiloH2}>Soy un carro {props.marca}</h2>
      <img style={estiloImg}src={props.imagen} 
      alt = "Imagen del carro"
      width="300"
      />
    <p style={estiloH2}>1969 Chevy Camaro/Stylo</p>
    </div>
  );
}