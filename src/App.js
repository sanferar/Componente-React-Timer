import './hojas-estilo/App.css';
import React from 'react';
import Timer from './componentes/timer.jsx';

function App() {

//La siguiente constante para ajustar el tiempo del temporizador
const tiempoInicial = 60;

  return(
    <div className='contenedor-padre'>
       <Timer 
       tiempoInicial = {tiempoInicial} />
    </div>
   
  )
}

export default App;


