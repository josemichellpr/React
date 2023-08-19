import { useState } from "react"; /* PRIMER PASO */


export const SumatoriaSimpleaLimiteEstablecido = () => {
/* SEGUNDO PASO => Recordar que los componentes deben comenzar por mayúsculas */

/*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */
const[limite,setLimite]=useState() /* input */
const[resultado,setResultado]=useState(0) /*output */
const asignarElementoDeEntrada = (e) =>{setLimite(Math.floor(e.target.value))}
/*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */

/* CUARTO PASO: Declarar la función que contiene el algoritmo puro y duro */
const calcularSumatoria = () =>{
    let i=0,sumatoria=i,acumulado=`0`   
    while(!(i===limite)){/* Este algoritmo fue diseñado con apoyo de Raptor, ahí el valor booleano para entrar al bucle es false, por eso se usa aquí el operador lógico de negación | EL OPERADOR TERNARIO NO RECONOCE LOS BUCLES while y for DENTRO DE SU ESTRUCTURA. OJO CON ESO */
        i+=1
        sumatoria+=i 
        acumulado+=` + ${i}` //acumulado=acumulado + ` + ${i}`    
      } 

    {limite<0 ? ( /*Operador ternario */
        setResultado(`Error.Vuelve a ingresar los datos`)
    ):( 
        setResultado(`El resultado de la sumatoria es ${sumatoria}`)
    )}

    setLimite(`${acumulado} = ${sumatoria}`) /* ESTE ES UN HACK QUE ENCONTRÉ. PORQUE NO PUEDES PONER DIRECTAMENTE <p>{acumulado}</p>  PORQUE NO FUE DECLARADO CON LOS HOOKS como con "limite" y "resultado"  */ /* DE HECHO NO ES NECESARIO, PUEDES HACERLO COMO EN ARCHIVOS DE ESTA MISMA CARPETA COMO "sumatoriaAlaN". NO ES NECESARIO ESTE HACK, PERO LO DEJO PORQUE ES UNA CURIOSIDAD. */
}
/*
 MUCHO OJO: VA CONTRA LAS REGLAS DE LOS HOOKS(useState()), PONER DENTRO DE CONDICIONALES ANIDADOS Y BUCLES A LOS MISMOS HOOKS. ES ALGO A TENER EN CUENTA.
OTRA COSA: DENTRO DEL OPERADOR TERNARIO (el que se parece a if, else, pero más compacto, está en este código) NO PONGAS BUCLES, PORQUE NO LOS RECONOCE. 
*/

  return (
    <>
    <h1>Sumatoria a límite establecido</h1>
    <p>Ingresa el límite de la sumatoria</p>
    <p>P/E: La sumatoria del 1 al 10 es igual a 55</p>
    <input type="number" placeholder="Límite" onChange={asignarElementoDeEntrada} />
    <br />
    <br />
    <button className="calc1" onClick={calcularSumatoria}>Calcular</button>
    <p>{limite}</p>
    <p>{resultado}</p>
    </>
 )
 /* FUNCIONA BIEN */
}

