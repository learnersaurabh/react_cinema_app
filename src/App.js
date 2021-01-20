import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
import "./App.css";

function App() {
  return (
    <div className="App">

      <Nav/>
      
      <Banner/>
      
      <Row title = "Netflix Originals"
       fetchUrl = {requests.fetchNetflixOriginals}
       isLargeRow/>
      <Row title = "Trending NOW" fetchUrl = {requests.fetchTrending}/>
      <Row title = "Top Rated Movies" fetchUrl = {requests.fetchTopRated}/>
      <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
