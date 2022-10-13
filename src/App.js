import React from "react";
import "./style.css";
import Carro from './Carro.js';
import Moto from './Moto';

export default function App() {
  const estiloH1 = {
    color:"Purple"
  };

  const estiloDiv= {
    fontFamily:"Consolas"
  }

  return (
    <div style={estiloDiv}>
      <h1 style={estiloH1}>Hello React!</h1>
      <p style={estiloH1} > Mar :)</p>

    

      <Carro  
      marca="Camaro96" 
      imagen = "https://s1.cdn.autoevolution.com/images/news/someone-has-recreated-the-chevrolet-camaro-from-gorillazs-stylo-for-gts-143187-7.jpg"
      />

      <Moto 
      marca = "Harley Davidson CVO Limited"
      imagen = "https://www.formulamoto.es/wp-content/uploads/2021/08/triumph_rocket_iii_tfc.jpg"
      />
      


    </div>
  );
}

/*
PROFE https://stackblitz.com/@fjml1983
import React from 'react';
import './style.css';
import Car from './car/Car.js';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Car
        nombre="Rayo McQueen"
        modelo="Chevrolet Corvette C6 de NASCAR"
        imagen="https://i.ytimg.com/vi/2gRcvS2ltjE/maxresdefault.jpg"
        descripcion="El auto mas veloz de la serie de peliculas de Cars."
        style={{ margin: '6px' }}
      />
      <Car
        nombre="Mate"
        modelo="International L-170"
        imagen="https://www.venta-de.com.ve/sh-img/latest_grua%2Bmate%2Bcars.jpeg"
        descripcion="El Compañero fiel del auto veloz de la pelicula Cars."
        style={{ margin: '6px' }}
      />
    </div>
  );
}
*/