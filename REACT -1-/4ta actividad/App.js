import React,{useState} from 'react'
import "./App.css";


const App = () => {
   
    const reyesG=[
      {
        nombre: "Ataúlfo",
        aficion: "comer toros sin pelar",
      },{
        nombre: "Recesvinto",
        aficion: "leer a Hegel en arameo",
      },{
        nombre: "Teodorico",
        aficion: "la cría del escarabajo en almíbar"
      }
    ] /* Termina el objeto "reyesG" */


    /* Para mandar a traer SOLAMENTE la información que nos interesa del objeto JS --> "reyesG"
       es  el nombre del objeto (obviamente) ; 0 porque es el primerísimo que fue declarado en el
       objeto (ya sabes como  funciona eso de los arrays) ; "nombre" porque es lo que nos interesa
       en esta situación */


    const [name,setName] = useState(reyesG[0].nombre); /* Vamos a desmenuzar todo esto, con el
    entendimiento que tengo en este momento. Por lo que estoy aprendiendo en este curso en React
    no se declara de la misma forma que en JS (aunque esta sección es para declarar JS "puro y duro").
    Entonces se declara la variable de una forma distinta. "name" es la variable en sí
    (en el condicional NO utilizamos esa variable) y "setName" es con lo que podremos
    MODIFICAR la variable. El profesor nos comenta que por convención hay que poner set
    y luego la cosa que vas a cambiar (que anteriormente declaraste). Es pura convención
    (buenas prácticas). Lo que está dentro del "useState" o mejor dicho su ARGUMENTO son
    los valores INICIALES y está super chingón porque ya no tienes que declararlos dentro
    de la función como en JS y HTML (solo, sin React). */


    /* DEJE UN MENTADO PUNTO FUERA DEL COMENTARIO Y ME MANDABA ERRORES QUE NI AL CASO.
    AGUAS CON ESO. POR UN PUNTITO FUERA DEL COMENTARIO SE ME FUERON 20 MINUTOS. */


    const [afition,setAfition] = useState(reyesG[0].aficion); /* Declaramos las variables y después
    (derecha) la herramienta con la que haríamos modificaciones a la variable ANTES declarada.Lo que
    está dentro del "useState" o mejor dicho su ARGUMENTO son los valores INICIALES y está super
    chingón porque ya no tienes que declararlos dentro de la función como en JS y HTML (solo)  */


    /*HE PUESTO "name" y "afition" para diferenciarlos de los atributos EN EL OBJETO JS (donde están
    los nombres y aficiones de los distintos REYES) */


    const [contador,setContador] = useState(1)




    const cambiar = () => { /* Esta es una forma MODERNA de declarar una función en JS */


        setContador(contador+1) /* Aquí estamos manipulando, cargando en memoría nuevos valores para
        "contador". Entonces es súper importante percatarse de que se hacen las cosas distintas a
        que si no se utilizará React */
         
        if (contador === 1){
        setName(reyesG[0].nombre) /* Hay que percatarse como con "setName" es con la que reasignamos
        el valor de la variable. Con React es diferente. Pero está muy chingón porque te permite
        trabajar con HTML (JSX) y JS en una misma página */
        setAfition(reyesG[0].aficion)
        }
       
        else if (contador === 2){
        setName(reyesG[1].nombre)
        setAfition(reyesG[1].aficion)
        }


        else if (contador===3){
        setName(reyesG[2].nombre)
        setAfition(reyesG[2].aficion)
        setContador(contador-2)
        }    
    } /* Termina la función "cambiar" */
 
    return (
      <div className='container'>
      <button id = "calc1" onClick={cambiar}>Cambiar </button>
      <h1>
          La afición principal de <span className='red' >{name}</span> es <span className='green'> {afition}</span>.
      </h1>  
      </div>
    )
  }
  export default App;
