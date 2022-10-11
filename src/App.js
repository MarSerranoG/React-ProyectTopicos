import React from "react";
import "./style.css";
import Carro from './Carro.js';
import Moto from './Moto';

export default function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Carro/>
      <p>Carro chido de Gorillaz</p>
      <Moto/>
      <p>Moto chida osi osi</p>
    </div>
  );
}
