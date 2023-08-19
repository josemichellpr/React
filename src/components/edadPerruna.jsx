import { useState} from "react"; /* Abuela de batman, hay que importar este hook, ya que lo vamos a utilizar  (1er paso)*/

export const EdadPerruna = () => {
    /* SEGUNDO PASO => Recordar que los componentes deben comenzar por mayúsculas */

    /*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE Y LAS CONSTANTES */
    const[edadHumana, setEdadHumana]=useState(0)/*input */
    const [edadPerruna, setEdadPerruna]=useState(0)/*output */
    const MULTIPLICADOR_EDAD_PERRO = 7
    const PRIMER_ANIO_PERRUNO = 4
    const inputElement = (e) =>{setEdadHumana(Math.floor(e.target.value))}
     /*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE Y LAS CONSTANTES */

    
    /* CUARTO PASO: Declarar la función que contiene el algoritmo puro y duro */
    const calcularEdadPerruna = () =>{
        {edadHumana>0 ? (
            setEdadPerruna(PRIMER_ANIO_PERRUNO+(edadHumana-1)*MULTIPLICADOR_EDAD_PERRO)
        ):(
            setEdadPerruna(0)
        )}
    }

  return (
    <>
    <h1>Conversor de edades</h1>
    <input type="number"  placeholder="Tu edad" onChange={inputElement}/>
    <br></br>
    <br></br>
    <button className="calc1" onClick={calcularEdadPerruna}>Calcular</button>
    <p>{edadPerruna} años es tu edad perruna</p>

    </>
  )
}
