import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx'

function App() {
  return (
    <div className="App">
      {/* <h1>Henry Countries</h1> */}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
