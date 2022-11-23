import './App.css';
import {bar, line, pie} from 'react-chartjs-2';
import {chart as chartJS} from "chart.js/auto";
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
            <Navbar.Collapse id='basic-navbar-nav'>
                 {/* onSelect asettaa menussa valitun itemin eventKeyn */}
              <Nav className="me-auto" onSelect={sel => setSelection(sel)}>
                  <Nav.Link eventKey={"kaikilla on hauskaa!"}>Etusivu</Nav.Link>
                  <NavDropdown title="Valikko" id="basic-nav-dropdown">
                    <NavDropdown.Item eventKey={1}>Samuli</NavDropdown.Item>
                    <NavDropdown.Divider /> 
                    <NavDropdown.Item eventKey={2}>Meri</NavDropdown.Item>
                    <NavDropdown.Divider /> 
                    <NavDropdown.Item eventKey={3}>Inka</NavDropdown.Item>
                    <NavDropdown.Divider /> 
                    <NavDropdown.Item eventKey={4}>Juuso</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    
      {selection == 2 ? <Chart1/> : <h1>jok muu sivus</h1>}
     

    </div>
  );
}

function Chart1()
{
    return (
      <div> style={{ display}}
        Tässä o chart1
      </div>
    )
}
export default App;

