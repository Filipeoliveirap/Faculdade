import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function Header () {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Censo Escolar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/">Features</Nav.Link>
            <Nav.Link as={NavLink} to="/">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
