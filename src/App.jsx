import './App.css';
import{BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'


function App() {



  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
