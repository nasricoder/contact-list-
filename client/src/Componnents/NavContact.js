import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const NavContact =()=>{
    return(
        <div>
             <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Nasri Page</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/Contacts'>Contacts </Nav.Link>
            <Nav.Link as={Link} to='/AddContact'>Add Contacts </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}
export default NavContact