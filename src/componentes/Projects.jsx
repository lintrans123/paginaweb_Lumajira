
import { Container, Row, Col, Tab } from "react-bootstrap";
import { Projectscard } from "./Projectscard.jsx";
import projImg1 from "../img/inyectora.png";
import projImg2 from "../img/Protesis.png";
import projImg3 from "../img/Agrilux.fondo.png";
import servicies from "../img/impresion.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects=[
    
  {
  title:"Impresionesion 3D avanzada",
  description:"Soluciones innovadoras en impresión 3D para prototipos y producción personalizada. Tecnología de vanguardia para transformar ideas en realidad tangible.",
  imgUrl: servicies,
  estado: "Disponible"
    },

   {
      title: "Tecnologia de inyectora",
      description: "Ingeniería industrial de alta precisión para manufactura avanzada. Automatización que redefine la eficiencia.",
      imgUrl: projImg1,
      estado: "Proximamente"
    },

   {
      title: "Solucones biomedicas",
      description: "Avances en biotecnología para mejorar la salud humana. Investigación profunda para terapias regenerativas.",
      imgUrl: projImg2,
      estado: "En desarrollo"
    },

    {
      title: "Agrilux",
      description: "En Agrilux es una plataforma inteligente con IA que optimiza la producción agrícola mediante la detección temprana de plagas y la conexión directa de los agricultores con mercados rentables.",
      imgUrl: projImg3,
      estado:"en desarrollo"
    },
   
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>--Nuestro Ecosistema </h2>
                <p>Soluciones integradas para  un futuro complejo:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp" }>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Projectscard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}











