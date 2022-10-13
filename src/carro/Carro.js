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

/*
PROFE
import React from 'react';
import './car.css';

export default function Car(props) {

  //Style from: https://www.w3schools.com/howto/howto_css_cards.asp
  const estiloDivCard = {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '5px',
    maxWidth: '300px',
    marging: 'auto',
  };

  const estiloImgCard = {
    width: '100%',
    borderRadius: '5px 5px 0 0',
  };

  const estiloDivCardContenedor = {
    padding: '0px 16px 16px',
  };

  return (
    <div style={props.style}>
      <div style={estiloDivCard}>
        <img style={estiloImgCard} src={props.imagen} alt="Imagen del carro" />
        <div style={estiloDivCardContenedor}>
          <h2>{props.nombre}</h2>
          <p>
            <b>Descripción:</b> {props.descripcion}
          </p>
          <em>
            <b>Modelo:</b> {props.modelo}
          </em>
        </div>
      </div>
    </div>
  );
}

*/