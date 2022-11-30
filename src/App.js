import './App.css';
import {Bar, Line, Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import {Container} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

function App() {

  const [selection, setSelection] = useState();

  return (
    <div>
      <h5>web-ohjelmoinnin sovellusprojekti</h5>
      <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className="me-auto" onSelect={sel => setSelection(sel)}>
                  <Nav.Link eventKey={0}>Etusivu</Nav.Link>
                  <NavDropdown title="Valikko" id="basic-nav-dropdown">
                    <NavDropdown.Item eventKey={1}>Kirjaudu</NavDropdown.Item>
                    <NavDropdown.Item eventKey={2}>Luo käyttäjä</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey={3}>Päästölähteet</NavDropdown.Item>
                    <NavDropdown.Divider /> 
                    <NavDropdown.Item eventKey={4}>Lämpötilatiedot</NavDropdown.Item>
                    <NavDropdown.Divider /> 
                    <NavDropdown.Item eventKey={5}>CO2 pitoisuudet</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    
      {selection == 3 ? <Päästölähteet/> : <h1></h1>}
      {selection == 1 ? <Kirjaudu/> : <h1></h1>}
      {selection == 2 ? <Luo/> : <h1></h1>}
      {selection == 0 ? <Etusivu/> : <h1></h1>}
      {selection == 4 ? <Lämpötilat/> : <h1></h1>}
      {selection == 5 ? <Pitoisuudet/> : <h1></h1>}

    
     
    
    </div>
  );
}


function Pitoisuudet()
{
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
          backgroundColor: ['#99346C','#E6DA85','#E66EB0','#57D8E6'],
          borderColor: "white",
          borderWidth: 1
        }
      ],
    });
  return (
    <div style={{ display: 'flex', alignItems:'center', flexWrap:'wrap'}}>
       
  
       <div><Pie data ={chartData}/></div>
       
      </div>
  )
}

function Lämpötilat()
{
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
          backgroundColor:['#99346C','#E6DA85','#E66EB0','#57D8E6'],
          borderColor: "white",
          borderWidth: 1
        }
      ],
    });
  return(
    <div style={{ display: 'flex', alignItems:'center', flexWrap:'wrap'}}>
       
       <div><Line data={chartData}/></div>
       
      </div>
  )
}

function Etusivu()
{
  return(
    <div class ="Etusivu">
      <div>
      <h1>Faktat näkyväksi</h1>
    </div>
    <div>
      <h2>Ilmastonmuutoksen visualisointia</h2>
    </div>
    <div>
      <a href="https://github.com/Climateproject/main" target="_blank">GitHub</a> <a href ="https://www.youtube.com/" target="_blank">YouTube</a>
    </div>
    </div>
  )
}
function Luo()
{
  return (
    <div>
  <form>
    <div>
    <label> Etunimi </label>
    </div>
    <div>
    <input type ="text"name ="fname" id="fname" placeholder=''/>
    </div>
    <div>
    <label> Sukunimi </label>
    </div>
    <div>
    <input type ="text"name ="lname" id="lname" placeholder=''/>
    </div>
    <div>
    <label> Käyttäjänimi</label>
    </div>
    <div>
    <input type ="text"name ="uname" id="uname" placeholder=''/>
    </div>
    <div>
    <label> Salasana </label>
    </div>
    <div><input type="password" name ="pass" id="pass"placeholder='****'/>
    </div>
    <br></br> 
    <div>
    <input type ="button" name="luo" id="luo" value="Luo käyttäjä"/>
    </div>
  </form>
  </div>

  )
}
function Kirjaudu()
{
  return (
  <div>
  <form>
    <div>
    <label> Käyttäjänimi </label>
    </div>
    <div>
    <input type ="text"name ="uname" id="uname" placeholder='****'/>
    </div>
    <div>
    <label> Salasana </label>
    </div>
    <div>
    <input type="password" name ="pass" id="pass"placeholder='****'/>
    </div>
    <br></br>
    <div>
    <input type ="button" name="log" id="log" value="Kirjaudu"/>
    </div>
    <div>
    <input type ="checkbox" id ="delete" name="delete"/>
    <label for ="delete">Poista käyttäjä</label>
    </div>
  </form>
  </div>
  )
}

function Päästölähteet()
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
        backgroundColor: ['#99346C','#E6DA85','#E66EB0','#57D8E6'],
        borderColor: "white",
        borderWidth: 1
      }
    ],
  });


    return (
      <div style={{ display: 'flex', alignItems:'center', flexWrap:'wrap'}}>
       
       <div><Line data={chartData}/></div>
       <div><Pie data ={chartData}/></div>
       
      </div>
    )
}
export default App;

