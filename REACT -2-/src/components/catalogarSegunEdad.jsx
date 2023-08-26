import { useState } from "react"; /* PRIMER PASO */


export const CatalogarSegunEdad = () => {
/* SEGUNDO PASO => Recordar que los componentes deben comenzar por mayúsculas */

/* TERCER PASO: Voy a declarar las cosas que sé que forzosamente tienen que venir en este algoritmo: los elementos de entrada y salida, asi como la función que responde al evento onChange */

/*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */
    const[tuEdad,setTuEdad]=useState(0) /* Elemento de entrada del algoritmo */
    const inputElement = (e) => { setTuEdad(Math.floor(e.target.value))}
    const[clasificacion,setClasificacion]=useState(0) /*Elemento de salida del algoritmo*/
/*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */

/* CUARTO PASO: Declarar la función que contiene el algoritmo puro y duro */
    const calcularClaseDeEdad = () =>{
        if(0<tuEdad && tuEdad<14){
            setClasificacion(`Eres un niño`)        
        }
        else if(14<=tuEdad && tuEdad<25){
            setClasificacion(`Eres un joven`)
        }
        else if(25<=tuEdad && tuEdad<70){
            setClasificacion(`Eres un adulto/a`)
        }
        else if(70<=tuEdad && tuEdad<125){
            setClasificacion(`Eres un anciano/a`)
        }
        else{
            setClasificacion(`Nadie tiene edad negativa o ha vivido tanto tiempo`)
        }

    }
/*FUNCIONA BIEN */

  return (
    <>
    <h1>Catálogo según edad</h1>
    <p>Introduce tu edad y el programa te dirá a que clase de edad perteneces</p>
    <input type="number" placeholder="Tu edad" onChange={inputElement} />
    <br />
    <br />
    <button className="calc1" onClick={calcularClaseDeEdad}>Calcular</button>
    <p>{clasificacion}</p>

    </>
  )
}
