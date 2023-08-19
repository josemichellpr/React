import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
/*import { AsientosDisponibles } from './components/asientosDisponibles'*/
/*import {BirthdayYear} from './components/birthdayYear'*/
/*import {CatalogarSegunEdad} from './components/catalogarSegunEdad'*/
/*import {Contador} from './components/contador'*/
/*import {EdadPerruna} from './components/edadPerruna'*/
/*import {PromedioDeCincoCalificacionesPro} from './components/promedioDeCincoCalificacionesPro'*/
/*import {SumatoriaAlaN} from './components/sumatoriaAlaN'*/
/*import {SumatoriaMultiplosdeTresEntreUnRango} from './components/sumatoriaMultiplosdeTresEntreUnRango'*/
import {SumatoriaSimpleaLimiteEstablecido} from './components/sumatoriaSimpleaLimiteEstablecido'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SumatoriaSimpleaLimiteEstablecido/> 
  </React.StrictMode>
)
