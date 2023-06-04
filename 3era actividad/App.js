import sisebuto from "./rey_sisebuto.png" /** Para invocar al rey sisebuto que está en el folder "src" */
import leogivildo from "./rey_leogivildo.png"
import atanagildo from "./rey_atanagildo.png"
import incognito from "./rey_incognito.png"


import './App.css'; /* Es REMARCABLE que en React se invocan las cosas de una
forma distinta*/
 
function App() {
    /***********ZONA PARA DECLARACIÓN DE VARIABLES Y JS "PURO Y DURO",***********/
   
    let i = 1 /*shift1 */
    let n = 1 /*shift2 */
    let k = 1 /*shift3 */
   
    function shift1(j){
      if(i===1){
        j.target.parentNode.style.backgroundColor = "white"  /*Si no pongo "parentNode" solo se pone
        el fondo blanco exclusivamente DONDE LA IMAGEN  y no en el TEXTO. Ponemos "parentNode"
        para acceder al pariente SUPERIOR en CSS y JSX que es "sisebuto" y así aplicar el
        fondo PAREJITO (imagen y texto). */
      }
 
      else if(i===2){ /*El profe con el que he estudiado Python, me ha dicho que es
      mejor la estructura else if o elif que la if, if ... if */


        j.target.src=incognito;/*Ponemos "src" para cambiar ese mismo atributo que está declarado
        más abajo en el JSX (muy parecido a HTML, pero no es lo mismo) */
      }
 
      else if(i===3){
        j.target.style.visibility = "hidden" /*En este caso no es necesario poner "parentNode"
        porque si hiciéramos eso también se haría invisible el texto y eso no es lo que queremos.
        Así que hay que saber cuándo emplear ese atributo */
        i=0 /*Para que no se "pierda" y reinicie la cuenta */
      }
 
      i++ /* i=i+1 --> Para aumentar el valor de i y guardarlo en memoria */  
       
  }/*Termina shift 1 */


  function shift2(j){
    if(n===1){
      j.target.parentNode.style.backgroundColor = "white"  
    }


    else if(n===2){ /*El profe con el que he estudiado Python, me ha dicho que es
    mejor la estructura else if o elif que la if, if ... if */
      j.target.src=incognito;
    }


    else if(n===3){
      j.target.style.visibility = "hidden"
      n=0
    }


    n++ /* n=n+1 --> Para aumentar el valor de n y guardarlo en memoria */  
     
}/*Termina shift 2 */


function shift3(j){
  if(k===1){
    j.target.parentNode.style.backgroundColor = "white"  
  }


  else if(k===2){
    j.target.src=incognito;
  }


  else if(k===3){
    j.target.style.visibility = "hidden"
    k=0
  }


  k++ /* k=k+1 --> Para aumentar el valor de k y guardarlo en memoria */  
   
}/*Termina shift 3 */


/*He preferido solucionar el problema como a mí "Dios me ha dado a entender"
porque sí solo copio la solución del profesor, NO AVANZO. Lo he
comprobado muchas veces*/


/*Hay que reconocerlo: las funciones shift1, shift2 y shift3 se PODRÍAN CAMBIAR POR
UNA SOLA FUNCIÓN. Imagina que hubieran 30 muñecos o personajes, serían demasiadas
líneas de código. Habría que optimizar */


function cambiarTexto(e){
if (e.target.innerHTML == "Visto"){
  e.target.innerHTML = ``
} else{
  e.target.innerHTML = `Visto`
}


  }/*Termina a funcion cambiarTexto */


 
    /*********** TERMINA LA ZONA PARA DECLARACIÓN DE VARIABLES Y JS "PURO Y DURO" ***********/


  return (
    <div className="container">
 
      <div className="column">
 
        <div className="sisebuto">
            <img  onClick={shift1}   src={sisebuto}/>
            <p  onClick={cambiarTexto}>Rey Sisebuto</p>
          </div>
 
        <div className="leogivildo">
          <img onClick={shift2} src={leogivildo}/>
          <p onClick={cambiarTexto}>Rey Leogivildo</p>
        </div>
 
        <div className="atanagildo">
              <img onClick={shift3} src={atanagildo}/>
              <p onClick={cambiarTexto}>Rey Atanagildo</p>
        </div>
 
      </div>
 
    </div>
  );
}
 
export default App;


{/*Lo que está arriba del comentario es mi esfuerzo PURO  (salvo la función "cambiarTexto") */}






