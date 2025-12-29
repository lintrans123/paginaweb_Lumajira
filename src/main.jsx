import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { Descriptions } from './componentes/Descriptions.jsx'
import { Projects } from './componentes/Projects.jsx'
import { Newsletter } from './componentes/Newsletter.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from './componentes/Header.jsx'
import { Footer } from './componentes/Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Descriptions />
    <Projects />
    <Newsletter />
    <Footer/>
  </StrictMode>
)
