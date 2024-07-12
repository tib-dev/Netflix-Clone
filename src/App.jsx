// import './assets/commonResources/js/jQuery';
import Nav from "./components/Nav/Nav";
import Row from "./components/Row/Row";
import requests from "./assets/js/requests";
import "./App.css";


function App() {
  return (
    <>
      <Nav />
      <div className="contianer-fluid">
        <div className="row">
          <Row
            title={requests.fetchNetflixOriginals.title}
            fetchURL={requests.fetchNetflixOriginals.fetchUrl}
          />
        </div>

        <div className="row">
          <Row
            title={requests.fetchTrendingNow.title}
            fetchURL={requests.fetchTrendingNow.fetchUrl}
          />
        </div>

        <div className="row">
          <Row
            title={requests.fetchTopRated.title}
            fetchURL={requests.fetchTopRated.fetchUrl}
          />
        </div>

        <div className="row">
          <Row
            title={requests.fetchActionMovies.title}
            fetchURL={requests.fetchActionMovies.fetchUrl}
          />
        </div>

        <div className="row">
          <Row
            title={requests.fetchComedyMovies.title}
            fetchURL={requests.fetchComedyMovies.fetchUrl}
          />
        </div>

        <div className="row">
          <Row
            title={requests.fetchHorrorMovies.title}
            fetchURL={requests.fetchHorrorMovies.fetchUrl}
          />
        </div>

        <div className="row">
          <Row
            title={requests.fetchRomanceMovies.title}
            fetchURL={requests.fetchRomanceMovies.fetchUrl}
          />
        </div>

        <div className="row">
          <Row
            title={requests.fetchDocumentariesMovies.title}
            fetchURL={requests.fetchDocumentariesMovies.fetchUrl}
          />
        </div>
      </div>
    </>
  );
}

export default App;
