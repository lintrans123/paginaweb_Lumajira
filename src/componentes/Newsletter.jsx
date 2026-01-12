import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [mensaje,setmensaje]=useState('');
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async(e) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");


    try {      
      const response = await fetch('/.Netlify/functions/subscribe', {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, firstName, mensaje }),
      }); 

     if (!res.ok) throw new Error("Error");

      setStatus("success");
      setMessage("¡Gracias por suscribirte a nuestro boletín!");

      setName("");
      setEmail("");
      setMessage("");

    }  catch {
      setStatus("error");
      setMessage("Hubo un problema con la suscripción. Por favor, inténtelo de nuevo más tarde.");
    }
  };


  return (
      <Col lg={12} >
        <div className="newsletter-bx " id="pricing">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Contactanos</h3>
              <p>¿Listo para innovar con Lumajira?. Nuestro equipo de experto esta preparado para colaborar con su proximo gran desafio</p>
              {status === 'sending' && <Alert>Enviando...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit} className="form-botton" >
                <div className="new-first-bx">
                  <input value={firstName} type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="Nombre" required />
                </div>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="xxxxx@gmail.com" required />
                </div>
                <div className="new-mensaje-bx">
                  <input value={mensaje} type="mensaje" onChange={(e) => setmensaje(e.target.value)} placeholder="¿Como podemos ayudarle?" required />
                </div>
                <button type="submit">Enviar</button>

              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}




