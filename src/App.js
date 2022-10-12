import React from "react";
import "./style.css";
import Carro from './Carro.js';
import Moto from './Moto';

export default function App() {
  const estiloH1 = {
    color:"Pink"
  };

  const estiloDiv= {

    backgroundColor: 'Black',
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
