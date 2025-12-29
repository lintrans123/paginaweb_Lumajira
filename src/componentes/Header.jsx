import { Container, Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#0A234A'  }}  className="py-1 text-white">
      <Container>
        
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="/../src/img/lumajira_logo_sinfondo.png"
            style={{ width: '80px' ,height: '60px'}}
            className="d-inline-block align-top me-2 rounded-circle"
            alt="Logo"
            

          />
          <span className="fw-bold text-white" >Lumajira.SAC</span>
        </Navbar.Brand>

        
        <div className="d-flex align-items-center">
          <Nav className="me-4">
            <Nav.Link  className="text-white fw-bold" href="#home">INICIO</Nav.Link>
            <Nav.Link  className="text-white fw-bold" href="#features">NOSOTROS</Nav.Link>
            <Nav.Link  className="text-white fw-bold" href="#pricing">CONTACTO</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};