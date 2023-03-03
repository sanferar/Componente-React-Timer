import React from "react";
import { useState, useEffect } from "react";
import '../hojas-estilo/timer.css';
import { BsFillClockFill } from "react-icons/bs";


function Timer({ tiempoInicial }) {

  const [tiempo, setTiempo] = useState(tiempoInicial);

  useEffect(() => {
    const intervaloCuentaAtras = setInterval(() => {
      setTiempo((tiempoAnterior) => tiempoAnterior - 1);
    }, 1000);

    if (tiempo === 0) {
      clearInterval(intervaloCuentaAtras);
    }
    return () => {
      clearInterval(intervaloCuentaAtras);
    };
  }, [tiempo]);

  const minutes = Math.floor(tiempo / 60);
  const seconds = tiempo % 60;

    return(
        <div className="contenedor-timer">
            <div className="contendor-timer-icono">
                <div className="contenedor-timer-icono--icono" >
                    <BsFillClockFill
                    className="icono-bootstrap"
                    />
                </div>
            </div>
            <div className="contendor-timer-reloj">
                <div className="contenedor-timer-reloj--live" >{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</div>
            </div>
        </div>
    )

}


export default Timer;