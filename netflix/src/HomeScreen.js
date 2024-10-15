import React from 'react';
import "./HomeScreen.css";
import Nav from './Nav';
import Banner from './Banner';
import Requests from './Requests';
import Row from './Row';

function HomeScreen(){
    return(
        <div className='HomeScreen'>
        <Nav />

        <Banner/>

        <Row title="NETFLIX ORIGINAL" fetchURL={Requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchURL={Requests.fetchTrending} />
        <Row title="Top Rated" fetchURL={Requests.fetchTopRated} />
        <Row title="Action Movies" fetchURL={Requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={Requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchURL={Requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchURL={Requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchURL={Requests.fetchDocumentaries} />
        </div>
        );
    
}

export default HomeScreen;