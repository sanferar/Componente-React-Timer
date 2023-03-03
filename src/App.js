import './hojas-estilo/App.css';
import React from 'react';
import Timer1 from './componentes/timer1.jsx';
import Timer2 from './componentes/timer2.jsx';
import Timer3 from './componentes/timer3.jsx';

function App() {

  //La siguiente constante para ajustar el tiempo del temporizador
  const tiempoInicialTimer1 = 60;
  const tiempoInicialTimer2 = 120;
  const tiempoInicialTimer3 = 240;

  return (
    <div className='contenedor-padre'>
      <Timer1
        tiempoInicial={tiempoInicialTimer1} />

      <Timer2
        tiempoInicial={tiempoInicialTimer2} />

      <Timer3 tiempoInicial={tiempoInicialTimer3} />



    </div>

  )
}

export default App;


