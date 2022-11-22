import './App.css';
import {Container} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  //Tähän talletetaan bootstrap-menun valinta (eventKey).
  const [selection, setSelection] = useState();

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
                  <Nav.Link eventKey={"kaikilla on hauskaa!"}>Tsemppi</Nav.Link>
                  <NavDropdown title="Kiinnostaako?" id="basic-nav-dropdown">
                    <NavDropdown.Item eventKey={"jjee moti satasessa"}>Samuli</NavDropdown.Item>
                    <NavDropdown.Item eventKey={"wwuhuu"}>Meri</NavDropdown.Item>
                    <NavDropdown.Divider /> {/* Tää erittelee meidät*/}
                    <NavDropdown.Item eventKey={"koodaus on kivaa"}>Inka</NavDropdown.Item>
                    <NavDropdown.Item eventKey={":--)"}>Juuso</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    
      <h1>Mahtavaa jee {selection}</h1>

    </div>
  );
}

export default App;
