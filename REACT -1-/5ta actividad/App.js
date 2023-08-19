import React,{useState} from 'react' /* Recordemos que si vamos a utilizar "useState()" hay que
exportarlo como se hizo en la anterior línea de código */
import "./App.css"; /* Se importa el archivo CSS */


const App = () => {
  /***********ZONA PARA DECLARACIÓN DE VARIABLES Y JS "PURO Y DURO",***********/


  const [eur,setEur] = useState() /*Declaramos las variables y la herramienta (derecha) con la que
  podemos hacer modificaciones a la misma variable (izquierda) */
  const [pesoArg,setPesoArg] = useState() /* Recordemos que en el argumento de useState(argumento)
  podemos poner valores iniciales. */
  const [pesoCol,setPesoCol] = useState()
  const[pesoMex,setPesoMex] = useState()
  const[dolar,setDolar] = useState()


  const cambios=[/* El objeto JS donde se aloja la información para los cambios de divisa */
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]


  const Boludo =()=>{ /* Le puse "Boludo" porque son pesos argentinos. XD */
    setPesoArg(eur*(cambios[1].cambio)) /* Recordemos que con set.. es con la que cambiamos el
    valor de la variable ANTES declarada (a la izquierda). Se está multiplicando el valor de "eur"
    (que es el que se introduzca en su respectivo INPUT y se enlaza con la función "modificar")
     por la tasa de cambio a peso argentino. */
    setPesoCol(eur*(cambios[2].cambio))
    setPesoMex(eur*(cambios[3].cambio))
    setDolar(eur*(cambios[4].cambio))
  }


 
  const modificar =(e)=>{
    setEur(e.target.value) /*Con esto cambiamos el valor de la variable "euro" a cualquier cosa
    que ingresemos en el "input" de Euro */
  } /* Sin esta función no FUNCIONARÁ nuestra calculadora (lo comprobé). Nótese que esta misma
   función está en el "input" de Euro. HACEMOS "target" donde vamos a poner información. */


   /*********** TERMINA LA ZONA PARA DECLARACIÓN DE VARIABLES Y JS "PURO Y DURO" ***********/


  return (
    <div className='container'>
     
       
        <input type="number" onChange = {modificar} /> Euro
        <br></br>
        <input  readOnly value={pesoArg}/> Peso argentino {/* Con "readOnly es para que
        (como el mismo nombre lo dice) solo sea de lectura. En otras palabras: NO PUEDES INGRESAR
        VALORES. Es un input, pero SOLO es para LECTURA" */}
        <br></br> {/* Este <br> me salvó el culo porque no se apilaban los elementos como normalmente
        sucede, sino que se ponian a lo horizontal. Probe con "display: flex;" y muchas más cosas, pero
        nada. Solo esta línea de código me sirvió para APILARLO. */}
        <input  readOnly value={pesoCol}/> Peso colombiano {/* Anteriormente tenía type = "number", pero
        se lo quite porque como es solo para lectura (readOnly), no tiene sentido eso de type = "number"*/}
        <br></br>
        <input  readOnly value={pesoMex}/> Peso mexicano
        <br></br>
        <input  readOnly value={dolar}/> Dolar
        <br></br>
        <button onClick={Boludo}>CALCULAR</button>
   
    </div>
 
   
  )
}


export default App;




/*
Ahorita que ya tengo más claro todo esto, el orden que estoy siguiendo es el siguiente:
1. Declara la variable -->   const[pesoMex,setPesoMex] = useState()
2. En la función que está enlazada al botón pongo --> setPesoMex(eur*(cambios[3].cambio))
(para este caso de peso mexicano)
3. Pongo el input con si respectivo "value" --> <input readOnly value={pesoMex}/> Peso mexicano
*/
