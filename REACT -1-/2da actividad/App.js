import sisebuto from "./rey_sisebuto.png";/** Para invocar al rey sisebuto que está en el folder "src" */
import atanagildo from "./rey_atanagildo.png";
import {useRef} from "react";
import './App.css'; /* Es REMARCABLE que en React se invocan las cosas de una
forma distinta*/


function App() {
  /***********ZONA PARA DECLARACIÓN DE VARIABLES Y JS "PURO Y DURO",***********/
  /*NOTA: En lo que sea referente a JS no hay necesidad de escribir con {} como si
    fuera JSX */
  const refCaja = useRef(); {/* El profe hace esto para hacer el código más claro
  evitando tanto paréntesis y así*/}


  function incrementar(e){
    e.target.innerHTML = Number(e.target.innerHTML)+1;{/*El profe dice que en el parámetro de esta
    función pudimos haber puesto lo que sea,lo interesante es que hace clic en F12 y se va especifi-
    camente al "target" ahi se percata de que es "div-caja". Entonces e.target.innerHTML es lo que hay
    dentro de "div-caja. Todo eso se ve en el video --> https://www.youtube.com/watch?v=mu5CUU3ZtpE&t=1610s
    en el 16:30" */}
    if(e.target.innerHTML>7){/*Este es el condicional que se encarga de que cuando se pasa de 7, regresa
    al uno y se pone el color rojo. */
      e.target.style.backgroundColor = "red"


    }


    if(e.target.innerHTML > 9){ /*Este es el condicional que se encarga de que cuando se pasa de 10, regresa
    al uno y se quita el color rojo, sustituyéndolo por un color blanco. */
      e.target.innerHTML = 1
      e.target.style.backgroundColor = "white"
    }


  }/*Termina la función incrementar*/


  function shift(j){/*Esta función es para cambiar las imágenes de los reyes y esta ANEXADA  a la imagen que está más
  abajo en el código JSX.*/
    if(j.target.src.includes("atanagildo")){/* Este es el condicional que si la fuente incluye algo que diga
    "atanagildo" a la hora de hacer hacer clic en la imagen esta cambiará en el target que es "sisebuto" */
      j.target.src=sisebuto;
    }


    else{/* Aquí es lo opuesto al condicional que está más arriba en esta MISMA función */
        j.target.src=atanagildo;
        }
 
  }/*Termina la función "shift" */
   
  /*********** TERMINA LA ZONA PARA DECLARACIÓN DE VARIABLES Y JS "PURO Y DURO" ***********/
  return (
    <>
    <div ref={refCaja} className="caja" onClick={incrementar}>1</div>
    <div> <img onClick={shift} src={atanagildo}/></div>
    </>
  );
}{/*Termina la función App */}


export default App; /*Ahorita no sé para qué es eso */
