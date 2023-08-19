import { useState } from "react"; /* PRIMER PASO */

export const BirthdayYear = () => {
/* SEGUNDO PASO => Recordar que los componentes deben comenzar por mayúsculas */

/* TERCER PASO: Voy a declarar las cosas que sé que forzosamente tienen que venir en este algoritmo: los elementos de entrada y salida, asi como la función que responde al evento onChange */

/*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */
  const FECHA = 2023
  const[edad, setEdad]=useState("") 
  const [anio, setAnio]=useState("")
  const inputElement = (e) =>{setEdad(Math.floor(e.target.value))} /*Math.floor() para rigor matemático */
/*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */

/* CUARTO PASO: Declarar la función que contiene el algoritmo puro y duro */
  const calcular_anio = () =>{setAnio(FECHA -edad )}

/*FUNCIONA BIEN */
  return (
  <>
   <h1>Calculadora de año de nacimiento</h1>
   <p>Ingresa tu edad y te diré aproximadamente tu año de nacimiento</p>
   <input type="number" placeholder="Tu edad" onChange={inputElement}/>
   <br></br>
   <br></br>
   <button className="calc1" onClick={calcular_anio}>Calcular</button>
   <p>Tu año de nacimiento aproximado es {anio}</p>
  </>
  )
}


