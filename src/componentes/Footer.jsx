import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="text-white py-3" style={{backgroundColor: "#2C2C2C"}}>    
      <Container>
        <div style={{ transform: 'translateX(10%)' }}> {/* Desplazado 10% a la derecha */}
          <div className="text-center">
            {/* <h5>Lumajira.SAC</h5>
            <p>Innovación Profunda para la Vida</p> */}
            <div className="mt-3">
              <button className="btn btn-outline-light btn-sm me-2" href="#home" >Inicio</button>
              <button className="btn btn-outline-light btn-sm me-2"  href="#features"  >Nosotros</button>
              <button className="btn btn-outline-light btn-sm me-4"  href="#pricing" >contacto</button>
              <span className="">
              <button className="btn btn-sm me-2">
                <a href=""><img style={{height: "31px", width: "31px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEU7V53///8mSZf6+/0zUppidqzDyd0qS5jJzuAaQpQvT5l6irdEXqEWQJPl5/BxgbO0vNWDkbu9xNqlr80JO5FpfLCeqMnO0+OPnMKWosaJl79ccasAOJDc4Ovz9fjt7vRTaaYAMY0l7Ru/AAACfElEQVR4nO3c3ZKiMBAF4BiigagQQEBlnHHf/yUX1toaVzaK1UmaqjmnyjsuvuInphttsRqS22InFpBdYfPRI4aPFVJxe25RUtgbqtxzW+6zL0eUXZRpUNmVyLkR0+TCSm7DY6QVxULu8e+oQixiLfg3CyQhCIIgCBIqRsshmbxFa6N4d0zK7D9UcaxttUmrqrK2bk/nsulFdvhgIknRtN3KkSRjEKnMtJfERRrCgJK9fQJiQSlZf74wRUfp5usVKToqOz+7l3hQup5BiozK5pmiovRpnikmyjQzTRFRSsx47mKj9KslkwGl+tmmeCiZLg+lmjmrZmSUmX9HRUS9caJiocz2DVMsVLZZIErlLxzJXSKh1PrZxq6rj+X2LmWcksacnaLPVmljhtrqLlFMwrQuU77mKF3+RFeu86QMl0kYV413YnyxIR0PX87ZsJeOrVSqGVHasSK0nK+lpOObr+S7zd2ohrPz40KtgQIKKKCAAgqon4RSepKDA9Vn02O1DiBV63TzGFcxMz1yTO9f9V4v4z9JAlxUMiq/ejfRURf/JjqqC1B3kVFVgO4CGRWiGCSjtgGKQTLqGmDxJKNCNKzIqBA/S6Ci8sMCUd0SL1+QXy1TUccQ7SEqahti40dEJUF6VkTUV4AtHhkVpmFMRF2CNIyJqDTIaxEiKsyfK1TTpZM4BNMjuxAbl1G1zx7zy1H3XQ+PR+7jddb5K2SggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggPpJKL/vvL2gdp5H0vlAqcLz8D4fKGk9jzn0cvlyzwMhPaDGgZB+R2fSUbfRmV6HjBJR30NGfY5jpaH+jmP9DbFnKRrsgQaiAAAAAElFTkSuQmCC" alt=""  onClick={() => window.open('https://www.facebook.com/profile.php?id=61578602369780')} /></a></button>
              <button className="btn btn-sm me-2"><a href=""><img style={{height: "31px", width: "31px"}}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png" onClick={() => window.open('')} /></a></button>
              <button className="btn btn-sm"><a href=""><img style={{height: "31px", width: "31px"}}  src="https://img.freepik.com/vector-premium/nuevo-logotipo-vectorial-twitter-x-blanco-fondo-negro_744381-866.jpg?semt=ais_hybrid&w=740&q=80" onClick={() => window.open('')} /></a></button></span>
            </div>
            {/* <p className="mt-4 text-muted small">
              © {new Date().getFullYear()} - Integrando ingeniería de precisión, 
              soluciones biomédicas y el futuro del Agtech
            </p> */}
          </div>
        </div>
      </Container>
    </footer>
  );
};

// import { Container, Row, Col } from "react-bootstrap";

// export const Footer = () => {
//   return (
//     <footer className="bg-dark text-white py-5">
//       <Container>
//         <div style={{ transform: 'translateX(15%)' }}>
//           <Row className="justify-content-center">
//             {/* Primera columna */}
//             <Col md="5" className="mb-4 mb-md-0">
//               <div className="text-center text-md-start">
//                 <h4 className="text-primary mb-3">Lumajira.SAC</h4>
//                 <p className="text-muted">
//                   Innovación Profunda para la Vida<br />
//                   Deep tech innovation
//                 </p>
//                 <div className="mt-3">
//                   <button className="btn btn-outline-light btn-sm me-2">LinkedIn</button>
//                   <button className="btn btn-outline-light btn-sm">Contacto</button>
//                 </div>
//               </div>
//             </Col>
            
//             {/* Segunda columna - separada */}
//             <Col md="5" className="offset-md-1">
//               <div className="text-center text-md-start">
//                 <h6 className="mb-3">CONTACTO</h6>
//                 <p className="text-muted mb-1">
//                   <i className="bi bi-envelope me-2"></i>
//                   info@lumajira.com
//                 </p>
//                 <p className="text-muted mb-1">
//                   <i className="bi bi-telephone me-2"></i>
//                   +51 123 456 789
//                 </p>
//                 <p className="text-muted">
//                   <i className="bi bi-geo-alt me-2"></i>
//                   Lima, Perú
//                 </p>
//               </div>
//             </Col>
//           </Row>
          
//           {/* Línea y copyright */}
//           <Row className="mt-4">
//             <Col className="text-center">
//               <hr className="opacity-25" />
//               <p className="text-muted small mt-3">
//                 © {new Date().getFullYear()} - Integrando ingeniería de precisión, 
//                 soluciones biomédicas y el futuro del Agtech
//               </p>
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </footer>
//   );
// };

// import { Container, Row, Col } from "react-bootstrap";

// export const Footer = () => {
//   return (
//     <footer className="bg-dark text-white py-5">
//       <Container>
//         {/* Row con offset para desplazar todo */}
//         <Row className="justify-content-center">
//           <Col lg="10" xl="9" className="offset-lg-1">
//             <Row>
//               {/* Información de la empresa */}
//               <Col md="5" className="mb-4">
//                 <div className="text-center text-md-start">
//                   <h4 className="text-primary mb-2">LUMAJIRA</h4>
//                   <p className="text-light opacity-75 mb-3">
//                     Deep tech innovation for a better future
//                   </p>
//                   <div>
//                     <button className="btn btn-outline-light btn-sm me-2">
//                       <i className="bi bi-linkedin me-1"></i> LinkedIn
//                     </button>
//                     <button className="btn btn-outline-light btn-sm">
//                       <i className="bi bi-envelope me-1"></i> Email
//                     </button>
//                   </div>
//                 </div>
//               </Col>
              
//               {/* Contacto */}
//               <Col md="5" className="offset-md-1 mb-4">
//                 <div className="text-center text-md-start">
//                   <h6 className="text-white mb-3">CONÉCTATE CON NOSOTROS</h6>
//                   <p className="text-light opacity-75">
//                     <i className="bi bi-geo-alt me-2"></i>
//                     Av. Innovación 123, Lima
//                   </p>
//                   <p className="text-light opacity-75">
//                     <i className="bi bi-telephone me-2"></i>
//                     +51 987 654 321
//                   </p>
//                   <p className="text-light opacity-75">
//                     <i className="bi bi-clock me-2"></i>
//                     Lun - Vie: 9:00 - 18:00
//                   </p>
//                 </div>
//               </Col>
//             </Row>
            
//             {/* Copyright también desplazado */}
//             <div className="text-center mt-4 pt-4 border-top border-dark">
//               <p className="text-muted small">
//                 © {new Date().getFullYear()} Lumajira SAC - 
//                 Integrando ingeniería de precisión, soluciones biomédicas 
//                 y el futuro del Agtech
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };


// import { Container, Row, Col } from "react-bootstrap";

// export const Footer = () => {
//   return (
//     <footer className="bg-dark text-white py-5">
//       <Container>
//         {/* Contenedor con padding izquierdo */}
//         <div className="ps-lg-5 ps-xl-6">
//           <Row className="g-4">
//             {/* Columna 1 */}
//             <Col md={6} className="text-center text-md-start">
//               <h5 className="text-white mb-3">Lumajira.SAC</h5>
//               <p className="text-light opacity-75 mb-3">
//                 Innovación Profunda para la Vida
//               </p>
//               <div className="d-flex justify-content-center justify-content-md-start gap-2">
//                 <button className="btn btn-outline-light btn-sm">LinkedIn</button>
//                 <button className="btn btn-outline-light btn-sm">Contacto</button>
//                 <button className="btn btn-outline-light btn-sm">Blog</button>
//               </div>
//             </Col>
            
//             {/* Columna 2 */}
//             <Col md={6} className="text-center text-md-start">
//               <h6 className="text-white mb-3">TECNOLOGÍAS</h6>
//               <p className="text-light opacity-75 mb-1">• Ingeniería de Precisión</p>
//               <p className="text-light opacity-75 mb-1">• Soluciones Biomédicas</p>
//               <p className="text-light opacity-75">• Agtech & Sustentabilidad</p>
//             </Col>
//           </Row>
          
//           {/* Copyright */}
//           <div className="text-center mt-5 pt-3">
//             <p className="text-muted small">
//               © {new Date().getFullYear()} - Todos los derechos reservados
//             </p>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };