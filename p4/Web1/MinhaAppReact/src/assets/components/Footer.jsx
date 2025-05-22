import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className = "bg-primary text-white"> 
          <Col>
            <Stack>
              <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGJnIM5HKWbLbW1LBv-VLxthrz8arMAJ5oA&s" 
              alt="company logo"
              rounded
              width= {150}
              height= {150}
              />
              <h2>Company Name</h2>
              <p>Company tagline here</p>
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              <NavLink href="#home" className="text-white">Home</NavLink>
              <NavLink href="#about" className="text-white">About</NavLink>
              <NavLink href="#services" className="text-white">Services</NavLink>
              <NavLink href="#contact" className="text-white">Contact</NavLink>
            </Nav>
          </Col>
          <Col>
            <h4>Contac us!</h4>
            <p>email@gmail.com</p>
            <p>Phone: +55(xx) xxxxx-xxxx</p>
          </Col>
        </Row>
      </Container>
      
    </footer>
  );
}
