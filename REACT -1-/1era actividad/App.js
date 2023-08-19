import sisebuto from "./rey_sisebuto.png" /** Para invocar al rey sisebuto que está en el folder "src" */
import leogivildo from "./rey_leogivildo.png"
import atanagildo from "./rey_atanagildo.png"
import './App.css'; /* Es REMARCABLE que en React se invocan las cosas de una
forma distinta*/


function App() {
  return (
    <div className="container">


      <div className="column">


        <div className="sisebuto">
        <img src={sisebuto}/>
        <p>Rey Sisebuto</p>
        </div>


        <div className="leogivildo">
        <img src={leogivildo}/>
        <p>Rey Leogivildo</p>
        </div>


        <div className="atanagildo">
              <img src={atanagildo}/>
              <p>Rey Atanagildo</p>
        </div>


      </div>


    </div>
  );
}


export default App; /*Es para proyectar en pantalla App.js */
