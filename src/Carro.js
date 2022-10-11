import React from "react";
import "./style.css";

export default function Carro(props) {
  return (
    <div>
      <h1>Soy un carro {props.marca}</h1>
      <img src={props.imagen} 
      alt = "Imagen del carro"
      width="300"
      />
    </div>
  );
}