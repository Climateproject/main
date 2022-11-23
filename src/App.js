import './App.css';
import {Bar, Line, Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import {Container} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

function App() {

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
                    <NavDropdown.Item eventKey={2}>Graafit</NavDropdown.Item>
                    <NavDropdown.Divider /> 
                    <NavDropdown.Item eventKey={3}>Inka</NavDropdown.Item>
                    <NavDropdown.Divider /> 
                    <NavDropdown.Item eventKey={4}>Juuso</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    
      {selection == 2 ? <Chart1/> : <h1>joku muu sivu</h1>}
     

    </div>
  );
}

function Chart1()
{
// const options = {scales: {y:{min:0,max:1000}}};

const productSales = [
  {year: 1993, sales: 500},
  {year: 1994, sales: 340},
  {year: 1995, sales: 700},
  {year: 1996, sales: 700}
];

const [chartData, setcharData] = useState({
    labels: productSales.map(d => d.year),
    datasets: [
      {
        label: "product sales",
        data: productSales.map(d=> d.sales),
        backgroundColor: [
          '#99346C','#E6DA85','#E66EB0','#57D8E6'
        ]
      }
    ],
  });


    return (
      <div style={{ display: 'flex', alignItems:'center', flexWrap:'wrap'}}>
       
       <div><Line data={chartData}/></div>
       <div><Bar data ={chartData}/></div>
       <div><Pie data ={chartData}/></div>
       
      </div>
    )
}
export default App;

