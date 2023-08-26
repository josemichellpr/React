import { useState } from "react"; 
import TeoremaDePitagoras from "./images/TeoremaDePitagoras.png";


export const CalculadoraTeoremaDePitagoras = () => {
     /*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE Y LAS CONSTANTES */
    const[inputHipotenusa,setInputHipotenusa]=useState(0)
    const[inputCateto,setInputCateto]=useState(0)
    /*const[cateto2,setCateto2]=useState()*/
    const[output,setOutput]=useState(0)
    const asignarElementoDeEntrada1 = (e) =>{
        setInputHipotenusa(Math.floor(e.target.value))
    }
    const asignarElementoDeEntrada2 = (e) =>{
        setInputCateto(Math.floor(e.target.value))
    }
     /*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE Y LAS CONSTANTES */

     /* CUARTO PASO: Declarar la función que contiene el algoritmo puro y duro */

     const calcularCateto = () =>{
        let catetoElevadoalCuadrado = inputHipotenusa**2 - inputCateto**2
        let catetoElevadoalCuadradoporMenosuno = -1*catetoElevadoalCuadrado /* Si el argumento es negativo, mandará un error (muchas calculadoras fallan con NUMEROS IMAGINARIOS), en ese caso deberá multiplicar por -1, para enmendar el fallo.  */
        let catetoObtenidoMedianteRaizcuadrada = Math.sqrt(catetoElevadoalCuadradoporMenosuno).toFixed(4) /*Aplica la raiz cuadrada a catetoElevadoalCuadradoporMenosuno con cuatro decimales*/
        let catetoObtenidoMedianteRaizcuadrada2 = Math.sqrt(catetoElevadoalCuadrado).toFixed(4)

         {catetoElevadoalCuadrado<0 ? (
            setOutput(`El cateto es igual a ${catetoObtenidoMedianteRaizcuadrada} unidades de longitud.`)     
        ):(
            setOutput(`El cateto es igual a ${catetoObtenidoMedianteRaizcuadrada2} unidades de longitud.`)
        )}


     }

     const calcularHipotenusa = () =>{
        let catetoDos= inputHipotenusa /* Este es un hack que idee para no declarar otro hook, porque se si no se utiliza la variable constante y el setLoQueSea no se visualiza la página */
        let hipotenusaObtenidaMedianteRaizcuadrada = Math.sqrt(inputCateto**2 + catetoDos**2)
        let hipotenusaObtenidaMedianteRaizcuadradaConcuatroDecimales = hipotenusaObtenidaMedianteRaizcuadrada.toFixed(4)
        setOutput(`La hipotenusa tiene una magnitud igual a ${hipotenusaObtenidaMedianteRaizcuadradaConcuatroDecimales} unidades de longitud.`)

     }

/* FUNCIONA MUY BIEN */
  return (
    <>
    <h1>TEOREMA DE PITÁGORAS - CALCULADORA</h1>
    <img src={TeoremaDePitagoras} alt="" />
    <h2>Ingresa tus valores</h2>
    <input type="number" onChange={asignarElementoDeEntrada1}/>
    <input type="number" onChange={asignarElementoDeEntrada2}/>
    <br />
    <br />
    <button className="calc1" onClick={calcularCateto}>ME FALTA UN CATETO</button>
    <br />
    <br />
    <button className="calc1" onClick={calcularHipotenusa}>ME FALTA LA HIPOTENUSA</button>
    <p>{output}</p>


    </>
  )
}
