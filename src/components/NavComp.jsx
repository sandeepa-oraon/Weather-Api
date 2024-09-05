import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';

// import Home from '../pages/Home';
function NavComp() {
  return (
    <>
      <Navbar className='Navbar' >
        <Container className='container'>
          <Navbar.Brand as={Link} to='/'>Weather</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link as={Link} to='/today'>TODAY</Nav.Link>
            <Nav.Link as={Link} to='/hourly'>HOURLY</Nav.Link>
            <Nav.Link as={Link} to='/daily'>DAILY</Nav.Link>
            {/* <Nav.Link href="#home">RADAR</Nav.Link>
            <Nav.Link href="#features">MINUTECAST</Nav.Link>
            <Nav.Link href="#pricing">MONTHLY</Nav.Link> */}
            <Nav.Link as={Link} to='/air-quality'>AIR QUALITY</Nav.Link>
            <Nav.Link href="#features"></Nav.Link>

            <Search />
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default NavComp;