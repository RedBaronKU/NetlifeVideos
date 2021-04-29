import './App.css';
import Row from './Row.js';
import requests from './request.js';
import Banner from './Banner.js';
import Nav from './Nav.js'
function App() {
  return (
    <div className="App">
    <Nav/>
    <Banner/> 
    <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow></Row>
    <Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
    <Row title="Romance" fetchURL={requests.fetchRomanceMovies}></Row>
    <Row title="Comedy" fetchURL={requests.fetchComedyMovies}></Row>
    <Row title="Documentries" fetchURL={requests.fetchDocumentries}></Row>
    <Row title="Top Rated" fetchURL={requests.fetchTopRated}></Row>
    </div>
  );
}

export default App;
