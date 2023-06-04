import React,{useState} from 'react' /* Recordemos que si vamos a utilizar "useState()" hay que
exportarlo como se hizo en la anterior línea de código */
import "./App.css"; /* Se importa el archivo CSS */
import Act1 from "./Act1"
import img0 from "./rey_atanagildo.png"
import img1 from "./rey_ervigio.png"
import img2 from "./rey_ataulfo.png"
import img3 from "./rey_leogivildo.png"
import img4 from "./rey_sisebuto.png" /** Para invocar al rey sisebuto que está en el folder "src" */
import img5 from "./rey_recesvinto.png"
import img6 from "./rey_teodorico.png"




const App = () => {
  /***********ZONA PARA DECLARACIÓN DE VARIABLES Y JS "PURO Y DURO",***********/
  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]


  return (
    <>
    <h1>Actividad1</h1>
    <Act1 reyes={reyes}/>
    </>
           
   
      )
  }

export default App;


/*
Intenté realizar la actividad, no creas que no. Pero me he percatado que "me falta" comprender un
poco más como funciona React, por ejemplo lo de los componentes (que es algo que el profe de Scrimba
se la pasaba diciendo, que React es "deacomposable" y todo eso) no lo he sabido aplicar. Está exce-
lente que lo hago como Dios me da a entender (y la mayoría de las veces, lo logro), pero en esta act.
si me quiero dejar guiar, para implementar a mi habilidades el React y en CSS.


Enlace al video de la actividad :
https://www.youtube.com/watch?v=f167jT11sFo&list=PLRM7PpbqqStKo-NiCuzuYwewZmd9b-EZ9&index=5


Este código se puede decir que es mi "PRIMER INTENTO", así que voy a comentarlo BIEN, para guardarlo.
*/


/*CRONOLOGÍA MÍA
.


QUIERO VER LA CRONOLOGÍA DEL PROFESOR, PARA SABER COMO PUEDO MEJORAR
*/


/*CRONOLOGÍA DEL PROFESOR
}


*/

function Act1({reyes}){
    const resultado = reyes.map(e => <div>{e.nombre.toUpperCase()} ha comido {e.vacasComidas * e.reinado * 365} en sus {e.reinado} años de reinado.
    </div>)/* "resultado" se está igualando a un "mapeo" que se va a hacer en el objeto "reyes" (el que contiene el
        nombre, los años de reinado, las vacas que supuestamente se comen al día)
    
    
        Creo que “e” es algo así como un comodín, algo con lo que tu pides al OBJETO JS lo que quieres de él.
    */
    
    
    return <>
    {resultado}
    </>
    }
    
    
    export default Act1 /* este no debe OLVIDARSE porque si no, no jala el componente. MANDA ERROR */