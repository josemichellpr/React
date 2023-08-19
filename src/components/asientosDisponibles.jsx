import { useState } from "react"; /* PRIMER PASO */


export const AsientosDisponibles = () => {
/* SEGUNDO PASO => Recordar que los componentes deben comenzar por mayúsculas */
  const ASIENTOS_TOTALES = 40
/* TERCER PASO: Voy a declarar las cosas que sé que forzosamente tienen que venir en este algoritmo: los elementos de entrada y salida, asi como la función que responde al evento onChange */

/*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */
  const[asientosOcupados,setAsientosOcupados]=useState(0)
  const[asientosReservados,setAsientosReservados]=useState(0)
  const[asientosDisponibles,setAsientosDisponibles]=useState(0)
  const inputElement1 = (e) =>{setAsientosOcupados(Math.floor(e.target.value)) /* El método Math.floor(), me salvó porque React, estaba concatenando los "números". Los pongo entre comillas */}
  const inputElement2 = (e) =>{setAsientosReservados(Math.floor(e.target.value))}
/*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */

/* CUARTO PASO: Declarar la función que contiene el algoritmo puro y duro */
  const calcularAsientosDisponibles = ()=>{
    {/*Vamos a usar el operador ternario */
      asientosOcupados<0 ||asientosReservados<0 || asientosOcupados>ASIENTOS_TOTALES || asientosReservados>ASIENTOS_TOTALES ||(asientosOcupados+asientosReservados)> ASIENTOS_TOTALES ? (
           setAsientosDisponibles(`Error.Vuelve a ingresar los datos`)
        ):(
            setAsientosDisponibles(`${ASIENTOS_TOTALES-(asientosReservados+asientosOcupados)} son los asientos disponibles.`)
        )
    }
    } /* Termina la función */

/*FUNCIONA BIEN */
  return (
    <>
    <h1>¿Hay asientos disponibles?</h1>
    <p>40 son los asientos disponibles</p>
    <input type="number" placeholder="Asientos ocupados" onChange={inputElement1}/>
    <br />
    <input type="number" placeholder="Asientos reservados" onChange={inputElement2}/>
    <br />
    <br />
    <button className="calc1" onClick={calcularAsientosDisponibles}>Calcular</button>
    <p>{asientosDisponibles}</p>
    </>
  )
}
