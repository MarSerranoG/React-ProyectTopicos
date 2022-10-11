import React from "react";
import "./style.css";
import Carro from './Carro.js';
import Moto from './Moto';

export default function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p> Mar :)</p>

      <Carro  
      marca="Camaro96" 
      imagen = "https://s1.cdn.autoevolution.com/images/news/someone-has-recreated-the-chevrolet-camaro-from-gorillazs-stylo-for-gts-143187-7.jpg"
      />
      <p>1969 Chevy Camaro/Stylo</p>

      <Moto 
      marca = "Harley Davidson CVO Limited"
      imagen = "https://www.formulamoto.es/wp-content/uploads/2021/08/triumph_rocket_iii_tfc.jpg"
      />
      <p>Motor 2. Twin-Cooled™ Milwaukee-Eight™ 117.</p>


    </div>
  );
}
