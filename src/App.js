import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './Components/responsivness.css'

function App() {
  return (
    <>
    <Router>
    {/* User Route */}
      <Routes>
        {/* Login */}
        <Route path="/" element={<Home />} />
        </Routes>
      
    </Router>
  </>
  );
}

export default App;
