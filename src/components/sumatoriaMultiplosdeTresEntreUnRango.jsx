import { useState } from "react"; /* PRIMER PASO */

export const SumatoriaMultiplosdeTresEntreUnRango = () => { 
/* SEGUNDO PASO => Recordar que los componentes deben comenzar por mayúsculas */

/* TERCER PASO: Voy a declarar las cosas que sé que forzosamente tienen que venir en este algoritmo: los elementos de entrada y salida, asi como la función que responde al evento onChange */

/*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */
const[inicioDeSumatoria,setInicioDeSumatoria]=useState(0) /* input */ /* CUIDADO: Si no declaras cero (0) dentro del useState, si los inputs están vacios y presionas el botón, la página se "colapsa" y la tienes que cerrar */
const[finDeSumatoria,setFinDeSumatoria]=useState(0) /* input */
const[acumulado,setAcumulado]=useState(0) /*output*/ /* Este es el que vamos a usar para presentar la sumatoria de los múltiplos de tres */
const[output,setOutput]=useState(0)
const asignarElementoDeEntrada1 = (e) =>{/* Esta función es el mecanismo con el que desde HTML se envía aqui a React y se guarda en el elemento de entrada del algoritmo. */
setInicioDeSumatoria(Math.floor(e.target.value)) /* Con Math.floor() para que sea una entidad numérica y no un string */
}
const asignarElementoDeEntrada2 = (e) =>{
setFinDeSumatoria(Math.floor(e.target.value)) 
}
/*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */


/* CUARTO PASO: Declarar la función que contiene el algoritmo puro y duro */
const calcularSumatoria = () =>{
    let i = 0, variable = inicioDeSumatoria,suma_de_multiplos_de_tres = 0,acumulado=`0`/* No puedes poner en ves de "acumulado", setAcumulado, porque debe recargarse dentro del bucle y recuerda que no se pueden meter hooks dentro de bucles.  */
    while(!(i===(finDeSumatoria-inicioDeSumatoria)+1)){/* EL OPERADOR TERNARIO NO RECONOCE LOS BUCLES while y for DENTRO DE SU ESTRUCTURA. OJO CON ESO * */
    if(variable%3===0 && variable!==0){/* Tuve que poner variable diferente de cero, para que en el acumulado no me repitiera dos veces el cero */
        suma_de_multiplos_de_tres+=variable
        acumulado+=` + ${variable}` /* Si esta variable "acumulado" la pones fuera del if, no recarga los múltiplos de tres */
    }
    i+=1
    variable+=1  
    
}/* Termina bucle WHILE */

{finDeSumatoria<inicioDeSumatoria ? (
    setOutput(`Error.Vuelve a ingresar los datos`)
):( 
    setOutput(`El resultado de la sumatoria es ${suma_de_multiplos_de_tres}`),
    setAcumulado(`${acumulado} = ${suma_de_multiplos_de_tres}`)
    
)}

/*
MUCHO OJO: VA CONTRA LAS REGLAS DE LOS HOOKS(useState()), PONER DENTRO DE CONDICIONALES ANIDADOS Y BUCLES A LOS MISMOS HOOKS. ES ALGO A TENER EN CUENTA.
OTRA COSA: DENTRO DEL OPERADOR TERNARIO (el que se parece a if, else, pero más compacto, está en este código) NO PONGAS BUCLES, PORQUE NO LOS RECONOCE. 
*/

/*FUNCIONA BIEN */
}


  return (
    <>
    <h1>Sumatoria de números múltiplos de tres segun limite establecido</h1>
    <p>Tu decides el inicio y fin de la sumatoria.</p>
    <input type="number" placeholder="Inicio de la sumatoria" onChange={asignarElementoDeEntrada1} />
    <br />
    <input type="number" placeholder="Fin de la sumatoria" onChange={asignarElementoDeEntrada2} />
    <br />
    <br />
    <button className="calc1" onClick={calcularSumatoria}>Calcular</button>
    <p>{output}</p>
    <p>{acumulado}</p>
    </>
  )
}
