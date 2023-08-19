import { useState } from "react"; /* PRIMER PASO */


export const PromedioDeCincoCalificacionesPro = () => {
     /* SEGUNDO PASO => Recordar que los componentes deben comenzar por mayúsculas */

     /*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */
     const[materia1,setMateria1]=useState(0)
     const[materia2,setMateria2]=useState(0)
     const[materia3,setMateria3]=useState(0)
     const[materia4,setMateria4]=useState(0)
     const[materia5,setMateria5]=useState(0)
     const[output,setOutput]=useState(0)
     const[mensaje,setMensaje]=useState()
     const asignarElementoDeEntrada1 = (e) =>{/* Esta función es el mecanismo con el que desde HTML se envía aqui a React y se guarda en el elemento de entrada del algoritmo. */
     setMateria1(Math.floor(e.target.value)) 
     }
    const asignarElementoDeEntrada2 = (e) =>{setMateria2(Math.floor(e.target.value))/* Con Math.floor() para que sea una entidad numérica y no un string */ }
    const asignarElementoDeEntrada3 = (e) =>{setMateria3(Math.floor(e.target.value))}
    const asignarElementoDeEntrada4 = (e) =>{setMateria4(Math.floor(e.target.value))}
    const asignarElementoDeEntrada5 = (e) =>{setMateria5(Math.floor(e.target.value))}
     /*ELEMENTOS DE ENTRADA Y SALIDA DEL ALGORITMO, ASI COMO LA(S) FUNCIONES QUE RESPONDEN AL EVENTO(S) ONCHANGE */

     /* CUARTO PASO: Declarar la función que contiene el algoritmo puro y duro */

     const calcularPromedio = () =>{
        let acumulado=0/* Hay que poner el acumulado fuera del bucle for, porque de lo contrario, su valor nunca cambiará */
        let calificaciones = [
            materia1,
            materia2,
            materia3,
            materia4,
            materia5
        ]
        if(materia1>100 || materia2>100 || materia3>100 || materia4>100 || materia5>100){
            setOutput(`Error. Vuelve a ingresar los datos`)
            /*Abajo los estilos */
            document.querySelector(".mensajeaAlumno").style.backgroundColor="white" 
            document.querySelector(".mensajeaAlumno").style.color="white"
        }
        else{
            for(let i=0; i<calificaciones.length; i++){
                acumulado+=calificaciones[i]
              }
              let promedio = acumulado/calificaciones.length

              {promedio<70 ? ( /* En esta línea se declara el operador ternario */
                setMensaje(`Reprobatorio`),
                /*Abajo los estilos */
                document.querySelector(".mensajeaAlumno").style.backgroundColor="red",
                document.querySelector(".mensajeaAlumno").style.color="black"
    
            ):( 
                setMensaje(`Aprobatorio`),
                /*Abajo los estilos */
                document.querySelector(".mensajeaAlumno").style.backgroundColor="green",
                document.querySelector(".mensajeaAlumno").style.color="black"
                
            )}
            setOutput(`Tu promedio es igual a ${promedio}`)
            

        }
        /*
        Vale la pena hacerlo primero con JS puro y ya después con React, así lo he hecho en esta ocasión.
        YA ME DI CUENTA QUE LAS FUNCIONES DE ONCHANGE EN UNA SOLA LÍNEA DE CÓDIGO LAS DECLARAS Y LES PONES EL Math.floor PARA QUE NO CONCATENE LOS NÚMEROS
        FUNCIONA BIEN
         */
     }
  return (
    <>
    <h1>Promedio de calificaciones</h1>
    <p>Ingresa tus calificaciones</p>
    <input type="number" placeholder="Materia 1" onChange={asignarElementoDeEntrada1} />
    <br />
    <br />
    <input type="number" placeholder="Materia 2" onChange={asignarElementoDeEntrada2} />
    <br />
    <br />
    <input type="number" placeholder="Materia 3" onChange={asignarElementoDeEntrada3} />
    <br />
    <br />
    <input type="number" placeholder="Materia 4" onChange={asignarElementoDeEntrada4} />
    <br />
    <br />
    <input type="number" placeholder="Materia 5" onChange={asignarElementoDeEntrada5} />
    <br />
    <br />
    <button className="calc1" onClick={calcularPromedio}>Calcular</button>
    <p>{output}</p>
    <div className="mensajeaAlumno">
        <p>{mensaje}</p>
    </div>

    </>
  )
}
