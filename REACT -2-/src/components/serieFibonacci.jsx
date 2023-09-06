import { useState } from "react"; /* PRIMER PASO */



export const SerieFibonacci = () => {
    /* SEGUNDO PASO => Recordar que los componentes deben comenzar por mayúsculas */

    /*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE Y LAS CONSTANTES */
    const[inputLimite,setInputLimite]=useState(0)
    const[output,setOutput]=useState()
    const asignarElementoDeEntrada = (e) =>{setInputLimite(Math.floor(e.target.value))}
    /*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE Y LAS CONSTANTES */

    /* CUARTO PASO: Declarar la función que contiene el algoritmo puro y duro */
    const calcularSerieFibonacci = () =>{
        let i=0, acumulado=0,j=3,array = [], copiaDeArray = ``, array2=[0,1,1], copiaDeArray2 = `0,1,1`
        if(inputLimite < 0){ /* Este if es para que no se colapse el programa */
            setOutput(`Error.Vuelve a ingresar los datos`)
        }   

        else{
            if(inputLimite<3){
                while(i!==inputLimite){
                acumulado=acumulado+i 
                array.push(acumulado) /* Para meter en el último elemento del array */
                copiaDeArray += `${array[i]},`
                i++
            }
            setOutput(copiaDeArray)
            
            }

            else{ /* Este es el algoritmo para generar elemtnos de la serie, propiamente hablando */
            while(j!==inputLimite){
            array2[j]=array2[j-1]+array2[j-2]
            array2.push[j]
            copiaDeArray2 += `, ${array2[j]}`
            j++   // j=j+1
            }
            setOutput(copiaDeArray2)
            }
                
            }
        }

        const calcularTermino = () => {
            let i=0, acumulado=0,j=3, array = [], array2=[0,1,1]
            if(inputLimite < 0){ /* Este if es para que no se colapse el programa */
            setOutput(`Error.Vuelve a ingresar los datos`)
          }
          
          else{
             if(inputLimite<3){
              while(i!==inputLimite){
              acumulado=acumulado+i 
              array.push(acumulado) /* Para meter en el último elemento del array */
               i=i+1  
            }
            setOutput(array[i-1])
            
          }
          
          else{ /* Este es el algoritmo para generar elemtnos de la serie, propiamente hablando */
            while(j!==inputLimite){
            array2[j]=array2[j-1]+array2[j-2]
            array2.push[j]
            j++   // j=j+1
          }
          setOutput(array2[j-1])
          }
          }
        }

  return (
    <>
    <h1>Secuencia Fibonacci</h1>
    <label htmlFor="">Límite</label>
    <br />
    < input type="number" onChange={asignarElementoDeEntrada} />
    <br />
    <br />
    <button className="calc1" onClick={calcularSerieFibonacci}>Mostrar secuencia</button>
    <br />
    <br />
    <button className="calc1" onClick={calcularTermino}>Calcular término</button>
    <p>{output}</p>
    </>
  )
}



