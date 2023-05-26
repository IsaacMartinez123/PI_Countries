import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage.jsx'
import Home from './components/Home-Components/Home/Home';
import Navbar from './components/Home-Components/Nav/Navbar';
import { useSelector } from 'react-redux'
import { useState } from 'react';
import Detail from './components/Detail/Detail';
import CreateActivity from './components/Activities-Components/CreateActivity/CreateActivity';
import Activities from './components/Activities-Components/ActivitiesList/Activities';

function App() {

    const location = useLocation();
    const isHome = location.pathname;
    const countries = useSelector(state => state.countries);

    //paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(10)
    const lastCountry = currentPage * countriesPerPage;
    const firstCountry = lastCountry - countriesPerPage;
    const currentCountries = countries.slice(firstCountry, lastCountry);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Crear filas con 5 elementos en cada una
    const rows = [];
    const numRows = Math.ceil(currentCountries.length / 5);

    for (let i = 0; i < numRows; i++) {
        const row = currentCountries.slice(i * 5, (i + 1) * 5);
        rows.push(row);
    }

  return (
    <div className="App">
      
      {isHome === '/home'  &&  <Navbar isHome={isHome} setCurrentPage={setCurrentPage}/>}
      {isHome === '/create'  &&  <Navbar isHome={isHome} setCurrentPage={setCurrentPage}/>}
      {isHome === '/activities'  &&  <Navbar isHome={isHome} setCurrentPage={setCurrentPage}/>}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home rows={rows} paginado={paginado} currentPage={currentPage} countriesPerPage={countriesPerPage} setCurrentPage={setCurrentPage}/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path='/create' element={<CreateActivity/>}/>
        <Route path='/activities' element={<Activities/>}/>
      </Routes>
    </div>
  );
}

export default App;
