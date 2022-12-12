import './App.css';
import {Bar, Line, Pie} from 'react-chartjs-2';
import "chartjs-adapter-luxon";
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
                    
                    <NavDropdown.Item eventKey={4}>Lämpötilatiedot</NavDropdown.Item>
                    <NavDropdown.Divider /> 
                    <NavDropdown.Item eventKey={5}>CO2 pitoisuudet</NavDropdown.Item>
                  </NavDropdown>
                </Nav> 
            </Navbar.Collapse>
          </Container>
      </Navbar>
    
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
  const[ThirdData,setThirdData]=useState([])

  useEffect(()=>{
      fetch("http://localhost:8080/maunaloan/getall")
        .then(res=>res.json())
        .then((result)=>{
          setThirdData(result);
         } )
  },[]);

  const[FourthData,setFourthData]=useState([])

  useEffect(()=>{
      fetch("http://localhost:8080/vostok/getall")
        .then(res=>res.json())
        .then((result)=>{
          setFourthData(result);
         } )
  },[]);

  const[FifthData,setFifthData]=useState([])

  useEffect(()=>{
      fetch("http://localhost:8080/icecore/getall")
        .then(res=>res.json())
        .then((result)=>{
          setFifthData(result);
         } )
  },[]);
  
  const data =  {
    datasets:[
      {
        label: "Maunaloan annual C02",
        data: ThirdData,
        backgroundColor:'yellow',
        borderColor: "yellow",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "mean"
        }
      },
    ],
  }
  const data2 =  {
    datasets:[
      {
        label: "Historical CO2 Record from the Vostok Ice Core",
        data: FourthData,
        backgroundColor:'yellow',
        borderColor: "yellow",
        parsing: {
          xAxisKey: "ageofice",
          yAxisKey: "co"
        }
      },
    ],
  }

  const data3 =  {
    datasets:[
      {
        label: "C02 Measurements",
        data: FifthData,
        backgroundColor:'yellow',
        borderColor: "yellow",
        parsing: {
          xAxisKey: "agc",
          yAxisKey: "coppm"
        }
      },
    ],
  }
  
  const options = {
    scales: {
      x: { 
        type: "linear",
        title:{
          display:true,
          text: 'Time in years',
        },
      },
    }
  }

  return(
    <div style={{width: "1000px"}}>
      <div> <Line options={options} data={data}/></div>
      <div> <Line options={options} data={data2}/></div>
      <div> <Line options={options} data={data3}/></div>
    </div>
    
  )
  }

function Lämpötilat()
{
  const[anomaly,setAnomaly]=useState([])

  useEffect(()=>{
      fetch("http://localhost:8080/hadcrut/getall")
        .then(res=>res.json())
        .then((result)=>{
          setAnomaly(result);
         } )
  },[]);

  const[SecondData,setSecondData]=useState([])

  useEffect(()=>{
      fetch("http://localhost:8080/nhemisphere/getall")
        .then(res=>res.json())
        .then((result)=>{
          setSecondData(result);
         } )
  },[]);

  const[SixthData,setSixthData]=useState([])

  useEffect(()=>{
      fetch("http://localhost:8080/evolution/getall")
        .then(res=>res.json())
        .then((result)=>{
          setSixthData(result);
         } )
  },[]);


  const data =  {
    datasets:[
      {
        label: "Northern hemisphere annual",
        data: anomaly,
        backgroundColor:'yellow',
        borderColor: "yellow",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly"
        }
      },
      {
        label: "2000 year temperatures",
        data: SecondData,
        backgroundColor:'red',
        borderColor: "red",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "t"
        }
      },
    ],
  }

  const data2 =  {
    datasets:[
      {
        label: "CO2 PPM",
        data: SixthData,
        backgroundColor:'yellow',
        borderColor: "yellow",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "cdppm"
        }
      },
    ]
  }
  
  const options = {
    scales: {
      x: { 
        type: "linear",
        title:{
          display:true,
          text: 'Time in years',
        },
      },
    }
  }

  
  return(
    <div style={{width: "1400px"}}>
       <div><Line options={options} data={data}/></div>
       <div><Line options={options} data={data2}/></div>
    </div>
    
  )
}

function Etusivu()
{
  return(
    <div class ="Etusivu">
      <div>
      <h2>Faktat näkyväksi - ilmastodatan visualisointia </h2>
    </div>
    <div>
      <a href="https://github.com/Climateproject/main" 
      target="_blank" rel="noreferrer">GitHub</a> <a href ="https://www.youtube.com/" target="_blank" 
      rel="noreferrer">YouTube</a>
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

export default App;

