
import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Descriptions = () =>{


    return(
<section className="descriptions" id="home">
<Container>
        <Row className="aligh-items-center">
           <Col >
           <div className="informations">
            <h1>Lumajira </h1>
            <p>Innovacion Profunda para la Vida</p>
            <span className="tagline">Deep tech innovation.</span>
            <p>
             Integrando ingenieria de precision, solucion biomedicas y el futuro del Agtech 
            </p>
            <button onClick={() => window.open('https://www.linkedin.com/company/lumaji/?viewAsMember=true')}>Contactanos <ArrowRightCircle size={25} /></button>
            </div>
          </Col> 
        </Row>
</Container>
</section>
    )

}

    

