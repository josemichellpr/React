import { useState } from "react";/* PRIMER PASO */


export const SumatoriaAlaN = () => {
    /* SEGUNDO PASO => Recordar que los componentes deben comenzar por mayúsculas */

    /*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */
    const[limite,setLimite]=useState(0) /* input */ /* CUIDADO: Si no declaras cero (0) dentro del useState, si los inputs están vacios y presionas el botón, la página se "colapsa" y la tienes que cerrar */
    const[exponente,setExponente]=useState(0) /*input */
    const[output,setOutput]=useState(0)
    const[acumulado,setAcumulado]=useState(0)
    const asignarElementoDeEntrada1 = (e) =>{/* Esta función es el mecanismo con el que desde HTML se envía aqui a React y se guarda en el elemento de entrada del algoritmo. */
    setLimite(Math.floor(e.target.value)) 
    }
    const asignarElementoDeEntrada2 = (e) =>{
    setExponente(Math.floor(e.target.value)) /* Con Math.floor() para que sea una entidad numérica y no un string */
    }
    /*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */

    /* CUARTO PASO: Declarar la función que contiene el algoritmo puro y duro */
    const calcular = () =>{
        let i=0, sumatoriaAlaN=0, acumulado=`0`

      if(limite<0 || limite>10 || exponente<0 || exponente>5 ) {
        setOutput(`Error. Vuelve a ingresar los datos `)
        document.querySelector(".mensajeaAlumno").style.backgroundColor = `red` /* Se rotula el color de fondo ROJO */
        setAcumulado(``)
      }
      else{
        document.querySelector(".mensajeaAlumno").style.backgroundColor = `green`
        while(!(i===limite)){
            i+=1 
            sumatoriaAlaN+=i**(exponente) //sumatoriaAlaN=sumatoriaAlaN+i**(exponente)
            acumulado+=` + ${i**(exponente)}` //acumulado=acumulado + ` + ${i**(exponente)}` 
          }
        setAcumulado(`${acumulado} = ${sumatoriaAlaN}`) 
        setOutput(`El resultado de la sumatoria es ${sumatoriaAlaN}`)
       }
        
          
        
      }
      /* 
      Con el operador ternario no me aceptaba los dos filtros de "limite" y "exponente" en el mismo argumento de dicho operador ternario y hasta donde sé no se puede meter un bucle dentro de ese operador, pues me vi forzado a usar esta estructura. if, else 
      */

      /*
      FUNCIONA BIEN
      */
      
    

  return (
    <>
    <h1>Sumatoria a límite establecido</h1>
    <p>Ingresa el límite de la sumatoria y el exponente de la potencia</p>
    <p>El exponente debe ser un número entero positivo y menor que 6.</p>
    <label htmlFor="">Límite</label>
    <br />
    <input type="number" placeholder="límite" onChange={asignarElementoDeEntrada1} />
    <br />
    <br />
    <label htmlFor="">Exponente</label>
    <br />
    <input type="number" placeholder="exponente" onChange={asignarElementoDeEntrada2} />
    <br />
    <br />
    <button className="calc1" onClick={calcular}>Calcular</button>
    <p>{acumulado}</p>
    <div className="mensajeaAlumno">
        <p>{output}</p>
    </div>
    </>
  )
  }
