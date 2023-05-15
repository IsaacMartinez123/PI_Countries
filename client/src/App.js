import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage.jsx'
import Home from './components/Home/Home';
import Navbar from './components/Nav/Navbar';
// import { useDispatch } from 'react-redux'
// import { getCountry } from './redux/actions';
// import { useEffect } from 'react';
import Detail from './components/Detail/Detail';
import CreateActivity from './components/CreateActivity/CreateActivity';

function App() {

  const location = useLocation();
  const isHome = location.pathname;
  // const countries = useSelector(state => state.countries);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCountry());
  // }, [dispatch]);

  return (
    <div className="App">
      {isHome !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path='/create' element={<CreateActivity/>}/>
      </Routes>
    </div>
  );
}

export default App;
