import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { Descriptions } from './componentes/Descriptions.jsx'
import {Barr} from './componentes/Barr.jsx'
import {Projects} from './componentes/Projects.jsx'
import { Newsletter} from './componentes/Newsletter.jsx'
import "bootstrap/dist/css/bootstrap.min.css" ; 



createRoot(document.getElementById('root')).render(
  <StrictMode>

  <Descriptions/>
  <Projects/>
  <Newsletter/>

  </StrictMode>
)
