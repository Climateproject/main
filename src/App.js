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
        backgroundColor:'black',
        borderColor: "black",
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
        backgroundColor:'black',
        borderColor: "black",
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
        backgroundColor:'black',
        borderColor: "black",
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
          text: 'Years',
        },
      },
    }
  }

  return(
    <div style={{width: "1000px"}}>
      <div>
        <h5>Ilmakehän hiilidioksidipitoisuudet Mauna Loan mittauksista alkaen 1958</h5>
        <p>
        Mauna Loan observatoriolla tehdyt hiilidioksidimittaukset heijastavat totuutta globaalista ilmapiiristämme. Tärkeimmät syyt tähän luottamukseen ovat seuraavat:
        Mauna Loan huipun lähellä 3400 metrin korkeudessa sijaitseva observatorio on hyvin sijoitettu mittaamaan hyvin laajoja alueita edustavia ilmamassoja.
        Kaikki mittaukset on tarkasti ja hyvin usein kalibroitu.
        Riippumattomien mittausten jatkuva vertailu samassa paikassa mahdollistaa tarkkuuden arvioinnin, joka on yleensä parempi kuin 0,2 ppm.
        Observatorio mittaa ilmakehästä  typen, hapen, vesihöyryn, argonin, hiilidioksidin, neonin, heliumim, metaanin ja kryptonin pitoisuuksia.
        <br></br>
        <a href="https://gml.noaa.gov/ccgg/trends/">Data Measurements</a>
        <br></br>
        <a href="https://gml.noaa.gov/ccgg/trends/data.html">Data Source</a>
        </p>
      </div>
      <div> <Line options={options} data={data}/></div>
      <div>
        <h5>Vostok Ice Core CO2-mittaukset, 417160 - 2342 vuotta</h5>
        <p>
          Vostok-hiilidioksidilevyn laajennus osoittaa, että hiilidioksidin pääsuuntaukset ovat samanlaiset jokaisessa jääkausisyklissä.
          Merkittävät siirtymät alimmista korkeimpiin arvoihin liittyvät jäätikön ja jäätikön välisiin siirtymiin. 
          Näiden siirtymävaiheiden aikana ilmakehän hiilidioksidipitoisuudet nousevat 180:sta 280-300 ppmv:hen
          Vostokin hiilidioksidiennätyksen laajentaminen osoittaa, että hiilidioksidin nykytaso on ennennäkemätön viimeisen 420 vuoden aikana. 
          Esiteollisen holoseenin pitoisuuksia (~280 ppmv) esiintyy kaikkien interglasiaalien aikana,
          ja korkeimmat arvot (~300 ppmv) ovat noin 323 kilogrammaa BP:tä.
          <br></br>
        <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html">Data Measurements</a>
        <br></br>
        <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2">Data Source</a>
        </p>
        </div>
      <div> <Line options={options} data={data2}/></div>
      <div>
        <h5>Jääytimen 800k vuoden aikainen tutkimus CO2-mittauksista</h5>
        <p>
        Euroopan Ice Coring -hanke Etelämantereella Dome C:n jääytimessä (EDC) on mahdollistanut ilmakehän hiilidioksidipitoisuuksien 
        rekonstruoinnin viimeiset 800 000 vuotta. Tässä käymme läpi EDC:n CO2-tallennuksen vanhimman osan erilaisilla ilmanottomenetelmillä 
        ja ytimen osuuksilla.  Hallintamekanismia ei vielä täysin ymmärretä, mutta se liittyy riittämättömään kaasunottoon yhdistettynä jään 
        höllentämiseen varastoinnin aikana ja jään rakenteeseen. Tässä esitetty korjattu ennätys ratkaisee 
        osittain - mutta ei kokonaan - ongelman, jossa hiilidioksidin ja Antarktiksen lämpötilat ovat eri korreloivia, 
        kun ne löytyvät tästä ennätyksen vanhimmasta osasta. Lisäksi toimitamme tässä päivityksen, 
        joka kattaa 800 000 vuotta ilmakehän hiilidioksidin historiaa, mukaan lukien viimeaikaiset tutkimukset, 
        jotka kattavat viimeisen jääkauden.
        <br></br>
        <a href="https://ncei.noaa.gov/access/paleo-search/study/17975">Data Measurements</a>
        <br></br>
        <a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt">Data Source</a>
        </p>
        </div>
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
        backgroundColor:"#bb33ff",
        borderColor: "#bb33ff",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly"
        }
      },
      {
        label: "2000 year temperatures",
        data: SecondData,
        backgroundColor:'black',
        borderColor: "black",
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
        backgroundColor:'black',
        borderColor: "black",
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
          text: 'Years',
        },
      },
    }
  }

  
  return(
    <div style={{width: "1400px"}}>
      <div>
        <h5>Aineisto maapallon historiallisesta pintalämpötilasta</h5>
        <p>
        HadCRUT5 on ruudutettu aineisto, jossa on historiallisia pinnan lämpötilapoikkeamia verrattuna vuosien 1961–1990 vertailujaksoon. 
        Tiedot ovat saatavilla kuukausittain tammikuusta 1850 eteenpäin, viiden asteen ruudukolla sekä maailmanlaajuisina ja alueellisina 
        keskiarvoina. Aineisto on Met Office Hadley Centren ja Itä-Anglian yliopiston ilmastotutkimusyksikön yhteistyötuote.
        <br></br>
        <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">Data Measurements</a>
        <br></br>
        <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/data/current/download.html">Data Source</a>
        <br></br>
        Tällä rekonstruoidaan pohjoisen pallonpuoliskon lämpötiloja viimeiseltä 2 000 vuodelta yhdistämällä matalan resoluution proxiet
        ja vpuiden vuosirenkaidenvaihtodataa käyttäen aaltomuunnostekniikkaa, jonka avulla dataa voidaan käsitellä aikaskaalaisesti.
        Rekonstruktiomme mukaan korkeimmat lämpötilat, kuten 1900-luvulla ennen vuotta 1990, olivat noin 1000–1100 astetta,
        ja 0,7 K alle vuoden 1961–90 keskiarvon, olivat noin 1600 astetta. 
        Menneisyyden suuri luonnonvaihtelevuus viittaa siihen, että luonnon monivuotinen vaihtelu todennäköisesti jatkuu.
        <br></br>
        <a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005">Data Measurements</a>
        <br></br>
        <a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt">Data Source</a>
        </p>
        </div>
       <div><Line options={options} data={data}/></div>
       <div>
        <h5>Lämpötilan kehitys viimeisten kahden miljoonan vuoden aikana</h5>
        <p>
        Tässä esittelemme maapallon lämpötilan tilapainotteisen rekonstruktion viimeisten kahden miljoonan vuoden aikana, 
        joka on arvioitu yli 20 000 merenpinnan lämpötilapisteen rekonstruktioiden monikäyttöisestä tietokannasta. 
        Maailman lämpötila jäähtyi vähitellen, kunnes noin 1,2 miljoonaa vuotta sitten, ja sen jälkeen jäähtyminen pysähtyi nykyhetkeen asti.
        Jäähdytystrendi todennäköisesti pysähtyi ennen Pleistocene-siirtymän alkua3 ja ennen jäätiköiden enimmäiskoon kasvua noin
        0,9 miljoonaa vuotta sitten4–6. Maailmanlaajuinen jäähtyminen saattoi siis olla ennakkoehto, mutta se ei todennäköisesti ole
        ainoa syy-seurausmekanismi siirtymiselle lähes 100 000 vuoden jääkausiin Pleistoceenin puolivälin siirtymävaiheessa.
         Viimeisten 800 000 vuoden aikana polaarien vahvistuminen (lämpötilan muutoksen vahvistuminen navoilla suhteessa globaaliin 
        lämpötilamuutokseen) on ollut ajan mittaan vakaata, ja maapallon lämpötila ja ilmakehän kasvihuonekaasupitoisuudet 
        ovat olleet tiiviisti yhteydessä toisiinsa jäätikkösyklien aikana.
        <br></br>
        <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">Data Measurements</a>
        <br></br>
        <a href="http://carolynsnyder.com/papers/Snyder_Data_Figures.zip">Data Source</a>
        </p>
        </div>
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
      target="_blank" rel="noreferrer">GitHub</a> <a href ="https://www.youtube.com/watch?v=eG1PPv1ng4k" target="_blank" 
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

