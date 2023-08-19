import { useState } from "react"; /* PRIMER PASO */


export const Contador = () => {
/* SEGUNDO PASO => Recordar que los componentes deben comenzar por mayúsculas */

    const [output, setOutput]=useState(0)
    
    const sumar = () =>{setOutput(output+1)}

    const restar = () =>{
        setOutput(output-1)
        if(output<=0){
            setOutput(output*0)
        }
    }

    const reiniciar = () =>{setOutput(output*0)}


  return (
    <>
    <h1>Contador de personas</h1>
    <p>{output}</p>
    <button className="calc1" onClick={sumar}>Sumar</button> 
    <br />
    <br />
    <button className="calc1" onClick={restar}>Restar</button>
    <br />
    <br />
    <button className="calc1" onClick={reiniciar}>Reiniciar</button>
    </>
  )
}

/* 
 FUNCIONA BIEN
 */


