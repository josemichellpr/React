import React,{useState} from 'react' /* Recordemos que si vamos a utilizar "useState()" hay que
exportarlo como se hizo en la anterior línea de código */
import "./App.css"; /* Se importa el archivo CSS */
import img0 from "./rey_sisebuto.png" /** Para invocar al rey sisebuto que está en el folder "src" */
import img1 from "./rey_leogivildo.png"
import img2 from "./rey_atanagildo.png"
import img3 from "./rey_ataulfo.png"
import img4 from "./rey_teodorico.png"
import img5 from "./rey_recesvinto.png"




const App = () => {
  /***********ZONA PARA DECLARACIÓN DE VARIABLES Y JS "PURO Y DURO",***********/
  const reyes=[
    {
      nombre:"Sisebuto",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Leogivildo",
      color:"crimson",
      precio:169
    },{
      nombre:"Atanagildo",
      color:"peru",
      precio:81
    },{
      nombre:"Ataulfo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Teodorico",
      color:"royalblue",
      precio:141
    },{
      nombre:"Recesvinto",
      color:"teal",
      precio:69
    }
  ]


  const [contador,setContador] = useState(0)/*Declaramos las variables y la herramienta (derecha) con la que
  podemos hacer modificaciones a la misma variable (izquierda) */




  const sise =(e)=>{ /* OJO que UNA sola función nos sirvió para TODOS los reyes. Es la función que
  está acoplada en cada uno de los botones de "Comprar". Especialmente me costaron trabajo los 6 condi-
  cionales que están más abajo, vamos a "desmenuzarlos". Con e target se hace un enlace entre lo que
  hizo clic, con ese comando React "sabe" en qué rey se hizo clic. Busque muchas maneras de acceder al
  precio con e.target, encontré algunas ideas pero por el momento no me fue posible aplicarlas al código.
  La lógica de esa búsqueda era acceder al interior del HTML con el id o clase "precio" y con ello evitar
  toda los 6 if que están más abajo. Porque imaginate que sea todo un mundo de artículos como en la aplica-
  ción de Aurrera, un profesional lo haría de esa manera, lo sé. Pero bueno, "parentNode" es para acceder
  al padre que es <div className = "nombre del rey"></div>. className es para acceder al "className".
  "includes" es para preguntarle, ¿la clase incluye en su texto "nombre del rey"? . Si es así se carga a la
  memoria del "contador" el precio del rey elegido*/
   
    e.target.parentNode.style.visibility = "hidden" /*Para "desaparecer" al rey elegido */


    if(e.target.parentNode.className.includes("sisebuto")){
      setContador(contador + reyes[0].precio)
      /* Con respecto al objeto JS "reyes" -->
        "reyes" es  el nombre del objeto (obviamente) ; 0 porque es el primerísimo que fue declarado
         en el objeto (ya sabes como  funciona eso de los arrays) ; "precio" porque es lo que nos inte-
         resa en esta situación */


         /*EN ESTE PUNTO EL "alert(), ME SALVÓ EL CULO, PORQUE GRACIAS A DICHO COMANDO, PODÍA SABER
         SI IBA A FUNCIONAR MI CONDICIONAL. P/E: para saber que era e.target, pues lo ponía así
         alert(e.target). Para saber el innerHTML, alert(inner.HTML) y con eso es como si llevaras
         una linternita y no estás a ciegas dando instrucciones con valores que ni conoces o sabes
         si no están indefinidos o NaN y muchas cosas de JS. */
 
    }
    else if(e.target.parentNode.className.includes("leogivildo")){
      setContador(contador + reyes[1].precio)
    } /* El profe que me enseñó Python, me comento que es mejor la estructura if, else if, porque
    consume menos recursos del ordenador, al no tener que validar todos los if. */


    else if(e.target.parentNode.className.includes("atanagildo")){
      setContador(contador + reyes[2].precio)
    }


    else if(e.target.parentNode.className.includes("ataulfo")){
      setContador(contador + reyes[3].precio)
    }


    else if(e.target.parentNode.className.includes("teodorico")){
      setContador(contador + reyes[4].precio)
    }


    else if(e.target.parentNode.className.includes("recesvinto")){
      setContador(contador + reyes[5].precio)
    }


}


   /*********** TERMINA LA ZONA PARA DECLARACIÓN DE VARIABLES Y JS "PURO Y DURO" ***********/


  return (
   


    <div className='container'>      
      <div className='column'>
        <div className='sisebuto'>
          <p className='pp'>{reyes[0].nombre}</p>
          <img  src={img0}/>
          <p>Precio:</p>
          <p id='precio'>${reyes[0].precio}</p>
          <button onClick={sise}>Comprar</button>
        </div>
        {/* Tambien batalle un poco porque como verás dentro de "container" hay dos
        descendientes y pensé que no funcionaría "display: flex;", pero si funcionó
        de una manera un poco extraña, pero funcionó. Cada rey tiene su propia
        "className" para estilizarlos por separado en CSS */}


        <div className="leogivildo">
          <p className='pp'>{reyes[1].nombre}</p>
          <img  src={img1}/>
          <p>Precio:</p>
          <p>${reyes[1].precio}</p>
          <button onClick={sise}>Comprar</button>
        </div>
   
        <div className="atanagildo">
          <p className='pp'>{reyes[2].nombre}</p>
          <img  src={img2}/>
          <p>Precio:</p>
          <p>${reyes[2].precio}</p>
          <button  onClick={sise} >Comprar</button>
        </div>
      </div>{/* Termina "column" */}


      <div className='column'>


        <div className="ataulfo">
          <p className='pp'>{reyes[3].nombre}</p>
          <img  src={img3}/>
          <p>Precio:</p>
          <p>${reyes[3].precio}</p>
          <button onClick={sise}>Comprar</button>
        </div>


        <div className="teodorico">
          <p className='pp'>{reyes[4].nombre}</p>
          <img  src={img4}/>
          <p>Precio:</p>
          <p>${reyes[4].precio}</p>
          <button onClick={sise}>Comprar</button>
        </div>


        <div className="recesvinto">
          <p className='pp'>{reyes[5].nombre}</p>
          <img  src={img5}/>
          <p>Precio:</p>
          <p>${reyes[5].precio}</p>
          <button onClick={sise}>Comprar</button>
        </div>


      </div>{/* Termina "column" */}


      <p>PRECIO:${contador} </p>


    </div> /*Termina "container" */


  )
}


export default App;


/*
Enlace al video de la actividad : https://www.youtube.com/watch?v=JEVAFDq3A7Q&lc=UgyHZ8M-CASyAqPUzPB4AaABAg
Este código se puede decir que es mi "PRIMER INTENTO", así que voy a comentarlo BIEN, para guardarlo.
*/


/*CRONOLOGÍA MÍA
1. Hice el JSX (muy parecido a HTML) y CSS juntos, para ir presentando las cosas junto con las imágenes y botones.
2. Una vez que estuvieron presentados me dispuse a crear las funciones para los botones, descubrí que con e.target
solo se necesitaría una función y NO UNA PARA CADA REY.
3. Después me puse a batallar con los condicionales para cargar al "total a pagar" lo que fuera que el usuario com-
prara.


QUIERO VER LA CRONOLOGÍA DEL PROFESOR, PARA SABER COMO PUEDO MEJORAR
*/


/*CRONOLOGÍA DEL PROFESOR
1. Importa el useState()
2. Declara la variable "total"
3. Crea los componentes y los declara (minuto 29).
4.Agrega el CSS
5. Deja para el final la función del botón para que
 desaparezca el rey elegido y se cargue el precio a
 "total a pagar"


*/
