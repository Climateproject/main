import './App.css';
import {Container} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  //Tähän talletetaan bootstrap-menun valinta (eventKey).
  const [selection, setSelection] = useState(0);

  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
             {/* Lisätään hampparimenu */}
            <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
            {/* Navi piilotetaan kapeammassa näytössö (vain hamppari-ikoni näkyy) */}
            <Navbar.Collapse id='basic-navbar-nav'>
                 {/* onSelect asettaa menussa valitun itemin eventKeyn */}
              <Nav className="me-auto" onSelect={sel => setSelection(sel)}>
                  <Nav.Link eventKey={0}>Home</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item eventKey={1}>First</NavDropdown.Item>
                    <NavDropdown.Item eventKey={2}>Second</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey={3}>Third</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    
      <h1>Tämän sivun numero on {selection}</h1>

    </div>
  );
}

export default App;
