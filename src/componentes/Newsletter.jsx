import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [mensaje,setmensaje]=useState('');


  useEffect(() => {
    if (status === 'success') clearFields();}, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email ,
      FNAME: firstName,
      GMAIL: mensaje,
    })
  }

  const clearFields = () => {
    setEmail('');
    setFirstName('');
    setmensaje('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx ">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Contactanos</h3>
              <p>¿Listo para innovar con Lumajira?. Nuestro equipo de experto esta preparado para colaborar con su proximo gran desafio</p>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit} className="form-botton" >
                <div className="new-first-bx">
                  <input value={firstName} type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="Nombre" />
                </div>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="xxxxx@gmail.com" />
                </div>
                <div className="new-mensaje-bx">
                  <input value={mensaje} type="mensaje" onChange={(e) => setmensaje(e.target.value)} placeholder="¿Como podemos ayudarle?" />
                </div>
                <button type="submit">Enviar</button>

              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}




